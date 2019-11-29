import React, {useEffect, useRef} from 'react';
import M from 'materialize-css';
import './styles.css';

function Login() {
    const username = useRef();
    const password = useRef();

    useEffect(() => {
        M.AutoInit();
    }, [])

    const authenticate = (e) => {
        e.preventDefaul();
        // TODO
    } 

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col s12 m6 offset-m3 login-content">
                    
                    <form className="row">
                        <h6 className="center mb-3">Faça login para ter acesso ao sistema.</h6>
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
                        
                        <button 
                            className="btn col s12 m8 offset-m2 mt-4" 
                            type="submit" 
                            onClick={authenticate}>Entrar</button>
                    </form>
                </div>

            </div>
        </div>
        
    )
} 


export default Login;