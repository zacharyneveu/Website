import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import PropTypes from 'prop-types';

/* This module provides a wrapper for a circular dial with a central image */
class ImageDial extends React.Component {
    render() {
        return (
            <div className="imageDial" style={{ position: 'relative', 
                                                display: 'inline-block', 
                                                width: this.props.size, 
                                                height: this.props.size,
                                                margin: this.props.margin 
                                                }}>

                {/*TODO: Check image dimensions to choose to scale
                  * based on height or width
                  */}
                <img style={{ position: 'absolute', 
                              width: '50%', 
                              left: '25%', 
                              top: '25%' }} 
                     src={this.props.imageLink} 
                     alt=""/>

                <div style={{ position: 'absolute' }}>
                    {/*TODO: Add classname to change color of ring*/}
                    <CircularProgressbar
                        percentage={this.props.percentage}
                        textForPercentage={null}
                        initialAnimation={true}
                        strokeWidth={8}
                    />

                </div>
            </div>
        )
    }
}

ImageDial.propTypes = {
    size: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
    imageLink: PropTypes.string.isRequired,
    margin: PropTypes.string
};

export default ImageDial;