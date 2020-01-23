import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'
import clearForm from '../utils/clearForm'
import FormatText from '../../../utils/FormatText'
import user from '../../../routes/user'
import Api from '../../../services/Api'
import Toast from '../../../utils/Toast'


export default (props) => {
    const namelInput = useRef()
    const resgistrationInput = useRef()
    const identityInput = useRef()
    const phoneInput = useRef()
    const emailInput = useRef()
    const passwordInput = useRef()
    const sexInput = useRef()

    const {student} = props

    async function save(e) {
        e.preventDefault()
        const name = namelInput.current.value
        const registration = resgistrationInput.current.value
        const email = emailInput.current.value 
        const password = passwordInput.current.value 
        const sex = sexInput.current.value
        const identity = identityInput.current.value
        const phone = phoneInput.current.value

        if (!name || !registration || !email || !password || !sex || !identity || !phone) {
            Toast('Complete todos os campos', false)
            return
        }

        const data = {name, registration, email, password, sex, phone, identity}
        const headers = user.getAdminAuthorizationHeader()

        try {
            console.log(data, student.student_id);
            
            let messsage;
            if (student) {
                await Api.put(`/students/${student.student_id}` , data, {headers})
                messsage = 'Estudante atualizado!'
            }
            else {
                await Api.post('/students', data, {headers})
                messsage = 'Estudante criado!'
            }

            Toast(messsage, true)
            clearForm()
        } catch (error) {
            Toast('Dados inválidos', false)
            console.log(error)
        }
        
    }

    function showPassword() {
        const {type} = passwordInput.current

        passwordInput.current.type = type === 'password'? 'text' : 'password'
    }

    function fillFields() {
        phoneInput.current.value = student.phone
        emailInput.current.value = student.email
        namelInput.current.value = student.name
        resgistrationInput.current.value = student.registration
        identityInput.current.value = student.identity
        
        let sex;
        if (student.sex)
            sex = FormatText.firstUpper(student.sex)
        else
            sex = ''
        document.querySelectorAll('option').forEach(e => {
            if (e.value === sex)
                e.setAttribute('selected', true)
        })
        
        M.updateTextFields()
        M.AutoInit()
    }

    useEffect(() => {
        if(student)
            fillFields()
    }, [])

    return (
        <form className="blue-form">
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
                    <input ref={identityInput} type="text" id="identity"/>
                    <label htmlFor="identity">Identidade:</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12 m6">
                    <input ref={phoneInput} type="text" id="phone"/>
                    <label htmlFor="phone">Telefone:</label>
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
                        <option value="Masculino">Masculino</option>
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