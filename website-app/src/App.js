import React from 'react';
import './App.css';
import { HexGrid, Layout, Hexagon, Text, Pattern} from 'react-hexgrid';

class App extends React.Component {
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
          <Layout size={layoutSize} flat={false} spacing={1.1} origin={layoutOG}>
            <Hexagon q={0} r={0} s={0}>
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

            <Hexagon q={-1} r={1} s={0}></Hexagon>
            <Hexagon q={1} r={-1} s={0}></Hexagon>
          </Layout>

          <Pattern id="fb" 
                   link="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/magic-marker-icons-social-media-logos/116049-magic-marker-icon-social-media-logos-facebook-logo.png" 
                   size={iconSize} />

          <Pattern id="linkedin" 
                   link= "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-256.png"
                   size={iconSize} />

        </HexGrid>
      </div>
    );
}
}

export default App;
