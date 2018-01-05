import React from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern } from 'react-hexgrid';
//import colors from './Colors'
import CustomHex from './CustomHex';
import './HomePage.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.toAbout = this.toAbout.bind(this);
    this.state = { celloText: "" }
  }

  /** Navigate to the about screen */
  toAbout() {
    window.location.replace('/about');
  }

  render() {

    const layoutSize = {
      x: 18,
      y: 18
    }
    const layoutOG = {
      x: 0,
      y: 0
    }
    const iconSize = {
      x: "10",
      y: "10"
    }

    return (
      <div className="App">
        <HexGrid width='auto' height='100vh' viewBox="-50 -50 100 100">
          <Layout size={layoutSize} flat={true} spacing={1} origin={layoutOG}>
            {/*About Page*/}
            <CustomHex q={0} r={0} s={0} text="N"
              route="/about"
              holdText={true}
              className="AboutHex" />

            <CustomHex q={0} r={-1} s={1} text="Resume"
              route="/resume"
              holdText={true} />

            <CustomHex q={0} r={1} s={-1} text="IOT Location Tracker"
              route="/location-tracker"
              holdText={true} />


            <CustomHex q={-1} r={-0} s={1} text="Midi Controller"
              holdText={true}
              route='/midi' />
            <CustomHex q={1} r={-0} s={-1} text="Writing Sample" 
              holdText={true} />

            <CustomHex q={-1} r={1} s={0}
              text="Electric Cello"
              route="/cello"
              holdText={true} />

            <CustomHex q={1} r={-1} s={0}
              text="Alexa Speaker"
              route="/alexa"
              className="alexa"
              holdText={true} />
          </Layout>

          {/* Cello Scroll*/}
          <Pattern id="cello"
            link="http://zacharyneveu.com/Images/celleft.png"
            size={layoutSize} />

          <Pattern id="alexa"
            link="https://m.media-amazon.com/images/G/01/mobile-apps/dex/avs/docs/ux/branding/mark1._TTH_.png"
            size={iconSize} />

        </HexGrid>
      </div>
    );
  }
}

export default HomePage;