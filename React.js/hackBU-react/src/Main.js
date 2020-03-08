import React, { Component } from "react";

class Main extends Component {
  render() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      console.log("effect ran");
    })

    return (
        <div>
          <h1>HackBU Store</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="content">
          <div>
          <form className="search-form">
          <input className="search-bar" type="text" />
          <button
          onclick={() => setCounter(counter+1)}
          className="search-button"
          type="submit"
          </form>
          </div>
          </div>
        </div>
    );
  }
}

export default Main;
