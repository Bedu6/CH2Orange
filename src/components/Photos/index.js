import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as photosActions from '../../actions/photosActions';
import Loading from '../General/Loading';
import CustomError from '../General/CustomError';
import PhotoCard from './PhotoCard';

class index extends Component {

    componentDidMount() {
        if (! this.props.photos.length) {
            this.props.getPhotos();
        }
    }

    showPhotos = () => (
        this.props.photos.map((photo) => (
            <PhotoCard key = { photo.id } index = { photo.id } title = { photo.title } url = { photo.url } />
        ))
    );

    loadContent = () => {
        if (this.props.loading)
            return <Loading />
        else if (this.props.error)
            return <CustomError message = { this.props.error } />
        else
            return <div className = "row">{ this.showPhotos() }</div>
    };

    render() {
        return(
            <div>
                { this.loadContent() }
            </div>
        );
    }
    
}

const mapStateToProps = ({ photosReducer }) => photosReducer;

export default connect(mapStateToProps, photosActions)(index);