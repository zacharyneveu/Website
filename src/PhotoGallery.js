import React from 'react';
import PropTypes from 'prop-types';
import Colors from './Colors'

/** Minimal photo gallery to scroll through a set of images */
class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.incPhoto = this.incPhoto.bind(this);
        this.state = {curImage: null, imgIndex: 0};
        this.incPhoto();
    }

    incPhoto() {

        if(this.state.imgIndex < this.props.images.length -1) {
            this.setState({imgIndex: this.state.imgIndex+1});
        }
        else {
            this.setState({imgIndex: 0});
        }

        this.setState({ curImage: this.props.images[this.state.imgIndex] });
    }


    render() {
        const galleryStyle = {
            height: this.props.height,
            width: this.props.width,
            borderWidth: 3,
            borderRadius: "0.5em",
            borderStyle: "solid",
            borderColor: Colors.Base0,
        };
        return(
            <div className="gallery">
                <img src={this.state.curImage} 
                     style={galleryStyle} 
                     alt=""/>
            </div>
        );
    }

    componentWillMount() {
        setInterval(this.incPhoto, this.props.interval * 1000);
    }
}

PhotoGallery.PropTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    interval: PropTypes.number.isRequired,
}

export default PhotoGallery;