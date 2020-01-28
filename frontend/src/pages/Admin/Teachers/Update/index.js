import React, { useState, useEffect } from 'react'
import Api from '../../../../services/Api'
import User from '../../../../routes/user'
import From from '../Form'


export default (props) => {
    const {id} = props.match.params 

    const [teacher, setTeacher] = useState(false)

    async function getTeacher() {
        
        try {
            const headers = User.getAdminAuthorizationHeader()
            const response = await Api.get(`/teachers/${id}`, {headers})
            setTeacher(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTeacher()
        // eslint-disable-next-line
    }, [])
    
    return (
        <>
            <h3 className="center">Alterar dados de {teacher.name}</h3>
            {teacher ? <From teacher={teacher} /> : <></> }
        </>
    )
}