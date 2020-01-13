import React from 'react'
import redirect from '../../../routes/redirect'
import User from '../../../routes/user'


export default () => {

    function logout(e) {
        e.preventDefault()
        User.logoutAdmin()
        redirect('/admin')
    }

    return (
        <nav>
            <div className="nav-wrapper blue">
                <a href="#!" onClick={(e) => (redirect('/admin', e))} className="brand-logo right">Admin</a>
                <ul className="left hide-on-med-and-down">
                    <li><a href="#!" onClick={(e) => {redirect('/admin/teachers', e)}}>Professores</a></li>
                    <li><a href="#!" onClick={(e) => {redirect('/admin/students', e)}}>Alunos</a></li>
                    <li><a href="#!" onClick={(e) => {redirect('/admin/modules', e)}}>Módulos</a></li>
                    <li><a href="#!" onClick={(e) => {redirect('/admin/classes', e)}}>Aluas</a></li>
                    <li><a href="#!" onClick={(e) => {redirect('/admin/frequency', e)}}>Frequencia</a></li>
                    <li><a href="#!" onClick={(e) => {redirect('/admin/frequency/register', e)}}>Chamada</a></li>
                    <li><a href="#!" onClick={logout}>Sair</a></li>
                </ul>
            </div>
        </nav>
    )
}