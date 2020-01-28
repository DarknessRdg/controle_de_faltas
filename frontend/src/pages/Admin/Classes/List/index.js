import React, { useState, useEffect } from 'react'
import Api from '../../../../services/Api'
import user from '../../../../routes/user'
import redirect from '../../../../routes/redirect'
import deleteInstance from '../../utils/deleteInstance'
import Toast from '../../../../utils/Toast'
import DateUtil from '../../../../utils/Date'
import FormatText from '../../../../utils/FormatText'


export default () => {
    const [classes, setClasses] = useState([])
    
    async function getClasses() {
        
        try {
            const headers = user.getAdminAuthorizationHeader()
            const {data} = await Api.get('/class', {headers})


            data.sort((a, b) => {
                const dateA = DateUtil.fromString(a.date)
                const dateB = DateUtil.fromString(b.date)

                return DateUtil.compare(dateA, dateB)
            })

            let promisses = []
            data.forEach(c => {
                const getTeacher = Api.get(`/teachers/${c.teacher_id}`, {headers}).then(result => {
                    c.teacher = result.data
                })
                promisses.push(getTeacher)
            })

            await Promise.all(promisses)
            setClasses(data)
        } catch (error) {
            console.log(error)
        }
    }

    function edit(id) {
        redirect('/admin/classes/update/' + id)
    }

    async function remove(id) {
        const endpoint = '/class'
        try {
            await deleteInstance(endpoint, id)
            Toast(`Aula ${id} deletada.`, true)

            getClasses()
        } catch (error) {
            Toast(`Error ao deletar aula ${id}.`, false)
            console.log(error);
        }
    }

    useEffect(() => {
        getClasses()
    }, [])

    return (
        <ul className="collapsible">
            {classes.map(current => {
                return (
                    <li key={current.class_id}>
                        <div className="collapsible-header">
                            {current.date}
                            <span className="blue lighten-4 grey-text text-darken-3 badge">{current.descriptions}</span>
                        </div>
                        <div className="collapsible-body">
                            <p>
                                <span className="bold">Modulo: </span> {FormatText.capitalize(current.class_modules.name)}
                            </p>
                            <p>
                                <span className="bold">Professor: </span> {FormatText.capitalize(current.teacher.name)}
                            </p>
                            <p>
                                <span className="bold">Descrição: </span> {current.descriptions}
                            </p>
                            <p>
                                <span className="bold">Data: </span> {current.date}
                            </p>
                            <div className="mt-3">
                                <button type="button" className="btn mr-3" onClick={() => edit(current.class_id)}>Editar</button>
                                <button type="button" className="btn red darken-2" onClick={() => remove(current.class_id)}>Excluir</button>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}