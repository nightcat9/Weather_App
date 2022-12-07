import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <div className="top">
                        <div>
                            <Card.Title>
                                <p className="city">{data.name}</p>
                                <p className="weather-description">{data.weather[0].description}</p>
                            </Card.Title>
                        </div>
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather" className="weather-icon" />
                    </div>
                    <div className="bottom">
                        <Card.Text>
                            <Row>
                                <Col>
                                    <p className="temperature">{Math.round(data.main.temp)}°F</p>
                                </Col>
                                <Col>
                                    <div className="details">
                                        <div className="parameter-row">
                                            <h6 className="parameter-label">Details</h6>
                                        </div>
                                        <div className="parameter-row">
                                            <span className="parameter-label">Feels like: </span>
                                            <span className="parameter-value">{Math.round(data.main.feels_like)}°F</span>
                                        </div>
                                        <div className="parameter-row">
                                            <span className="parameter-label">Wind: </span>
                                            <span className="parameter-value">{Math.round(data.wind.speed)} mph</span>
                                        </div>
                                        <div className="parameter-row">
                                            <span className="parameter-label">Humidity: </span>
                                            <span className="parameter-value">{data.main.humidity}%</span>
                                        </div>
                                        <div className="parameter-row">
                                            <span className="parameter-label">Visibility: </span>
                                            <span className="parameter-value">{Math.round(data.visibility / 1000)} mi</span>
                                        </div>
                                        <div className="parameter-row">
                                            <span className="parameter-label">Pressure: </span>
                                            {/* convert returned data (millibars) to inches of mercury - 1 mb = 0.02953 inHg */}
                                            <span className="parameter-value">{Math.round(data.main.pressure * 0.02953)} in</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CurrentWeather;