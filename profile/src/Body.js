import React, { Component } from 'react';
import './Body.css';
import Image from './Image.js'
import Link from './Link.js'

export default class Body extends Component {
    render() {
        return (
            <div className="body">
                <Link />
                <Image />
                <h2>Some words about me</h2>
                <p>Hi this is me!</p>
            </div>
        );
    }
}