import React from 'react'
import M from 'materialize-css'
import redirect from '../../../routes/redirect'

import logout from '../../../routes/logout'


export default (props) => {
    
    function openSideNav(e) {
        e.preventDefault()
        const sideNav = document.getElementById(props.sideNavTarget)

        const instance = M.Sidenav.getInstance(sideNav)
        instance.open()
    }

    return (<>
        <nav className="teal">
            <a href="#!" 
               className="brand-logo"
               data-target={props.sideNavTarget}
               onClick={openSideNav}>
                   <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
                <li><a href="#!" onClick={(e) => redirect('/home', e)}>Início</a></li>
                <li><a href="#!" 
                    onClick={(e) => redirect('/class', e)}>Aulas</a></li>
                <li><a href="#!" onClick={(e) => redirect('/frequency', e)}>Minhas presenças</a></li>
                <li><a href="#!" onClick={(e) => redirect('/materials', e)}>Material</a></li>
                <li className="mr-2"><a className="dropdown-trigger" href="#!" data-target="dropdown1">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="material-icons right">arrow_drop_down</i>
                    <i className="material-icons right">assignment_ind</i>
                </a></li>
            </ul>
        </nav>
        <ul id="dropdown1" className="dropdown-content">
            <li><a href="#!" className="teal-text text-darken-2">Configurações</a></li>
            <li><a href="#!" className="teal-text text-darken-2"onClick={() => logout()}>Sair</a></li>
        </ul>
    </>)
}