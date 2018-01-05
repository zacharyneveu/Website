import React from 'react';
import './Buttons.css';

/** This class provides a styled home button with a method to return
 * to the home page when clicked
 */
class HomeButton extends React.Component {
    toHome() {
        window.location.replace('/');
    }
    render() {
        return(
          <button className="HomeButton" onClick={this.toHome} id="homeButton">
            Home
          </button>  
        );
    }
}

export default HomeButton