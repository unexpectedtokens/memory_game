import React, { Component } from "react";
import Card from "./components/Card/Card";
import "./App.css";
import "./components/Card/Card.css";

class App extends Component {
  state = {
    cards: [
      { id: 1, number: 2, showCard: false },
      { id: 2, number: 4, showCard: false },
      { id: 3, number: 3, showCard: false },
      { id: 4, number: 2, showCard: false },
      { id: 5, number: 3, showCard: false },
      { id: 6, number: 4, showCard: false },
      { id: 7, number: 2, showCard: false },
      { id: 8, number: 1, showCard: false }
    ],
    currentNumbers: [],
    match: false
  };

  check = numberToCheck => {
    let numbers = this.state.currentNumbers;
    if (numbers.length < 2) {
      this.setState({
        currentNumbers: [...this.state.currentNumbers, numberToCheck]
      });
    } else if ((numbers.length = 2 && numbers[0] === numbers[1])) {
      this.setState({
        currentNumbers: [],
        match: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.cards.map(card => {
          return (
            <Card
              clicked={() => {
                this.check(card.number);
              }}
              number={card.number}
              key={card.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
