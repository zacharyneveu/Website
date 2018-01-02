import React from 'react';
import { HexGrid, Layout, Hexagon} from 'react-hexgrid';
import colors from './Colors';
import CircularProgressbar from 'react-circular-progressbar';
import './AboutPage.css'


class AboutPage extends React.Component {
    render() {
        const layoutSize = {
            x: 50,
            y: 50
        }
        const layoutOG = {
            x: 0,
            y: 0
        }
        const pageStyle = {
            width: "70vh",
            height: "85vh",
            color: colors.Base2,
            textAlign: "center",
            //border: "3px solid orange",
            position: "relative",
            marginTop: "6vh"
        }
        const pStyle = {
            lineHeight: "2em",
            fontSize: "1.5em"
        }
        const dialsStyle = {
            height: 100,
            width: 100
        }
        return (
            <div>
            <HexGrid width='auto' height='100vh' viewBox="-50 -50 100 100">
            <Layout size={layoutSize} flat={true} spacing={1.1} origin={layoutOG}>
                <Hexagon q={0} r={0} s={0}>
                </Hexagon>
            </Layout>
            </HexGrid>
            {/*TODO: make div resize with hexagon*/}
            <div className="Page" style={pageStyle}>
                <br />
                <h1>About Me</h1>
                <br />
                <p style={pStyle}>
                   Hi! My name is Zach, and I like to code.  I am a 3<sup>rd
                   </sup> year student at Northeastern University majoring in
                   Computer Engineering and minoring in Music Recording. I like
                   to write modular, well documented code that is easy to reuse.
                   In addition to writing code I like to DJ, Ski, and play
                   Cello.
                </p>
                <div id="Dials" style={dialsStyle}>
                    <CircularProgressbar 
                                        percentage={60}
                                        initialAnimation={true}
                                        textForPercentage={null} />
                </div>
            </div>
            </div>
            )
    }
}
export default AboutPage;