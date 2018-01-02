import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

/* This module provides a wrapper for a circular dial with a central image */
class ImageDial extends React.Component {
    render() {
        return (
            <div className="imageDial" style={{ position: 'relative', 
                                                display: 'inline-block', 
                                                width: this.props.size, 
                                                height: this.props.size }}>

                {/*TODO: Check image dimensions to choose to scale
                  * based on height or width
                  */}
                <img style={{ position: 'absolute', 
                              width: '50%', 
                              left: '25%', 
                              top: '25%' }} 
                     src={this.props.imageLink} />

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