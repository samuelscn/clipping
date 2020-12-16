import React, { Component } from 'react'
import './styles.css';

import menu from '../../assets/icons/menu.svg';
import loupe from '../../assets/icons/loupe.svg';
import points from '../../assets/icons/points.svg';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="menu-and-logo">
                    <img src={menu} alt="menu horizontal bar"/>
                    <h1>kderno</h1>
                </div>
                <div className="search-bar">
                    <img src={loupe} alt="lupa"/>
                    <input type="text" placeholder="Pesquisar"/>
                </div>
                <div className="perfil-and-option">
                    <img className="perfil" src="https://avatars2.githubusercontent.com/u/31083326?s=460&u=9452a4ac5e689740b8da3f3f62990c753f46e7e0&v=4"/>
                    <img className="points" src={points} alt="menu vertical points"/>
                </div>
            </header>
        )
    }
}