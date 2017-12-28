import React from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern} from 'react-hexgrid';
import { Link } from 'react-router-dom';
import './AboutPage.css';

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
        return (
            <div>
            <HexGrid width='auto' height='100vh' viewBox="-50 -50 100 100">
            <Layout size={layoutSize} flat={true} spacing={1.1} origin={layoutOG}>
                <Hexagon q={0} r={0} s={0}>
                    <Text>Hi! My name is Zach and I like to code.</Text>
                </Hexagon>
            </Layout>
            </HexGrid>
            </div>
            )
    }
}

export default AboutPage;