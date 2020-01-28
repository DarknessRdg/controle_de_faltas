import React, { useState, useEffect, useRef } from 'react'
import M from 'materialize-css'
import Api from '../../../services/Api'
import DateUtil from '../../../utils/Date'
import user from '../../../routes/user'
import Toast from '../../../utils/Toast'
import clearForm from '../utils/clearForm'

import ListStudents from './ListStudents'


export default () => {
    const [classSelected, setClassSelected] = useState(false)
    const [students, setStudents] = useState([])
    const [classes, setClasses] = useState([])

    const selectClassInput = useRef()

    const headers = user.getAdminAuthorizationHeader()
    
    async function loadClasses() {
        const dataClasses = (await Api.get('/class', {headers})).data

        dataClasses.sort((a, b) => {
            const dateA = DateUtil.fromString(a.date)
            const dateB = DateUtil.fromString(b.date)
            return DateUtil.compare(dateA, dateB)
        })
        setClasses([...dataClasses])

        M.AutoInit()
    }

    async function loadStudents() {
        const dataStudents = (await Api.get('/students', {headers})).data
        dataStudents.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()

            if (nameA < nameB)
                return -1
            else if (nameA > nameB)
                return 1
            else 
                return 0
        })

        dataStudents.map(student => student.present = false)

        setStudents([...dataStudents])
    }

    async function loadDatas() {
        loadClasses()
        loadStudents()
    }

    function selectClass() {
        const id = parseInt(selectClassInput.current.value)

        setClassSelected(
            classes.filter(current => {
                return current.class_id === id
            })[0]
        )
    }

    async function save(e) {
        e.preventDefault()

        if (!classSelected) {
            Toast('Seleciona a aula.' , false)
            return
        }

        try {
            await Api.post(`/frequency/${classSelected.class_id}`, students, {headers})
            Toast('Frequência salva.', true)

            clearForm()
            loadStudents()
            setClassSelected(false)
            M.AutoInit()
        } catch (error) {
            Toast('Error ao salvar.', false)
            console.log(error)
        }
    }

    useEffect(() => {
        loadDatas()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1 className="center">Chamada {classSelected ? ` do dia ${classSelected.date}` : ''}</h1>

            <div className="fixed-action-btn">
                <a href="#!" className="btn-floating btn-large green accent-4" onClick={save}>
                    <i className="large material-icons">check</i>
                </a>
            </div>

            <form className="row blue-form">
                <div className="col s12 m8 offset-m2">
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
                </div>
            </form>

            <div className="row ">
                <div className="col s12 m10 offset-m1">
                    <ListStudents students={students} setStudents={setStudents} />
                </div>
                
            </div>
        </div>
    )
}