import React, { useState, useEffect } from 'react'
import Form from '../Form'
import Api from '../../../../services/Api'
import user from '../../../../routes/user'


export default (props) => {
    const [classEdit, setClassEdit] = useState(false)
    const {id} = props.match.params 

    async function getClass() {
        try {
            const headers = user.getAdminAuthorizationHeader()
            const {data} = await Api.get(`/class/${id}`, {headers})

            data.teacher = (await Api.get(`/teachers/${data.teacher_id}`, {headers})).data
            setClassEdit(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getClass()
    }, [])
    return (
        <div>
            <h3 className="center mb-5">Editar aula 
                {classEdit? ` ${classEdit.date} - ${classEdit.descriptions}`: ''}
            </h3>
            {classEdit? <Form  classEdit={classEdit} />: <></>}
        </div>
        
    )
}