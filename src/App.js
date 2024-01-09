import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: "",
      author: "",
    };
  }

  fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response has a structure like { slip: { advice: "example" } }
        this.setState({
          advice: data.slip.advice,
        });
        this.setState({
          author: data.slip.id,
        });
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };
  render() {
    return (
      <div>
      
        <div className="Card-Container">
        <div className="" id="quote-box">
          <p id="text">{this.state.advice}</p>
          <p>Author:</p>
          <p id="author">{this.state.author}</p>
          <Button id="new-quote" onClick={this.fetchAdvice} variant="primary">
            New Quote
          </Button>
          <a id="tweet-quote" href="_blank" target="_blank">
            <i className="bi bi-twitter-x"></i>Tweet
          </a>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
