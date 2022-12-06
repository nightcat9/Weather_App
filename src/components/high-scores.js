import React, { Component } from "react";
import { Container, Row, Button, Table, Card } from 'react-bootstrap';
import HeaderImage from "./header";
import Footer from "./footer";

class HighScoresPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        };
        this._navigateToGuess = this._navigateToGuess.bind(this);
        this._navigateToResults = this._navigateToResults.bind(this);
    }

    _navigateToGuess(e) {
        e.preventDefault();
        this.state.navigationTarget = "Guess Page";
        this.props.navigate(this.state);
    };

    _navigateToResults(e) {
        e.preventDefault();
        this.state.navigationTarget = "Results Page";
        this.props.navigate(this.state);
    };

    render() {
        if (this.props.currentPage !== "High Scores Page") {
            return null;
        }
        if (this.props.weatherResponse != null) {
            this.state.weatherResponse = this.props.weatherResponse;
        }
        let highScoresString = localStorage.getItem('highScores');
        let highScores = JSON.parse(highScoresString) ?? [];
        const displayScores = highScores.map((highScore) =>
            <tr><td>{highScore.score}</td><td>{highScore.city}</td></tr>
        )
        return <div>
            <HeaderImage />
            <Container>
                <Row>
                    <h1 className="heading-title">High Scores</h1>
                </Row>
                <Card style={{ width: '30rem' }}>
                    <Card.Body className="text-right">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Score</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayScores}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                <Button onClick={this._navigateToGuess} variant="success" type="submit">
                    Play Again!
                </Button>
                <Button onClick={this._navigateToResults} variant="primary" type="submit">
                    Back to Results
                </Button>
            </Container>
            <Footer />
        </div>;
    }
}

export default HighScoresPage;