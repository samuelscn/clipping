import React, { Component } from 'react'
import './styles.css';

import { HiPencil } from 'react-icons/hi'
import { IoIosArrowUp } from 'react-icons/io' 
import { FaUserFriends } from 'react-icons/fa'

export default class Perfil extends Component {
    render() {
        return (
            <div className="container">
                <div className="perfil-page">
                    <div className="perfil-container">
                        <img className="avatar" src="https://avatars2.githubusercontent.com/u/31083326?s=460&u=9452a4ac5e689740b8da3f3f62990c753f46e7e0&v=4"/>
                        <div className="perfil-info">
                            <strong>Rafael Costa</strong>
                            <h5>Estudante em UFMG</h5>
                            <p>
                                Survived PhD in Computational Electromagnetics, while working as a researcher,
                                applied 20 years ago what will be called now Machine Learning to solve ill-posed
                                inverse problems in NDT, worked for long time in Software Development, even for a
                                while as a Project Manager.
                            </p>
                            <div className="edit-perfil">
                                <div className="circulos">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                </div>
                                <button>
                                    <HiPencil size="20"/>
                                    Editar perfil
                                </button>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <ul>
                            <li id="li-perfil">Perfil</li>
                            <li>Conta</li>
                            <li>Meus Kdernos</li>
                            <li>Favoritos</li>
                        </ul>
                    </footer>
                </div>
                <div className="info-perfil">
                    <div className="name-perfil">
                        <img src="https://avatars2.githubusercontent.com/u/31083326?s=460&u=9452a4ac5e689740b8da3f3f62990c753f46e7e0&v=4"/>
                        <div className="kderno">
                            <h4>Rafael Costa</h4>
                            <span>Kderno de perfil de Rafael Costa . 49 visualizações . 2d atrás</span>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="number">
                            <IoIosArrowUp size="15"/>
                            <span>45</span>
                        </div>
                        <div className="shared">
                            <FaUserFriends size="20"/>
                            Compartilhar
                        </div>
                        <button className="edit">
                            <HiPencil size="20"/>
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}