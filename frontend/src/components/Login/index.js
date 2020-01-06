import React, {useEffect, useRef} from 'react'
import Api from '../../services/Api'
import M from 'materialize-css'
import './styles.css'


import redirect from '../../routes/redirect'


export default (props) => {
    const identity = useRef()
    const messageError = useRef()
    const password = useRef()

    useEffect(() => {
        M.AutoInit()
    }, [])

    const authenticate = async (e) => {
        e.preventDefault()
        
        const data = {
            identity: identity.current.value,
            password: password.current.value
        }
        
        try {
            const response = await Api.post('/sessions', data)
        
            const {token} = response.data
            const userId = response.data.id

            localStorage.setItem('@user/token', token)
            localStorage.setItem('@user/id', userId)

            const headers = {'Authorization': 'Bearer ' + token}
            try {
                await Api.get(`/students/${userId}`, {headers})
            } catch (error) {
                messageError.current.classList.remove('hide')
                return
            }
            
            redirect('/home')
        } catch (error) {
            console.log(error)
            messageError.current.classList.remove('hide')
        }
    }

    
    return (
        <div id="login" className="modal ">
            <div className="row">
                <div className="login-content">
                    
                    <form className="row pt-5 mb-0">
                        <div className="input-field col s12 m10 offset-m1">
                            <i className="material-icons prefix">account_circle</i>
                            <input ref={identity} id="identity" type="text" />
                            <label htmlFor="identity">Identidade</label>
                            
                        </div>

                        <div className="input-field col s12 m10 offset-m1">
                            <i className="material-icons prefix">lock</i>
                            <input ref={password} id="password" type="password"/>
                            <label htmlFor="password">Senha</label>
                         </div>
                        <p ref={messageError} className="red-text center hide">Identidade ou senha inválido.</p>
                        <div className="row">
                            <button 
                                className="btn col s4 offset-s1 mt-4" 
                                type="submit" 
                                onClick={authenticate}>Entrar</button>
                            
                            <button
                                className="modal-close btn col s4 offset-s2 mt-4 red lighten-1"
                                type="submit">Cacelar</button>
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
    )
}