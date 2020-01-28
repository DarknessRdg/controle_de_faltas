import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'
import clearForm from '../utils/clearForm'
import Toast from '../../../utils/Toast'
import Api from '../../../services/Api'
import user from '../../../routes/user'


export default (props) => {
    const nameInput = useRef()
    const {module} = props

    async function save(e) {
        e.preventDefault()

        const name = nameInput.current.value 
        if (!name) {
            Toast('Digite o nome.', false)
            return
        }

        const data = {name}

        try {
            const headers = user.getAdminAuthorizationHeader()

            let message;

            if (module) {
                await Api.put(`/modules/${module.module_id}`, data, {headers})
                message = 'Módulo atualizado!'
            }
            else {
                await Api.post('/modules', data, {headers})
                message = 'Módulo cirado!'
            }
                

            Toast(message, true)
            clearForm()
        } catch (error) {
            Toast('Dados inválidos', false)
            console.log(error)
        }
    }

    function setModule() {
        nameInput.current.value = module.name

        M.updateTextFields()
    }

    useEffect(() => {
        if (module)
            setModule()
        // eslint-disable-next-line
    }, [])

    return (
        <form className="blue-form">
            <div className="row">
                <div className="input-field">
                    <input ref={nameInput} type="text" id="name"/>
                    <label htmlFor="name">Nome:</label>
                </div>
            </div>

            <div className="row">
                <button type="submit" onClick={save} className="btn col s12 m1 mb-3 mr-3">Salvar</button>
                <button type="button" onClick={clearForm} className="btn grey lighten-3 black-text col s12 m1">Limpar</button>
            </div>
        </form>
    )
}