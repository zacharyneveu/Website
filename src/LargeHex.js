import React from 'react';
import { Hexagon, HexGrid, Layout } from 'react-hexgrid';


/** LargeHex creates a full-page hexagon 
 *  LargeHex keeps track of the window dimensions in order to not render
 * if page is too tall (i.e. on a mobile device)
 */
class LargeHex extends React.Component {
    constructor(props) {
        super(props);
        /** Keep track of window dimensions */
        this.state = {width: 0, height: 0};
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    /** update state on window resize */
    updateDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight});
    }

    /** Setup component to update state on window resize */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    /** Don't update state if component no longer used */
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        const largeHexSize = this.state.height < this.state.width ? {x:50, y:50} : {x:0, y:0};
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