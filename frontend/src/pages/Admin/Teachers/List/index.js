import React, { useState, useEffect } from 'react'
import M from 'materialize-css'
import Api from '../../../../services/Api'
import User from '../../../../routes/user'
import redirect from '../../../../routes/redirect'


export default () => {

    const [teachers, setTeachers] = useState({
        name: ''
    })

    async function getTeachers() {
        const headers = User.getAdminAuthorizationHeader()
        
        try {
            const {data} = await Api.get('/teachers/1', {headers})
            setTeachers(data)
        } catch (error) {
            console.log(error)
        }
    }

    function edit(id) {
        redirect('/admin/teachers/update/' + id)
    }

    useEffect(() => {
        getTeachers()
        M.AutoInit()
    }, [])

    return (
        <ul className="collapsible">
            <li>
                <div className="collapsible-header">
                    {teachers.name}
                </div>
                <div className="collapsible-body pb-3">
                    <p> <span className="bold">Nome: </span> {teachers.sex}</p>
                    <p className="mt-1"><span className="bold">Email: </span>{teachers.email}</p>
                    <p className="mt-1"><span className="bold">Matrícula: </span>{teachers.registration}</p>
                    <p className="mt-1"><span className="bold">Superusuário: </span>{teachers.is_supersu?'Sim':'Não'}</p>
                    <div className="mt-3">
                        <button type="button" className="btn mr-3" onClick={() => edit(teachers.teacher_id)}>Editar</button>
                        <button type="button" className="btn red darken-2">Excluir</button>
                    </div>
                </div>
            </li>
        </ul>
    )
}