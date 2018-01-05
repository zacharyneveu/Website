import React from 'react';
import LargeHex from './LargeHex';
import HomeButton from './Buttons'
import PhotoGallery from './PhotoGallery';
import './ContentPage.css';

class MidiControllerPage extends React.Component {
    render() {
        const imageSrcs = [
            "http://zacharyneveu.com/Images/senior1.jpg",
            "http://zacharyneveu.com/Images/senior2.jpg",
            "http://zacharyneveu.com/Images/senior3.jpg",
        ];

        return(
            <div className="PageContainer">
                <LargeHex />
                <div className="Page">
                    <br />
                    <h1>Home-Built MIDI Controller</h1> 
                    <br />
                    <br />
                    <p>
                    The goal of this project was to create an instrument with
                    both audible and visual feedback. The project consists of a
                    custom built MIDI controller paired with Traktor music
                    software and VVVV visuals. I built this as my senior project
                    at the Maine Coast Waldorf School. It all fits inside of a
                    rugged diamond plate toolbox and is equipped with its own
                    100 watt sound system, and ASIO sound card for simple, one
                    chord, plug and play functionality. The controls are all
                    metal, and the control surface is self lit, eliminating the
                    need for a lamp.
                    </p>
                    <PhotoGallery images={imageSrcs}
                                  height="35vh"
                                  width="auto"
                                  interval={5}/>
                    <br />
                    <HomeButton />
                </div>
            </div>
        )
    }
}

export default MidiControllerPage;