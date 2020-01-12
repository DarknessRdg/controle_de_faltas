import React, {useRef, useEffect} from 'react'
import M from 'materialize-css'
import Api from '../../../services/Api'
import User from '../../../routes/user'
import Toast from '../../../utils/Toast'


export default (props) => {
    const namelInput = useRef()
    const resgistrationInput = useRef()
    const emailInput = useRef()
    const passwordInput = useRef()
    const sexInput = useRef()

    const {teacher} = props 

    function showPassword() {
        const {type} = passwordInput.current

        passwordInput.current.type = type === 'password'? 'text' : 'password'
    }

    async function save(e) {
        e.preventDefault()
        const name = namelInput.current.value
        const registration = resgistrationInput.current.value
        const email = emailInput.current.value 
        const password = passwordInput.current.value 
        const sex = sexInput.current.value

        if (!name || !registration || !email || !password || !sex) {
            Toast('Complete todos os campos', false)
            return
        }

        const data = {name, registration, email, password, sex}
        const headers = User.getAdminAuthorizationHeader()
        
        try {
            let message;

            if (!teacher) {
                await Api.post('/teachers', data, {headers})
                message = 'Professor criado!'
            } else {
                console.log('awuiiiiiiiiiii');
                
                await Api.put('/teachers', data, {headers})
                message = 'Professor atualizado!'
            }
                
            Toast(message, true)
            clearForm()
        } catch (error) {
            Toast('Dados inválidos', false)
        }
        
    }

    function clearForm() {
        document.querySelector('form').reset()
    }

    useEffect(() => M.AutoInit(), [])

    return (
        <form className="pl-3 pr-3">
            <div className="row">
                <div className="input-field col s12 m6 mt-5">
                    <input ref={namelInput} type="text" id="name"/>
                    <label htmlFor="name">Nome:</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12 m6">
                    <input ref={resgistrationInput} type="text" id="registration"/>
                    <label htmlFor="registration">Matrícula:</label>
                </div>
            </div>
            
            <div className="row">
                <div className="input-field col s12 m6">
                    <input ref={emailInput} type="email" id="email"/>
                    <label htmlFor="email">Email:</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12 m6">
                    <input ref={passwordInput} type="password" id="password"/>
                    <label htmlFor="password">Password:</label>
                </div>
                <label className="col s12">
                    <input name="show-password" type="checkbox" onChange={showPassword}/> <span>Mostrar senha</span>
                </label>
            </div>

            <div className="row">
                <div className="input-field col s12 m3">
                    <select ref={sexInput}>
                        <option value="">Selecione o sexo</option>
                        <option value="Maculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <button type="submit" onClick={save} className="btn col s12 m1 mb-3 mr-3">Salvar</button>
                <button type="button" onClick={clearForm} className="btn grey lighten-3 black-text col s12 m1">Limpar</button>
                
            </div>
            
        </form>
    )
}