import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

/* This module provides a wrapper for a circular dial with a central image */
class ImageDial extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative', width: this.props.size, height: this.props.size }}>
                <img style={{ position: 'absolute', width: '50%', left: '25%', top: '25%' }} src={this.props.imageLink} />
                <div style={{ position: 'absolute' }}>
                    <CircularProgressbar
                        percentage={this.props.percentage}
                        textForPercentage={null}
                    />
                </div>
            </div>
        )
    }
}

export default ImageDial;