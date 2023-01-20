import React from 'react'
import '../styles/Front.scss'

const Front = () => {
    return (
        <div className="headform">
            <div className="header">
                <div className="title">
                    <span className="text1">Recipe<span className="text2">App</span></span>
                </div>
                <div className="menuHead">
                    <ul>
                        <li className="selected">Home</li>
                        <li>Vegetarianos</li>
                        <li>Platos Principales</li>
                        <li>Tortas</li>
                        <li>Comida R&aacute;pida</li>
                        <li>Men&uacute; Ni&ntilde;os</li>
                        <li>Sopas</li>
                    </ul>
                </div>
                <div className="icoHome"></div>
            </div>

            <div className="imgHead">
                <div className="floatText">
                    <div className="text1">Recetas</div>
                    <div className="text2">para todos</div>
                </div>
            </div>
        </div>
    )
}

export default Front