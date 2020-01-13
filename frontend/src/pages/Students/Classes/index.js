import React, { useState, useEffect } from 'react'
import Api from '../../../services/Api'
import './styles.css'

import Date from '../../../utils/Date'

import ClassTable from '../../../components/ClassTable'

export default () => {
    const [modules, setModules] = useState([])
    const [classes, setClasses] = useState([])

    async function getAulas(){
        const token = localStorage.getItem('@user/token')
        const headers = {'Authorization': `Bearer ${token}`}
        const {data} = await Api.get('/modules/', {headers})

        let classList = []
        let promisses = []
        data.forEach(current => {
            current.module_class.forEach(currentClass => {

                currentClass.date = Date.fromString(currentClass.date)
                
                promisses.push(
                    Api.get(`/teachers/${currentClass.teacher_id}`, {headers})
                        .then(result => {
                            currentClass.teacher = result.data
                        })
                )
            })

            classList.push(...current.module_class)            
        });

        await Promise.all(promisses)
        classList.sort((a, b) => {
            return Date.compare(a.date, b.date)
        })

        setModules(data)
        setClasses(classList)

        

    }

    useEffect(() => {
        getAulas()
    }, [])

    return (<div className="p-5">
        <h1 className="center">Cronograma de aulas</h1>
    
        {modules.map(currentModule => (
            <div className="mb-5">
                <h5 className="green-text text-darken-3 module-title">{currentModule.name}</h5>
                <ClassTable key={currentModule.module_id} classes={
                    classes.filter((currentClass) => {
                        return currentClass.module_id === currentModule.module_id})
                }/>
            </div>))
        }
    </div>)
}