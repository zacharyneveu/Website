import React from 'react';
import LargeHex from './LargeHex';
import HomeButton from './Buttons'
import PhotoGallery from './PhotoGallery';
import './ContentPage.css';

class LocationTrackerPage extends React.Component {
    render() {
        var imageSrcs = [
          "http://zacharyneveu.com/Images/smart1.jpg",
          "http://zacharyneveu.com/Images/smart2.jpg",
          "http://zacharyneveu.com/Images/smart3.jpg",
          "http://zacharyneveu.com/Images/smart4.jpg",
          "http://zacharyneveu.com/Images/smart5.jpg"
        ];
        return(
            <div className="PageContainer">
                <LargeHex />
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
                    <PhotoGallery images={imageSrcs}
                                  height="35vh"
                                  width="auto"
                                  interval={5}/>
                    <HomeButton />
                    <br />
                </div>
            </div>
        )
    }
}

export default LocationTrackerPage;