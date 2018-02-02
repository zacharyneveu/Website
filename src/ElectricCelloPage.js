import React from 'react';
import HomeButton from './Buttons'
import Slider from 'react-slick';
import './ContentPage.css';
import '../node_modules/slick-carousel/slick/slick.css';
import './PhotoGallery.css';

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
                <div className="Page">
                    <h1>Electric Cello</h1> 
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
                </div>
            </div>
        )
    }
}

export default ElectricCelloPage;