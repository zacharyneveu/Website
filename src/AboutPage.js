import React from 'react';
import HomeButton from './Buttons'
import ImageDial from './ImageDial';
import './ContentPage.css';

/** About page displays a brief about me and guages showing my proficiency
 * in a few key languages
 */
class AboutPage extends React.Component {
    render() {
        const dialsStyle = {
            width: '100%'
        }
        return(
            <div className="PageContainer">
                <div className="Page">
                <br />
                <h1>About Me</h1>
                <br />
                <p>
                   Hi! My name is Zach, and I like to code.  I am a 3<sup>rd
                   </sup> year student at Northeastern University majoring in
                   Computer Engineering and minoring in Music Recording. I like
                   to write modular, well documented code that is easy to reuse.
                   In addition to programming I like to DJ, Ski, and play
                   Cello.
                </p>
                <div id="Dials" style={dialsStyle}>
                    {/*JUCE*/}
                    <ImageDial imageLink="https://upload.wikimedia.org/wikipedia/commons/6/6b/JUCE_Logo.png"
                    percentage={60} 
                    size={100} 
                    margin={10}/>

                    {/*C++*/}
                    <ImageDial imageLink="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png"
                    percentage={80} 
                    size={100} 
                    margin='10px'/>

                    {/*Python*/}
                    <ImageDial imageLink="https://www.python.org/static/opengraph-icon-200x200.png"
                    percentage={70} 
                    size={100}
                    margin='10px'/>


                    {/*Javascript*/}
                    <ImageDial imageLink="https://cdn.auth0.com/blog/es6rundown/logo.png"
                    percentage={40} 
                    size={100}
                    margin='10px'/>


                    {/*React*/}
                    <ImageDial imageLink="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png"
                    percentage={40} 
                    size={100}
                    margin='10px'/>
                </div>
                <br />
                <HomeButton />
                </div>
            </div>
        )
    }
}

export default AboutPage;