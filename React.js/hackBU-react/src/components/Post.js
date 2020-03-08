import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';


const Post = ({title, image, timestamp, description, postID, key}) => {

  if (description.length > 150) description = description.substring(0, 150) + "...";
  if (timestamp != null) timestamp = timestamp.substring(0, timestamp.indexOf(' '));


return (
    <div className="card">
      <img src={image} alt=""/>
      <button className="overlay">
        <Link to={`/View/${postID}`}>
        <div className="view">View</div>
        </Link>
      </button>
      <h1>{title}</h1>
      <p className="leftAttribute">{timestamp}</p>
      <p>{description}</p>
    </div>
  );
};

export default Post;
