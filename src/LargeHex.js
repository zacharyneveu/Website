import React from 'react';
import { Hexagon, HexGrid, Layout } from 'react-hexgrid';


/** LargeHex creates a full-page hexagon */
class LargeHex extends React.Component {
    render() {
        const largeHexSize = {
            x: 50,
            y: 50
        }
        return (
            <HexGrid width='auto' height='100vh' viewBox="-50 -50 100 100">
                <Layout size={largeHexSize} 
                        flat={true} 
                        spacing={1} 
                        origin={{x:0, y:0}}>
                    <Hexagon q={0} r={0} s={0}>
                    </Hexagon>
                </Layout>
            </HexGrid>
        )
    }
}

export default LargeHex;