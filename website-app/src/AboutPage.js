import React from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern} from 'react-hexgrid';
import { Link } from 'react-router-dom';
import colors from './Colors'

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
            border: "3px solid orange",
            position: "relative",
            marginTop: "6vh"
        }
        return (
            <div>
            <HexGrid width='auto' height='100vh' viewBox="-50 -50 100 100">
            <Layout size={layoutSize} flat={true} spacing={1.1} origin={layoutOG}>
                <Hexagon q={0} r={0} s={0}>
                </Hexagon>
            </Layout>
            </HexGrid>
            <div className="Page" style={pageStyle}>
                <h1>Title</h1>
                <img src="../images/facebook.svg" alt=""/>
            </div>
            </div>
            )
    }
}
export default AboutPage;