import React, {useEffect, useRef} from 'react';
import M from 'materialize-css';
import './styles.css';


export default () => {
    const username = useRef();
    const password = useRef();

    useEffect(() => {
        M.AutoInit();
    }, [])

    const authenticate = (e) => {
        e.preventDefault();
        // TODO
    }
    
    return (
        <div id="login" className="modal ">
            <div className="row">
                <div className="login-content">
                    
                    <form className="row pt-5 mb-0">
                        <div className="input-field col s12 m10 offset-m1">
                            <i className="material-icons prefix">account_circle</i>
                            <input ref={username} id="username" type="text" />
                            <label htmlFor="username">Usuário</label>
                            
                        </div>

                        <div className="input-field col s12 m10 offset-m1">
                            <i className="material-icons prefix">lock</i>
                            <input ref={password} id="password" type="password"/>
                            <label htmlFor="password">Senha</label>
                         </div>
                        
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