import React from 'react'

import logout from '../../../routes/logout'


export default (props) => {
    const {user} = props


    return (<>
        <li>
            <div className="user-view">
                <div className="center">
                    <i className="large material-icons">account_circle</i>
                    <h6 className="center">{user.name}</h6>
                </div>
            </div>
        </li>
        <li className="mt-4"><a href="#!">Aluas</a></li>
        <li><a href="#!">Minhas presenças</a></li>
        <li><a href="#!">Material</a></li>
        <li><a href="#!">Configuração</a></li>
        <li><a href="#!" onClick={() => {logout()}}>Sair</a></li>
    </>)
}