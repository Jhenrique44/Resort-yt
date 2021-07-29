import React, { Component } from 'react'
import { BsJustifyRight } from 'react-icons/bs'
import logoImg from '../images/logo.svg'
import { Link } from 'react-router-dom'

import '../App.css';

export default class Navbar extends Component {
    
    state = {
        isOpen: false
    }
    handleToggle = ()=> {
        this.setState({ isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className = "navbar">
                <div className="nav-center">
                    <div className= "nav-header">
                        <Link to="/">
                            <img src={logoImg} alt= "Beach Resort"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <BsJustifyRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/rooms">
                                Rooms
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        );
    }
}
