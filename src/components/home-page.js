import React, { Component } from "react";
import headerimg from '../images/headerimg.png';
import { Container, Button } from 'react-bootstrap';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return <div>
            <img src={headerimg} alt="Header" className='bg-image card' />
            <Button variant='success'>START</Button>
        </div>;
    }
}

export default HomePage;