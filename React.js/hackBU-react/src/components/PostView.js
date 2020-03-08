import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Payment from './Payment.js';
import './PostView.css';
import NavBar from './NavBar.js';
import '../App.css';
import calendar from '../images/calendar.png';
import Modal from 'react-modal';
import Dropdown from './Dropdown.js'

function PurchasedBanner(props) {
  const bannerStyle =  {
    fontSize: '14px',
    backgroundColor: 'green',
    boxShadow: '1px'
  };
  return <h1 style={bannerStyle}>Thanks for purchasing a {props.name}!</h1>;
}

function EmptyBanner(props) {
  const bannerStyle =  {
    display: 'none'
  };
  return <h1 style={bannerStyle}></h1>;
}

function Display(props) {
  if (props.isSupporting) {
    return <PurchasedBanner tier={props.tier} name={props.name} />;
  }
  return <EmptyBanner tier={props.tier} name={props.name}/>;
}


class PostView extends Component {

  constructor(props){
    super(props);
    var id = "";
    var userName = "";

    if (localStorage.getItem('userID') != null && localStorage.getItem('name') != null) {
      id = localStorage.getItem('userID');
      userName = localStorage.getItem('name');
    }

    this.state = {
      userID: id,
      name: userName,
      title: "",
      description: "",
      tierDescriptions: "",
      timestamp: "",
      price: "",
      showModal: false,
      paypalEmail: ""
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSlider = this.handleSlider.bind(this);

    this.customStyles = {
      content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#1A323F'
      }
    };
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  priceChanged = (index) => {
    this.setState({ priceIndex: index });
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    });
  };

  changeHandler() {
    alert("changeHandler called");
  }

  retrievePost = async () => {
    const response = await fetch(process.env.REACT_APP_SITENAME + "retrievePost.php?postID=" + this.props.match.params.postID);
    const data = await response.json();
    console.log("DATA = " + data.postData[0].title);
    return data.postData[0];
  }

  removeSpaces(str) {
    return str.replace(/\s/g,'');
  }

  parseTiers(tierNum) {
    let arr = new Array("150.99 250.99 305.00", "499.99 535.99 580.99", "499.99 580.99 1200.50");
    return arr[tierNum];
  }

  handlePayment(tierNum) {
    //render PayPal button (or just remove 'display: none;')
    //set total equal to this.price[tierNum-1]
  }

  handleSlider(event) {
    this.setState({sliderValue: Math.round(event.target.value)});
  }

  isSubscribed = async () => {
    const response = await fetch(process.env.REACT_APP_SITENAME + "isCurrentlySupporting.php?userID="+this.state.userID+"&postID="+this.props.match.params.postID);
    const data = await response.json();
    //alert(data);
  }


  componentDidMount() {
    this.retrievePost().then(postData => {
      console.log(postData);
      this.setState({
        title : postData.title,
        description : postData.description,
        timestamp : postData.timestamp,
        tierDescriptions : postData.tierDescriptions,
        creatorName : postData.creatorName,
        noSpaces : this.removeSpaces(postData.creatorName),
        price : this.parseTiers(postData.tierPrice),
        priceIndex : 0,
        paypalEmail : postData.paypalEmail
      })
    });

    this.isSubscribed().then(data => {
      if (data != null) {
        this.setState({
          tier: data.tier
        })
      }
    });
  }

  render() {
    const tiers = ["Buy"];

    return (
      <div className="listing">
      <NavBar/>
      <Display isSupporting={this.state.tier != null} name={this.state.name} tier={this.state.tier} />
      <img src={process.env.REACT_APP_SITENAME+"post_images/"+this.props.match.params.postID+"0.jpg"} alt=""/>
      <h1>{this.state.title}</h1>
      <p className="date">{this.state.timestamp.substring(0, this.state.timestamp.indexOf(' '))}</p>
      <div className="wrapper">
      <div className="description">
      <p>{this.state.description}</p>
      </div>
      <div className="box">
      <h1 className="inline">$ {this.state.price.split(" ")[this.state.priceIndex]}</h1>
      <span>{tiers[this.state.priceIndex]}</span>
      <Payment total={this.state.price.split(" ")[this.state.priceIndex]} onChange={this.changeHandler} />
      </div>
      </div>
      <div className="support">
      </div>
    </div>
  );
};
}

export default PostView;
