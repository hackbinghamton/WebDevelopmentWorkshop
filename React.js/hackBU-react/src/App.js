import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post.js';
import NavBar from './components/NavBar.js';

const App = () => {

  const [featured, setFeatured] = useState([]);
  const [recents, setRecents] = useState([]);
  const [popular, setPopular] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPosts();

  }, []);

  const getPosts = async () => {
    const response = await fetch(process.env.REACT_APP_SITENAME + "retrieveExplorePageWeb.php");
    const data = await response.json();
    console.log(data.explorePageData[0]);
    if (data.explorePageData[0].featured != null && data.explorePageData[0].featured.length >= 3) {
      var feat = [data.explorePageData[0].featured[0], data.explorePageData[0].featured[1], data.explorePageData[0].featured[2]];
      setFeatured(feat);
    }
    if (data.explorePageData[0].recent != null && data.explorePageData[0].recent.length >= 3) {
      var rec = [data.explorePageData[0].recent[0], data.explorePageData[0].recent[1], data.explorePageData[0].recent[2]];
      setRecents(rec);
    }
    if (data.explorePageData[0].popular != null && data.explorePageData[0].popular.length >= 3) {
      var pop = [data.explorePageData[0].popular[0], data.explorePageData[0].popular[1], data.explorePageData[0].popular[2]];
      setPopular(pop);
    }
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="App">
      <NavBar/>
      <div className="content">
      </div>
      <div className="searchBackground">
      <h1>Welcome to the HackBU Merch Store</h1>
      <p>Search for a product by name</p>
      <form className="searchBar">
      <input type="text" value={search} onChange={updateSearch}/>
      <button type="submit">Search</button>
      </form>
      </div>

      <div>
        <h1>Featured Merch</h1>
        <div className="row">
        {featured.map(post => (
          <Post title={post.title} postID={post.postID} image={"https://cloudraise.co/Supportr/post_images/"+post.postID+"0.jpg"} timestamp={post.timestamp} description={post.description}/>
        ))
        }
        </div>
        <h1>Recently Added</h1>
        <div className="row">
          {popular.map(post => (
            <Post title={post.title} postID={post.postID} image={"https://cloudraise.co/Supportr/post_images/"+post.postID+"0.jpg"} timestamp={post.timestamp} description={post.description}/>
          ))
          }
        </div>
        <h1>Popular Merch</h1>
        <div className="row">
          {recents.map(post => (
            <Post title={post.title} postID={post.postID} image={"https://cloudraise.co/Supportr/post_images/"+post.postID+"0.jpg"} timestamp={post.timestamp} description={post.description}/>
          ))
          }
      </div>
      </div>
    </div>
  );
};

export default App;
