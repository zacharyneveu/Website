import React from 'react';
import HomeButton from './Buttons';
import Slider from 'react-slick';
import './ContentPage.css';

class LocationTrackerPage extends React.Component {
    render() {
        var imageSrcs = [
          "http://zacharyneveu.com/Images/smart1.jpg",
          "http://zacharyneveu.com/Images/smart2.jpg",
          "http://zacharyneveu.com/Images/smart3.jpg",
          "http://zacharyneveu.com/Images/smart4.jpg",
        ];
        return(
            <div className="PageContainer">
                <div className="Page">
                    <br />
                    <h1>Smart Home Location Tracker</h1> 
                    <br />
                    <p> 
                    My family group-text used to get filled up with endless
                    messages regarding where in the house or world everyone was.
                    To get rid of this constant annoyance, I developed a
                    Raspberry Pi powered device which which uses IFTTT and
                    Google Drive to determine whether each member of the family
                    is at "Home" "School" "Work" "Away" or a number of other
                    places based on the location of their phone. The device sits
                    on the kitchen table, and has eliminated the endless texts
                    in the family chat. Future plans for the device include
                    building a more rugged enclosure, and swapping the Raspberry
                    Pi 3 with a more cost-effective processing unit such as a
                    Raspberry Pi Zero.
                    </p> 
                    <div className='container'>
                        <Slider {...{dots: true}}>
                        <div><img src={imageSrcs[0]} className='image'/></div>
                        <div><img src={imageSrcs[1]} className='image'/></div>
                        <div><img src={imageSrcs[2]} className='image'/></div>
                        <div><img src={imageSrcs[3]} className='image'/></div>
                        </Slider>
                    </div>
                    <br /><br />
                    <HomeButton />
                    <br />
                </div>
            </div>
        )
    }
}

export default LocationTrackerPage;