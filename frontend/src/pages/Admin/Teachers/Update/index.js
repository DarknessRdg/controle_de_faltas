import React, { useState, useEffect } from 'react'
import Api from '../../../../services/Api'
import User from '../../../../routes/user'
import From from '../From'


export default (props) => {
    const {id} = props.match.params 

    const [teacher, setTeacher] = useState({})

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
    }, [])
    
    return (
        <>
            <h3 className="center">Alterar dados de {teacher.name}</h3>
            <From teacher={teacher} />
        </>
    )
}