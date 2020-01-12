import React, { useState, useEffect } from 'react'
import Api from '../../../../services/Api'
import user from '../../../../routes/user'
import redirect from '../../../../routes/redirect'


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

    useEffect(() => {
        getStudents()
    }, [])

    return (
        <ul className="collapsible">
            {students.map(current => {
                return (
                    <li>
                        <div className="collapsible-header">{current.name}</div>
                        <div className="collapsible-body">
                            <p>
                                <span className="bold">Nome: </span> {current.name}
                            </p>
                            <p>
                                <span className="bold">Sexo: </span> {current.sex}
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
                                <button type="button" className="btn red darken-2">Excluir</button>
                            </div>
                        </div>
                    </li>
                )
               
            })}
        </ul>
    )
}