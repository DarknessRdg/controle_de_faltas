import React, { useEffect, useRef, useState } from 'react'
import M from 'materialize-css'
import Api from '../../../services/Api'
import user from '../../../routes/user'

import DateHelper from '../../../utils/Date'

import ListFrequencyResgistered from './ListFrequencyResgistered'


export default () => {
    const selectClassInput = useRef()

    const [classes, setClasses] = useState([])
    const [selectedClass, setSelectedClass] = useState(undefined)

    const headers = user.getAdminAuthorizationHeader()

    async function getClasses() {
        let { data } = await Api.get('/class', { headers })

        const today = new Date()
        data = data.filter(current => {
            const date = DateHelper.fromString(current.date)
            const before = -1
            const equal = 0

            const compare = DateHelper.compare(date, today)
            return (compare === before || compare === equal)
        })

        setClasses(data)

        M.AutoInit()
    }

    function selectClass() {
        const id = parseInt(selectClassInput.current.value)
        const selected = classes.filter(current => current.class_id === id)[0]

        setSelectedClass(selected)
    }

    useEffect(() => {
        getClasses()
    }, [])

    return (
        <>
            <div>
                <h1 className="center">{'Frequência ' + (selectedClass ? `do dia ${selectedClass.date}` : '')}</h1>
            </div>
            <div className="row">
                <form className="col s12 m8 offset-m2 blue-form">
                    <select ref={selectClassInput} onChange={selectClass}>
                        <option value="">Selecione a aula</option>
                        {classes.map(current => {
                            return (
                                <option key={current.class_id} value={current.class_id}>
                                    {current.date} - {current.class_modules.name} - {current.descriptions}
                                </option>
                            )
                        })}
                    </select>
                </form>
            </div>
            
            <div className="row">
                <div className="col s12 m10 offset-m1">
                    {selectedClass ? <ListFrequencyResgistered selectedClass={selectedClass} /> : <p className="center red-text">Selecione uma aula</p>}
                </div>
            </div>

        </>
    )
}