import React from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern} from 'react-hexgrid';
import colors from './Colors'

class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.toAbout = this.toAbout.bind(this);
  }

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

    const aboutStyle = {
      stroke: "yellow",
      fill: "red",
      strokeWidth: 0.8,
      transition: "fill-opacity 0.2s",
    }

    return (
      <div className="App">
        <HexGrid width='auto' height='100vh' viewBox="-50 -50 100 100">
          <Layout size={layoutSize} flat={true} spacing={1.1} origin={layoutOG}>
            <Hexagon cellStyle={aboutStyle} q={0} r={0} s={0}i onClick={this.toAbout}>
               <Text>ZN</Text>
            </Hexagon>
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

            <Hexagon q={-1} r={1} s={0} fill="linkedin">
            </Hexagon>
            <Hexagon q={1} r={-1} s={0}>
            </Hexagon>
          </Layout>

          <Pattern id="fb" 
                   link="http://zacharyneveu.com/Images/facebook.png" 
                   size={iconSize} />

          <Pattern id="linkedin" 
                   link= "http://zacharyneveu.com/Images/linkedin.png"
                   size={iconSize} />

        </HexGrid>
      </div>
    );
}
}

export default HomePage;