import React, { useState, useEffect } from 'react'
import Api from '../../../../services/Api'
import user from '../../../../routes/user'
import redirect from '../../../../routes/redirect'

import deleteInstance from '../../utils/deleteInstance'
import Toast from '../../../../utils/Toast'
import FormatText from '../../../../utils/FormatText'

export default () => {

    const [students, setStudents] = useState([])

    async function getStudents() {
        const headers = user.getAdminAuthorizationHeader()

        const {data} = await Api.get('/students', {headers}) 

        setStudents(data)
    }

    function edit(id) {
        redirect('/admin/students/update/' + id)
    }

    async function remove(id) {
        const endpoint = '/students'

        try {
            await deleteInstance(endpoint, id)

            Toast(`Estudante ${id} deletado.`, true)
            getStudents()
        } catch (error) {
            Toast('Error ao deletar estudante.', false)
            console.log(error)
        }
    }

    useEffect(() => {
        getStudents()
    }, [])

    return (
        <ul className="collapsible">
            {students.map(current => {
                return (
                    <li key={current.student_id}>
                        <div className="collapsible-header">{current.name}</div>
                        <div className="collapsible-body">
                            <p>
                                <span className="bold">Nome: </span> {FormatText.capitalize(current.name)}
                            </p>
                            <p>
                                <span className="bold">Sexo: </span> {FormatText.capitalize(current.sex)}
                            </p>
                            <p>
                                <span className="bold">Teleone: </span> {current.phone}
                            </p>
                            <p>
                                <span className="bold">Email: </span> {current.email}
                            </p>
                            <p>
                                <span className="bold">Identidade: </span> {current.identity}
                            </p>
                            <p>
                                <span className="bold">Matrícula: </span> {current.registration}
                            </p>

                            <div className="mt-3">
                                <button type="button" className="btn mr-3" onClick={() => edit(current.student_id)}>Editar</button>
                                <button type="button" className="btn red darken-2" onClick={() => remove(current.student_id)} >Excluir</button>
                            </div>
                        </div>
                    </li>
                )
               
            })}
        </ul>
    )
}