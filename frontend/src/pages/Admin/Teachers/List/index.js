import React, { useState, useEffect } from 'react'
import M from 'materialize-css'
import Api from '../../../../services/Api'
import User from '../../../../routes/user'
import redirect from '../../../../routes/redirect'
import deleteInstance from '../../utils/deleteInstance'
import Toast from '../../../../utils/Toast'
import FormatText from '../../../../utils/FormatText'

export default () => {

    const [teachers, setTeachers] = useState([])

    async function getTeachers() {
        const headers = User.getAdminAuthorizationHeader()
        
        try {
            const {data} = await Api.get('/teachers ', {headers})
            setTeachers(data)
        } catch (error) {
            console.log(error)
        }
    }

    function edit(id) {
        redirect('/admin/teachers/update/' + id)
    }

    async function remove(id) {
        const endpoint = '/teachers'

        try {
            await deleteInstance(endpoint, id)

            Toast(`Professor ${id} deletado.`, true)
            getTeachers()
        } catch (error) {
            Toast('Error ao deletar professor.', false)
            console.log(error)
        }
    }

    useEffect(() => {
        getTeachers()
        M.AutoInit()
    }, [])

    return (
        <ul className="collapsible">
            {teachers.map(teacher => {
                return (
                    <li key={teacher.teacher_id}>
                        <div className="collapsible-header">
                            {teacher.name}
                        </div>
                        <div className="collapsible-body pb-3">
                            <p> <span className="bold">Nome: </span> {FormatText.capitalize(teacher.sex)}</p>
                            <p className="mt-1"><span className="bold">Email: </span>{teacher.email}</p>
                            <p className="mt-1"><span className="bold">Matrícula: </span>{teacher.registration}</p>
                            <p className="mt-1 valign-wrapper">
                                <span className="bold mr-2">Superusuário: </span>
                                <i className={`material-icons green-text ${teacher.is_supersu?'green-text' : 'red-text'}`}>
                                    {teacher.is_supersu? 'check':'clear'}
                                </i>
                            </p>
                            <div className="mt-3">
                                <button type="button" className="btn mr-3" onClick={() => edit(teacher.teacher_id)}>Editar</button>
                                <button type="button" className="btn red darken-2" onClick={() => remove(teacher.teacher_id)}>Excluir</button>
                            </div>
                        </div>
                    </li>
                )
            })}
            
        </ul>
    )
}