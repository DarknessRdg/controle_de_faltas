import React, { useRef, useState, useEffect } from 'react'
import './styles.css'

import M from 'materialize-css'
import Api from '../../../services/Api'
import User from '../../../routes/user'
import redirect from '../../../routes/redirect'

export default (props) => {
    const email = useRef()
    const password = useRef()
    const [messageError, setMessageError] = useState('')

    async function login(event) {
        event.preventDefault()
        // @ts-ignore
        const emailValue = email.current.value
        // @ts-ignore
        const passwordValue = password.current.value

        if (!emailValue || !passwordValue) {
            setMessageError('Preencha todos os campos')   
        }

        const data = {
            email: emailValue,
            password: passwordValue
        }

        try {
            const session = await Api.post('/sessions', data)
            User.loginAdmin(session.token, session.id)
            redirect('/admin')
        } catch (error) {
            setMessageError('Email ou senha inválido')
        }
        
    }

    useEffect(() => {
        if (messageError) {
            M.toast({html: messageError, classes: 'red rounded'})
            setTimeout(() => setMessageError(''), 10)
        }
            
    }, [messageError])

    if (User.isAdminAuthenticated())
        return redirect('/admin')
    return (
        <div className="container login-content-admin">
            <div className="row">
                <div className="col s12 m12 l3 teal white-text center-contet left-content">
                    <i className="material-icons large">account_circle</i>
                </div>
                <form className="col s12 m12 l9 pl-5 pr-5">
                    <h5 className="teal-text center">Login admin</h5>
                    <div className="center-content">
                        <div className="input-field">
                            <input ref={email} id="email" type="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                        
                        <div className="input-field mt-4">
                            <input ref={password} id="password" type="password" />
                            <label htmlFor="password">Senha</label>
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn col s4 offset-s4" onClick={(e) => login(e)}>Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    )
}