import React from 'react';
import LargeHex from './LargeHex';
import HomeButton from './Buttons'
import PhotoGallery from './PhotoGallery';
import './ContentPage.css';

class ElectricCelloPage extends React.Component {
    render() {
        const imageSrcs = [
            "http://zacharyneveu.com/Images/cello1.jpg",
            "http://zacharyneveu.com/Images/cello2.jpg",
            "http://zacharyneveu.com/Images/cello3.jpg",
            "http://zacharyneveu.com/Images/cello4.jpg",
            "http://zacharyneveu.com/Images/cello5.jpg",
            "http://zacharyneveu.com/Images/cello6.jpg",
        ];

        return(
            <div className="PageContainer">
                <LargeHex />
                <div className="Page">
                    <br />
                    <h1>Electric Cello</h1> 
                    <br />
                    <br />
                    <p>
                    I've always played the cello, and the biggest issue I've
                    always had is volume: on stage, a single cello is too quiet,
                    in an apartment, a cello is too loud. To combat this,
                    I built my own electric cello. It is a 23 pound beast, hewn
                    from a single block of cherry wood, almost twenty inches
                    across and three inches thick. I designed and carved the
                    entire cello by hand. It uses a piezoelectric transducer
                    under the bridge to pick up the sound, as well as a standard
                    cello end pin, pegs, and strings. The cello is fun to play,
                    and sounds great with a little DSP.
                    </p>
                    <PhotoGallery images={imageSrcs}
                                  height="30vh"
                                  width="auto"
                                  interval={5}/>
                    <HomeButton />
                </div>
            </div>
        )
    }
}

export default ElectricCelloPage;