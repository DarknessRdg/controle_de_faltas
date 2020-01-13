import React, { useRef, useState, useEffect } from 'react'

import Form from '../Form'
import Api from '../../../../services/Api'
import user from '../../../../routes/user'


export default (props) => {
    const [module, setModule] = useState({name: ''})
    const {id} = props.match.params

    async function getModule() {
        const headers = user.getAdminAuthorizationHeader()
        const {data} = await Api.get(`/modules/${id}`, {headers})
        setModule(data)
    }

    useEffect(() => {
        getModule()
    }, [])

    return (
        <div>
            <h3 className="center mb-5">Atualizar módulo {module.name}</h3>
            <div className="pl-3 pr-3">
                {module.name? <Form module={module} />:<></>}
            </div>
        </div>
    )
}
    