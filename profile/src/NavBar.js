import React, { Component } from 'react';
import NavBarButton from './NavBarButton.js';
import './NavBar.css';


export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <h1>Heading</h1>
                <NavBarButton text={"About"} />
                <NavBarButton text={"FAQ"} />
                <NavBarButton text={"Hi"} />
            </div>
        );
    }
}