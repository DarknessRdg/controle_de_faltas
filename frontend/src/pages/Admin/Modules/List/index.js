import React, { useState, useEffect } from 'react'
import Api from '../../../../services/Api'
import user from '../../../../routes/user'
import redirect from '../../../../routes/redirect'


export default () => {
    const [modules, setModules] = useState([])
    

    async function getModules() {

        try {
            const headers = user.getAdminAuthorizationHeader()
            const {data} = await Api.get('/modules', {headers})

            setModules(data)
        } catch (error) {
            
        }
    }

    function edit(id) {
        redirect('/admin/modules/update/' + id)
    }

    useEffect(() => {
        getModules()
    }, [])

    return (
        <ul className="collapsible">
            {modules.map(current => {
                return (
                    <li>
                        <div className="collapsible-header">{current.name}</div>
                        <div className="collapsible-body">
                            <p>
                                <span className="bold">Nome: </span> {current.name}
                            </p>

                            <div className="mt-3">
                                <button type="button" className="btn mr-3" onClick={() => edit(current.module_id)}>Editar</button>
                                <button type="button" className="btn red darken-2">Excluir</button>
                            </div>
                        </div>
                    </li>
                )
               
            })}
        </ul>
    )
}