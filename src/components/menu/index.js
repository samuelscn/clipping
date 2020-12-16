import React, { Component } from 'react'
import './styles.css';

import { BsHouseDoor } from 'react-icons/bs'
import { RiBookletLine } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul className="menu-list">
                    <li>
                        <BsHouseDoor  size="20"/>
                        <span>Home</span>
                    </li>
                    <li>
                        <RiBookletLine size="20"/>
                        <span>Kdernos</span>
                    </li>
                    <li>
                        <AiOutlineStar size="20"/>
                        <span>Favoritos</span>
                    </li>
                </ul>
                <hr/>
                <div className="vistos-recente">
                    <ul className="vistos-recente-list">
                        <h4>Vistos recentemente</h4>
                        <li>
                            <img src="https://a-static.mlcdn.com.br/618x463/quebra-cabeca-500-pecas-paisagens-deslumbrantes-havai-toyster/casaferrari/ts2634havai/415521bc19c707e3f2382d2bb34cd97f.jpg" />
                            <span>Tratado de fronteira</span>
                        </li>
                        <li>
                            <img src="https://i.ytimg.com/vi/RcSPCtWstSk/maxresdefault.jpg" />
                            <span>Microeconomia I</span>
                        </li>
                        <li>
                            <img src="https://www.criatives.com.br/wp-content/uploads/elementor/thumbs/003063797-m6fp3o0pxjmjbmb7xd1ir24vr12av65gn5ekpnjtss.jpg" />
                            <span>Exercise: Syntax, Variat...</span>
                        </li>
                        <li>
                            <img src="https://www.oficinadanet.com.br/imagens/post/24712/330xNx4_1.jpg.pagespeed.ic.2941b5a944.jpg" />
                            <span>Melhor bibliografia CA...</span>
                        </li>
                        <li>
                            <img src="https://lh3.googleusercontent.com/proxy/4O0F-GWWSDro_9P9QHsTAJXXOESAZ2xBq79RFh62k3Z_DX5b8YZRQORGUHPT_ENfJ_RxpepnBfGbWdNNSod5no_ohY5d-mviPPOS4ttcYhY1ebXWiRDDOo8" />
                            <span>Resumos Miltons Sant...</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}