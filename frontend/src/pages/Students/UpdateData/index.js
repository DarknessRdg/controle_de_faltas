import React, { useRef, useState, useEffect } from 'react'
import M from 'materialize-css'
import clearForm from '../../Admin/utils/clearForm'
import Api from '../../../services/Api'
import user from '../../../routes/user'
import Toast from '../../../utils/Toast'


export default () => {
    const namelInput = useRef()
    const registrationInput = useRef()
    const identityInput = useRef()
    const phoneInput = useRef()
    const emailInput = useRef()
    const passwordInput = useRef()
    const sexInput = useRef()

    const headers = user.getAtuhorizationHeader()
    const id = user.getId()

    const [wantsToChangePass, setWantsToChangePass] = useState(false)

    const [student, setStudent] = useState({})
    
    async function loadData() {
        
        const {data} = await Api.get(`/students/${id}`, {headers})

        console.log(data);
        
        setStudent({...data})
        fillFields()
    }

    function fillFields() {
        namelInput.current.value = student.name
        registrationInput.current.value = student.registration
        identityInput.current.value = student.identity
        phoneInput.current.value = student.phone
        emailInput.current.value = student.email
        sexInput.current.value = student.sex

        M.updateTextFields()
        M.AutoInit()
    }

    function showPassword() {
        const {type} = passwordInput.current

        passwordInput.current.type = type === 'password'? 'text' : 'password'
    }

    async function save(e) {
        e.preventDefault()
        const name = namelInput.current.value
        const email = emailInput.current.value
        const sex = sexInput.current.value
        const phone = phoneInput.current.value

        let password = undefined
        if (wantsToChangePass)
            password = passwordInput.current.value

        let available = true
        if (!name || !email || !sex || !phone)
            available = false
        else if (wantsToChangePass && !password)
            available = false

        if (!available) {
            Toast('Complete todos os campos', false)
            return
        }

        let data = {name, email, sex, phone}
        if (wantsToChangePass)
            data.password = password
        
        try {
            await Api.put(`/students/${id}`, data, {headers})
            Toast('Dados atualizados.', true)

            clearForm()
            setTimeout(() => {
                loadData()
            }, 250)
            
        } catch (error) {
            Toast('Dados inválidos.', false)
            console.log(error);
        }
        
    }

    function clear() {
        clearForm()
        setWantsToChangePass(false)
    }

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        fillFields()
    }, [student])

    return (
        <div className="row">
            <h1 className="center">Alterar dados</h1>
            <form className="col l8 offset-l2">
                <div className="row">
                    <div className="input-field col s12">
                        <input ref={namelInput} type="text" id="name"/>
                        <label htmlFor="name">Nome:</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input ref={registrationInput} type="text" disabled id="registration"/>
                        <label htmlFor="registration">Matrícula:</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input ref={identityInput} type="text" disabled id="identity"/>
                        <label htmlFor="identity">Identidade:</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input ref={phoneInput} type="text" id="phone"/>
                        <label htmlFor="phone">Telefone:</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">
                        <input ref={emailInput} type="email" id="email"/>
                        <label htmlFor="email">Email:</label>
                    </div>
                </div>

                 
                    <div className="row">
                    {wantsToChangePass?
                        <>
                        <div className="input-field col s12">
                            <input ref={passwordInput} type="password" id="password"/>
                            <label htmlFor="password">Nova senha:</label>
                        </div>
                        <label className="col s12">
                            <input name="show-password" type="checkbox" onChange={showPassword}/> <span>Mostrar senha</span>
                        </label>
                        </>
                    :
                        <label className="col s12">
                            <button className="btn-flat teal lighten-1 white-text" 
                                    type="button" 
                                    onClick={() => setWantsToChangePass(true)}>Alterar Senha</button>
                        </label>
                    }
                </div>

                <div className="row">
                    <div className="input-field col s12 m3">
                        <select ref={sexInput}>
                            <option value="">Selecione o sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <button type="submit" onClick={save} className="btn col s12 m1 mb-3 mr-3">Salvar</button>
                    <button type="button" onClick={clear} className="btn grey lighten-3 black-text col s12 m1">Limpar</button>
                </div>
            </form>
        </div>
    )
}