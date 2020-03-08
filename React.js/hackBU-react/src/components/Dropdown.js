import React from 'react';
import './Dropdown.css';


class Dropdown extends React.Component {

constructor(titleMessage) {
 super();

 this.state = {
       displayMenu: false,
       title: titleMessage,
       currentTier: "View tiers"
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  handleCheck(e, index) {
   let txt = e.target.innerText;
   this.setState({currentTier: txt});
   var index = -1;
   if (txt.includes("One")) index = 0;
   else if (txt.includes("Two")) index = 1;
   else index = 2;
   this.props.onSelectPrice(index);
  }

  render() {
    return (
        <div className="dropdown" style = {{background:"#1A323F;", width:"200px", float:"right", marginRight:"10px"}} >
         <div className="button" onClick={this.showDropdownMenu}>{this.state.currentTier}</div>

          { this.state.displayMenu ? (
          <ul>
         <li onClick={this.handleCheck.bind(this)}><a href="#">Tier One</a></li>
         <li onClick={this.handleCheck.bind(this)}><a href="#">Tier Two</a></li>
         <li onClick={this.handleCheck.bind(this)}><a href="#">Tier Three</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;
