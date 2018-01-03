import React from 'react';
import { Hexagon, Text } from 'react-hexgrid';
import PropTypes from 'prop-types';

class CustomHex extends React.Component {
    constructor(props) {
        super(props);
        this.hexEntered = this.hexEntered.bind(this);
        this.hexLeft = this.hexLeft.bind(this);
        this.goToPage = this.goToPage.bind(this);
        this.state = {hovered: false};
    }

    /** When mouse enters hexagon */
    hexEntered() {
        this.setState({ hovered: true });
    }

    /** When mouse leaves hexagon */
    hexLeft() {
        this.setState({ hovered: false });
    }

    /** Navigate to a route passed in as a prop */
    goToPage() {
        if(this.props.route) {
            window.location.replace(this.props.route);
        }
    }

    render() {
        return (
            <Hexagon onMouseEnter={this.hexEntered}
                onMouseLeave={this.hexLeft}
                fill={this.props.fill ? this.props.fill : null}
                onClick={this.goToPage}
                className={this.props.className}
                q={this.props.q}
                r={this.props.r}
                s={this.props.s}
                >
                {/*Render text if holdText set or if hovered is true*/}
                <Text>{this.state.hovered | this.props.holdText ? this.props.text : ""}</Text>
            </Hexagon>
        )
    }
}

CustomHex.propTypes = {
    /**URL with image to fill hexagon */
    fill: PropTypes.string,
    /** text to display in hexagon */
    text: PropTypes.string,
    /** Route to navigate to on click */
    route: PropTypes.string,
    /** Option to hold text on */
    holdText: PropTypes.bool,
    /** Class name to be passed to hexagon */
    className: PropTypes.string,
    /** coordinates of hexagon in grid */
    q: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
}

export default CustomHex;
