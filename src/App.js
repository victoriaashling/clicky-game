import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ScoreBar from "./components/ScoreBar/ScoreBar";
import Footer from "./components/Footer/Footer";
import GameContainer from "./components/GameContainer";
import Card from "./components/Card";

class App extends Component {
  state = {
    verdict: "Hello",
    currentScore: 0,
    topScore: 0,
    cards: ["red", "orange", "yellow", "yellowgreen", "green", "sky blue", "blue", "indigo", "lavender", "purple", "pink", "brown"],
    clickedThisRound: [],
    shuffled: []
  }

  componentDidMount() {
    this.shuffleCards(this.state.cards);
  }

  handleClick = event => {
    let newId = event.currentTarget.id;
    console.log(newId);
    if (this.state.clickedThisRound.includes(newId)) {
      this.resetGame();
    }
    else {
      this.setState({ clickedThisRound: [...this.state.clickedThisRound, newId]}, () => console.log(this.state.clickedThisRound));
      this.setState({currentScore: this.state.currentScore + 1});
      this.shuffleCards(this.state.cards);
    }
  }

  resetGame = () => {
    this.setState({currentScore: 0});
    this.setState({clickedThisRound: []});
    this.shuffleCards(this.state.cards);
  }

  shuffleCards = array => {
    for (let i = 0; i < array.length; i++) {
      let temp = array[i];
      let randomNum = Math.floor(Math.random() * (array.length - 1));
      array[i] = array[randomNum];
      array[randomNum] = temp;
    }
    this.setState({ shuffled: array }, () => console.log(this.state.shuffled));
  }

  render() {
    return (
      <div className="App">
        <ScoreBar verdict={this.state.verdict} currentScore={this.state.currentScore} topScore={this.state.topScore} />
        <Jumbotron />
        <GameContainer>
          {this.state.shuffled.map(card => (
            <Card 
              color={card} 
              id={card}
              clickHandler={this.handleClick}
              key={card}
              >
                {card}
            </Card>
          ))}
        </GameContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
