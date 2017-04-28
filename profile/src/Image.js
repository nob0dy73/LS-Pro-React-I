import React, { Component } from 'react';
import './Image.css';

export default class Image extends Component {
    render() {
        return (
            <div className="image">
                <img src={require('./tarjeta-madre.jpg')} alt="boohoo" className="img-responsive"/>
            </div>
        );
    }
}