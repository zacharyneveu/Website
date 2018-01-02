import React from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern } from 'react-hexgrid';
//import colors from './Colors'
import CustomHex from './CustomHex';

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
      x: 14,
      y: 14
    }
    const layoutOG = {
      x: 0,
      y: 0
    }
    const iconSize = {
      x: 10,
      y: 10
    }

    return (
      <div className="App">
        <HexGrid width='auto' height='100vh' viewBox="-50 -50 100 100">
          <Layout size={layoutSize} flat={true} spacing={1.1} origin={layoutOG}>
            {/*About Page*/}
            <CustomHex q={0} r={0} s={0} text="ZN" route="/about" holdText={true}/>

            <Hexagon q={0} r={-1} s={1}>
              <Text>Code Samples</Text>
            </Hexagon>
            <Hexagon q={0} r={1} s={-1}>
              <Text>Resume</Text>
            </Hexagon>

            <Hexagon q={-1} r={-0} s={1}>
              <Text>Projects</Text>
            </Hexagon>
            <Hexagon q={1} r={-0} s={-1}>
              <Text>Writing Sample</Text>
            </Hexagon>

            <CustomHex q={-1} r={1} s={0} fill="cello" 
                  text="Electric Cello"
                  route="/about" />

            <CustomHex q={1} r={-1} s={0} fill="alexa"
                  text="Alexa Speaker"
                  route="/alexa"/>
          </Layout>

          <Pattern id="fb"
            link="http://zacharyneveu.com/Images/facebook.png"
            size={iconSize} />

          <Pattern id="linkedin"
            link="http://zacharyneveu.com/Images/linkedin.png"
            size={iconSize} />

          {/* Cello Scroll*/}
          <Pattern id="cello"
            link="http://zacharyneveu.com/Images/celleft.png"
            size={layoutSize} />

          <Pattern id="alexa"
            link="http://zacharyneveu.com/Images/DodecFinal.jpg"
            size={layoutSize} />

        </HexGrid>
      </div>
    );
  }
}

export default HomePage;