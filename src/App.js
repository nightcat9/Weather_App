import './custom.scss';
import GuessingGame from './components/guessing-game';
import { Component } from 'react';
import ResultsPage from './components/results-page';
import HighScoresPage from './components/high-scores';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Guess Page",
    };
    this._navigate = this._navigate.bind(this);
  }
  _navigate(desiredState) {
    console.log("temperature: " + desiredState.temperature);
    let userGuesses = {};
    if (desiredState.userGuesses != null) {
      userGuesses = desiredState.userGuesses;
    }
    let score = 0;
    if (desiredState.score != null) {
      score = desiredState.score;
    }
    let weatherResponse = {}
    if (desiredState.weatherResponse != null) {
      weatherResponse = desiredState.weatherResponse;
    }
    this.setState({
      currentPage: desiredState.navigationTarget,
      score: score,
      weatherResponse: weatherResponse,
      userGuesses: userGuesses
    });
  }

  render() {
    return (
      <div>
        <GuessingGame
          currentPage={this.state.currentPage}
          navigate={this._navigate}
        />
        <ResultsPage
          currentPage={this.state.currentPage}
          score={this.state.score}
          navigate={this._navigate}
          weatherResponse={this.state.weatherResponse}
          userGuesses={this.state.userGuesses}
        />
        <HighScoresPage
          currentPage={this.state.currentPage}
          navigate={this._navigate}
          weatherResponse={this.state.weatherResponse}
          score={this.state.score}
          userGuesses={this.state.userGuesses}
        />
      </div>
    );
  }
}

export default App;
