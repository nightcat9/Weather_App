import { Component } from "react";
import weatherHeader from '../images/new-header.png';


class HeaderImage extends Component {
    render() {
        return <div>
            <img src={weatherHeader} alt="are you smarter than a 5th grade header" className="header" />
        </div>
    }
}

export default HeaderImage;