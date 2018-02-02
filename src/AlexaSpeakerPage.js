import React from 'react';
import HomeButton from './Buttons';
import Slider from 'react-slick';
import './ContentPage.css';

class AlexaSpeakerPage extends React.Component {
    render() {
        var imageSrcs = [
          "http://zacharyneveu.com/Images/DodecFinal.jpg",
          "http://zacharyneveu.com/Images/DodecInsides.jpg"
        ];
        return(
            <div className="PageContainer">
                <div className="Page">
                    <h1>Custom Alexa Speaker</h1> 
                    <p> 
                        I found an older model bluetooth speaker at a thrift
                        store for $10 and bought it with the intention of giving
                        it new life as a smart home hub, complete with a
                        personal assistant and a cool new form factor. The
                        project took about a week and a half of free time, and I
                        am very happy with the final result. 
                    </p> 
                    <h2>Personal Assistant</h2> 
                    <p> 
                        To incorporate a personal assistant into the new device,
                        I used Amazon's Alexa AVS to run an Alexa client on a
                        Raspberry Pi (Model 2b because that's what I had lying
                        around). I coupled the Pi with a USB microphone and an
                        external HiFiBerry DAC in order to get clear audio with
                        minimal noise when not in use. The audio from the DAC is
                        then sent through a 25W amplifier, a (very) simple mixer
                        circuit with the original bluetooth audio, and is passed
                        to the woofer and tweeter (with a simple high pass
                        filter on the tweeter). The original bluetooth speaker
                        was left intact and is a secondary way to play songs
                        that might not be accessible through Alexa. As an
                        additional personalization, I used the Snowboy wake work
                        engine to enable a custom wake word (name) for the
                        assistant. 
                    </p> 
                    <div className='container'>
                        <Slider {...{dots: true}}>
                        <div><img src={imageSrcs[0]} className='image'/></div>
                        <div><img src={imageSrcs[1]} className='image'/></div>
                        </Slider>
                    </div>
                    <br />
                    <br />
                    <HomeButton />
                </div>
            </div>
        )
    }
}

export default AlexaSpeakerPage;