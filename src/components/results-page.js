import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import CurrentWeather from "./search/current-weather/current-weather";
import davidBowie from '../images/davidBowie.png';
import temp from '../images/temp2.png';
import feelslike from '../images/feel.png';
import wind from '../images/wind.png';
import humidity from '../images/humidity.png';
import visibility from '../images/visibility.png';
import HeaderImage from "./header";
import Footer from "./footer";

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 52,
            score: 0

        };
        this._navigateToGuess = this._navigateToGuess.bind(this);
        this._navigateToHighScores = this._navigateToHighScores.bind(this);
    }

    _navigateToGuess(e) {
        e.preventDefault();
        this.state.navigationTarget = "Guess Page";
        this.props.navigate(this.state);
    };

    _navigateToHighScores(e) {
        e.preventDefault();
        this.state.navigationTarget = "High Scores Page";
        this.props.navigate(this.state);
    };

    render() {
        if (this.props.currentPage !== "Results Page") {
            return null;
        }
        if (this.props.score !== null) {
            this.state.score = this.props.score;
        }
        if (this.props.weatherResponse !== null) {
            this.state.weatherResponse = this.props.weatherResponse;
        }
        let funnyMsg = "";
        if (this.state.weatherResponse.main.temp > 95) {
            funnyMsg = "Hey, at least it's not snowing."
        }
        if (this.state.weatherResponse.main.temp > 79 && this.state.weatherResponse.main.temp < 96) {
            funnyMsg = "It puts the sunscreen on its skin or else it gets the hose again."
        }
        if (this.state.weatherResponse.main.temp > 64 && this.state.weatherResponse.main.temp < 80) {
            funnyMsg = "It's a decent day, because it just friggin' is."
        }
        if (this.state.weatherResponse.main.temp > 49 && this.state.weatherResponse.main.temp < 65) {
            funnyMsg = "Enjoy today. Tomorrow could suck butt."
        }
        if (this.state.weatherResponse.main.temp > 34 && this.state.weatherResponse.main.temp < 50) {
            funnyMsg = "It's a good day for naps, followed by more naps."
        }
        if (this.state.weatherResponse.main.temp > 19 && this.state.weatherResponse.main.temp < 35) {
            funnyMsg = "Sorry, too cold for shorts today."
        }
        if (this.state.weatherResponse.main.temp < 20) {
            funnyMsg = "Why do you live where the air hurts your face?."
        }
        if (this.props.userGuesses != null) {
            this.state.userGuesses = this.props.userGuesses;
        }
        return <div>
            <HeaderImage />
            <Container>
                <Row>
                    <h1 className="heading-title">Results</h1>
                </Row>
                <Row>
                    <Col>
                        {this.state.weatherResponse && <CurrentWeather data={this.state.weatherResponse} />}
                        <div className="funnyMsg">{funnyMsg}</div>
                    </Col>
                    <Col>
                        <div className="score">Your Score: {this.state.score}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this._navigateToGuess} variant="success" type="submit">
                            Play Again!
                        </Button>
                        <Button onClick={this._navigateToHighScores} variant="primary" type="submit">
                            High Scores
                        </Button>
                    </Col>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <td>
                                        <h5>You Guessed</h5>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={temp} alt="thermometer" className="icon" /></td>
                                    <td>Temperature</td>
                                    <td>{this.state.userGuesses.temperature}</td>
                                </tr>
                                <tr>
                                    <td><img src={feelslike} alt="Thermometer and sun" className="icon" /></td>
                                    <td>Feels Like</td>
                                    <td>{this.state.userGuesses.feelsLike}</td>
                                </tr>
                                <tr>
                                    <td><img src={wind} alt="wind" className="icon" /></td>
                                    <td>Wind</td>
                                    <td>{this.state.userGuesses.wind}</td>
                                </tr>
                                <tr>
                                    <td><img src={humidity} alt="humidity" className="icon" /></td>
                                    <td>Humidity</td>
                                    <td>{this.state.userGuesses.humidity}</td>
                                </tr>
                                <tr>
                                    <td><img src={visibility} alt="fog" className="icon" /></td>
                                    <td>Visibility</td>
                                    <td>{this.state.userGuesses.visibility}</td>
                                </tr>
                                <tr>
                                    <td><img src={davidBowie} alt="David Bowie icon" className="icon" /></td>
                                    <td>Pressure</td>
                                    <td>{this.state.userGuesses.pressure}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>;
    }
}

export default ResultsPage;