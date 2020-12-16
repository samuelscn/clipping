import React, { Component } from 'react'
import './styles.css';

import pencil from '../../assets/icons/draw.svg';

export default class Perfil extends Component {
    render() {
        return (
            <div className="perfil-page">
                <div className="perfil-container">
                    <img className="avatar" src="https://avatars2.githubusercontent.com/u/31083326?s=460&u=9452a4ac5e689740b8da3f3f62990c753f46e7e0&v=4"/>
                    <div className="perfil-info">
                        <strong>Rafael Costa</strong>
                        <h5>Estudante em UFMG</h5>
                        <p>
                            Survived PhD in Computational Electromagnetics, while working as a researcher,
                            <br></br>
                            applied 20 years ago what will be called now Machine Learning to solve ill-posed
                            <br></br>
                            inverse problems in NDT, worked for long time in Software Development, even for a
                            <br></br>
                            while as a Project Manager.
                        </p>
                        <div className="edit-perfil">
                            <div className="circulos">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                            <button>
                                <img className="pencil" src={pencil} alt=""/>
                                Editar perfil
                            </button>
                        </div>
                    </div>
                </div>
                <footer>
                    <a>Perfil</a>
                    <a>Conta</a>
                    <a>Meus Kdernos</a>
                    <a>Favoritos</a>
                </footer>
            </div>
        )
    }
}