import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Button from "react-bootstrap/Button" ;


let famousQuotes = [

  {

    quote: "The only thing we have to fear is fear itself.",

    author: "Franklin D. Roosevelt",

    color: "#FDFD96"

  },

  {

    quote: "I've failed over and over and over again in my life that is why I succeed.",

    author: "Michael Jordan",

    color: "#F08080"

  },

  {

    quote: "In the middle of difficulty lies opportunity.",

    author: "Albert Einstein",

    color: "#ADD8E6"

  },

  {

    quote: "It does not matter how slowly you go as long as you do not stop.",

    author: "Confucius",

    color: "#98FB98"

  },

  {

    quote: "Life is what happens when you’re busy making other plans.",

    author: "John Lennon",

    color: "#DEB887"

  },

  {

    quote: "Love the life you live. Live the life you love.",

    author: "Bob Marley",

    color: "#7B68EE"

  },

  {

    quote: "To be or not to be, that is the question.",

    author: "William Shakespeare",

    color: "#DB7093"

  }

];

const styles={
  backgroundcolor: 'blue',
  color:'',
  fontSize: 40,
  
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: "",
      author: "",
      color:"",
    };
  }

  quoteRandomizer = () => {
    const randomIndex =Math.floor(Math.random() * famousQuotes.length);
    const randomQuote = famousQuotes[randomIndex];
    this.setState({ advice: randomQuote.quote, author: randomQuote.author, color:randomQuote.color});
  };

  componentDidMount() {
    // Call the quoteRandomizer function when the component is mounted
    this.quoteRandomizer();
  }

 
  render() {
    
    return (
      <div class="container" style={{...styles, color: this.state.color}}>
        <style>{`body { background-color: ${this.state.color}; }`}</style>
        <h1>Random quote Machine</h1>

        <div className="card" id="quote-box">
          <p id="text">{this.state.advice}</p>
          <p>Author:</p>
          <p id="author">{this.state.author}</p>
          <Button id="new-quote" onClick={this.quoteRandomizer} color="{this.state.color}">
            New Quote
          </Button>
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
            <i className="bi bi-twitter-x"></i>Tweet
          </a> 
        </div>
      </div>
    );
  }
}

export default App;
