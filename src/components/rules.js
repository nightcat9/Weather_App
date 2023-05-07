import { Component } from 'react';
import { Container, Table, Col, Row } from 'react-bootstrap';

class RulesPage extends Component {

    render() {
        return <div className='rules'>
            <Container>
                <h1 className="heading-title">Test Your Knowledge!</h1>
                <Row>
                    <Col md={{ span: 7, offset: 1 }}>
                        <h2>Play the game to see if you're smarter than a meteorologist!</h2>
                        <h3 className='heading-three'>Rules</h3>
                        <ol>
                            <li>Enter a city in the search bar.</li>
                            <li>Fill out the form with your guesses of the current weather.</li>
                            <li>Click Submit when you're finished.</li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1 }}>
                        <h3 className='heading-three'>Scoring</h3>
                        <h4>Guess is: </h4>
                        <Table>
                            <tbody>
                                <tr>
                                    <td><h5>Bullseye</h5></td>
                                    <td className="scoreColor">+ 25</td>
                                </tr>
                                <tr>
                                    <td><h5>Within: 1 - 5</h5></td>
                                    <td className="scoreColor">+ 15</td>
                                </tr>
                                <tr>
                                    <td><h5>Within: 6 - 15</h5></td>
                                    <td className="scoreColor">+ 5</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default RulesPage;
