import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Tab, Tabs } from 'react-bootstrap';
import davidBowie from '../images/davidBowie.png';
import temp from '../images/temp2.png';
import feelslike from '../images/feel.png';
import wind from '../images/wind.png';
import humidity from '../images/humidity.png';
import visibility from '../images/visibility.png';
import shocker from '../images/shocker.jpg';
import Search from "./search/search";
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';
import RulesPage from "./rules";
import HeaderImage from "./header";
import Footer from "./footer";


class GuessingGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 52,
      feelsLike: 50,
      wind: 10,
      humidity: 68,
      visibility: 9,
      pressure: 30,
      score: 0,
    };

    this.currentWeather = {};
    this.forecast = {};
    this.calculateResults = this.calculateResults.bind(this);
    this.handleOnSearchChange = this.handleOnSearchChange.bind(this);

    // binding the form elements --> I totally know what I'm doing 🙃
    this.changeTemp = this.changeTemp.bind(this);
    this.changeFeelsLike = this.changeFeelsLike.bind(this);
    this.changeWind = this.changeWind.bind(this);
    this.changeHumidity = this.changeHumidity.bind(this);
    this.changeVisibility = this.changeVisibility.bind(this);
    this.changePressure = this.changePressure.bind(this);
  }
  // calculate user's score
  calculateResults(e) {
    e.preventDefault();

    let userGuesses = {
      temperature: this.state.temperature,
      feelsLike: this.state.feelsLike,
      wind: this.state.wind,
      humidity: this.state.humidity,
      visibility: this.state.visibility,
      pressure: this.state.pressure,

      // user scores
      tempScore: 0,
      feelsLikeScore: 0,
      windScore: 0,
      humidityScore: 0,
      visibilityScore: 0,
      pressureScore: 0
    }

    let score = 0;

    //temperature
    let tempDifference = Math.abs(this.state.actualTemp - this.state.temperature);
    if (tempDifference === 0) {
      score += 25;
      userGuesses.tempScore = 25;
    }
    if (tempDifference > 0 && tempDifference < 6) {
      score += 15;
      userGuesses.tempScore = 15;
    }
    if (tempDifference > 5 && tempDifference < 16) {
      score += 5;
      userGuesses.tempScore = 5;
    }

    //feels like
    let feelsLikeDifference = Math.abs(this.state.actualFeelsLike - this.state.feelsLike);
    if (feelsLikeDifference === 0) {
      score += 25;
      userGuesses.feelsLikeScore = 25;
    }
    if (feelsLikeDifference > 0 && feelsLikeDifference < 6) {
      score += 15;
      userGuesses.feelsLikeScore = 15;
    }
    if (feelsLikeDifference > 5 && feelsLikeDifference < 16) {
      score += 5;
      userGuesses.feelsLikeScore = 5;
    }

    //wind
    let windDifference = Math.abs(this.state.actualWind - this.state.wind);
    if (windDifference === 0) {
      score += 25;
      userGuesses.windScore = 25;
    }
    if (windDifference > 0 && windDifference < 6) {
      score += 15;
      userGuesses.windScore = 15;
    }
    if (windDifference > 5 && windDifference < 16) {
      score += 5;
      userGuesses.windScore = 5;
    }

    //humidity
    let humidityDifference = Math.abs(this.state.actualHumidity - this.state.humidity);
    if (humidityDifference === 0) {
      score += 25;
      userGuesses.humidityScore = 25;
    }
    if (humidityDifference > 0 && humidityDifference < 6) {
      score += 15;
      userGuesses.humidityScore = 15;
    }
    if (humidityDifference > 5 && humidityDifference < 16) {
      score += 5;
      userGuesses.humidityScore = 5;
    }

    //visibility
    let visibilityDifference = Math.abs(this.state.actualVisibility - this.state.visibility);
    if (visibilityDifference === 0) {
      score += 25;
      userGuesses.visibilityScore = 25;
    }
    if (visibilityDifference > 0 && visibilityDifference < 6) {
      score += 15;
      userGuesses.visibilityScore = 15;
    }
    if (visibilityDifference > 5 && visibilityDifference < 16) {
      score += 5;
      userGuesses.visibilityScore = 5;
    }

    //pressure
    let pressureDifference = Math.abs(this.state.actualPressure - this.state.pressure);
    if (pressureDifference === 0) {
      score += 25;
      userGuesses.pressureScore = 25;
    }
    if (pressureDifference > 0 && pressureDifference < 6) {
      score += 15;
      userGuesses.pressureScore = 15;
    }
    if (pressureDifference > 5 && pressureDifference < 16) {
      score += 5;
      userGuesses.pressureScore = 5;
    }

    this.state.score = score;
    this.state.userGuesses = userGuesses;
    this.state.navigationTarget = "Results Page";
    this.props.navigate(this.state);
    let highScoresString = localStorage.getItem('highScores');
    let highScores = JSON.parse(highScoresString) ?? [];
    let city = this.state.weatherResponse.name
    let lat = this.state.lat;
    let lon = this.state.lon;
    let newScore = { score, city, lat, lon }
    let scoreExists = false;
    for (var i = 0; i < highScores.length; i++) {
      if (highScores[i].lat == newScore.lat && highScores[i].lon == newScore.lon) {
        if (highScores[i].score < newScore.score) {
          highScores.push(newScore)
          highScores.splice(i, 1);
        }
        scoreExists = true;
      }
    }
    if (!scoreExists) {
      highScores.push(newScore)
    }
    localStorage.setItem('highScores', JSON.stringify(highScores))
  };

  // on change handlers 
  changeTemp(event) {
    this.setState({ temperature: event.target.value });
  }
  changeFeelsLike(event) {
    this.setState({ feelsLike: event.target.value });
  }
  changeWind(event) {
    this.setState({ wind: event.target.value });
  }
  changeHumidity(event) {
    this.setState({ humidity: event.target.value });
  }
  changeVisibility(event) {
    this.setState({ visibility: event.target.value });
  }
  changePressure(event) {
    this.setState({ pressure: event.target.value });
  }

  handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        this.setState({ weatherResponse: weatherResponse })
        this.setState({ actualTemp: Math.round(weatherResponse.main.temp) })
        this.setState({ actualFeelsLike: Math.round(weatherResponse.main.feels_like) })
        this.setState({ actualWind: Math.round(weatherResponse.wind.speed) })
        this.setState({ actualHumidity: Math.round(weatherResponse.main.humidity) })
        this.setState({ actualVisibility: Math.round(weatherResponse.visibility / 1000) })
        this.setState({ actualPressure: Math.round(weatherResponse.main.pressure * 0.02953) })
        this.setState({ lat: lat, lon: lon })
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.props.currentPage !== "Guess Page") {
      return null;
    }
    return <div>
      <HeaderImage />
      <Container>
        <Tabs
          defaultActiveKey="game"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="game" title="Game">
            <Row>
              <h1 className="heading-title">Let's Play!</h1>
            </Row>
            <Row>
              <h2>Search for a City Below</h2>
              <Search onSearchChange={this.handleOnSearchChange}></Search>
            </Row>
            <div className="bottom-section-game" />
            <Row>
              <Col xs={6}><img src={shocker} className="shocker" alt="Lightning Bolt" responsive /></Col>
              <Col xs={6}>
                <h3>
                  Make your predictions below and click submit
                </h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formTemp">
                    <img src={temp} alt="thermometer" className="icon" />
                    <Form.Label>Temperature (°F)</Form.Label>
                    <Form.Control type="number" value={this.state.temperature} onChange={this.changeTemp} placeholder="52°F" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formFeelsLike">
                    <img src={feelslike} alt="Thermometer and sun" className="icon" />
                    <Form.Label>Feels Like (°F)</Form.Label>
                    <Form.Control type="number" value={this.state.feelsLike} onChange={this.changeFeelsLike} placeholder="50°F" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formWind">
                    <img src={wind} alt="wind" className="icon" />
                    <Form.Label>Wind (mph)</Form.Label>
                    <Form.Control type="number" value={this.state.wind} onChange={this.changeWind} placeholder="10 mph" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formHumidity">
                    <img src={humidity} alt="humidity" className="icon" />
                    <Form.Label>Humidity (%)</Form.Label>
                    <Form.Control type="number" value={this.state.humidity} onChange={this.changeHumidity} placeholder="68%" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formVisibility">
                    <img src={visibility} alt="fog" className="icon" />
                    <Form.Label>Visibility (mi)</Form.Label>
                    <Form.Control type="number" value={this.state.visibility} onChange={this.changeVisibility} placeholder="9 mi" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPressure">
                    <img src={davidBowie} alt="David Bowie icon" className="icon" />
                    <Form.Label>Pressure (in)</Form.Label>
                    <Form.Control type="number" value={this.state.pressure} onChange={this.changePressure} placeholder="30 in" />
                  </Form.Group>
                  <Button onClick={this.calculateResults} variant="success" type="submit" disabled={!this.state.weatherResponse} className="button">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="rules" title="Rules">
            <RulesPage />
          </Tab>
        </Tabs>
      </Container>
      <Footer />
    </div>;
  }
}

export default GuessingGame;