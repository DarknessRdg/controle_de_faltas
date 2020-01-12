import React, { useState, useEffect } from 'react'
import Form from '../Form'
import Api from '../../../../services/Api'
import user from '../../../../routes/user'


export default (props) => {
    const [student, setStudent] = useState({name: ''})
    const {id} = props.match.params 

    async function getStudent() {
        const headers = user.getAdminAuthorizationHeader()
        const {data} = await Api.get(`/students/${id}`, {headers})

        setStudent(data)
    }

    useEffect(() => {
        getStudent()
    }, [])
    
    return (
        <div>
            <h3 className="center">Atualizar aluno {student.name}</h3>
            <div className="pl-3 pr-3">
                {student.name? <Form student={student} /> : <></>}
            </div>
        </div>
    )
}