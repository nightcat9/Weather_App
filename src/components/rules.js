import { Component } from 'react';
import { Container } from 'react-bootstrap';

class RulesPage extends Component {

    render() {
        return <div>
            <Container>
                <h1 className="heading-title">Test Your Knowledge!</h1>
                <p>Play the game to see if you're smarter than a meteorologist!</p>
                <h3 className='heading-three'>Rules</h3>
                <ul>
                    <li>Pick a city from the search bar.</li>
                    <li>Fill out the form with your guesses of the current weather.</li>
                    <li>Click Submit when you're finished.</li>
                </ul>
                <h3 className='heading-three'>Scoring</h3>
                <h4>Guess is: </h4>
                <ul>
                    <li>exactly correct: +25 points</li>
                    <li>1-5 digits off: +15 points</li>
                    <li>6-15 digits off: +5 points</li>
                </ul>
                <p>*Each guess for each category is calculated separately and added to your score.*</p>
            </Container>
        </div>
    }
}

export default RulesPage;
