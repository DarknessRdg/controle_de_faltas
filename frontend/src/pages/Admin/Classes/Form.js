import React, { useState, useEffect, useRef } from 'react'
import M from 'materialize-css'
import Api from '../../../services/Api'
import user from '../../../routes/user'
import clearForm from '../utils/clearForm'
import './styles.css'

import datePickerOptions from './datePickerOptions'
import Toast from '../../../utils/Toast'
import DateUtil from '../../../utils/Date'


export default (props) => {
    const descriptionInput = useRef()
    const classDate = useRef()
    const moduleInput = useRef()
    const teacherInput = useRef()
    
    const [modules, setModules] = useState([])
    const [teachers, setTeachers] = useState([])

    const {classEdit} = props;

    async function getModules() {
        try {
            const headers = user.getAdminAuthorizationHeader()

            const dataModules = (await Api.get('/modules', {headers})).data
            const dataTeachers = (await Api.get('/teachers', {headers})).data
            
            setModules(dataModules) 
            setTeachers(dataTeachers)
            
            M.FormSelect.init(document.querySelectorAll('select'))
            M.Datepicker.init(classDate.current, datePickerOptions)

        } catch (error) {
            console.log(error);
        }
    }

    async function save(e) {
        e.preventDefault()

        const descriptions = descriptionInput.current.value
        const datePicked = classDate.current.value
        const teacherId = teacherInput.current.value
        const moduleId = moduleInput.current.value

        if (!descriptions || !datePicked || !moduleId || !teacherId) {
            Toast('Preencha todos os campos', false)
            return
        }

        
        let date = M.Datepicker.getInstance(classDate.current).date
        
        let localeDate;
        if (!date)
            localeDate = classEdit.date
        else
            localeDate = M.Datepicker.getInstance(classDate.current).date.toLocaleDateString()

        const data = {
            descriptions,
            teacher_id: teacherId,
            date: localeDate
        }

        try {
            const headers = user.getAdminAuthorizationHeader()
            let message;

            if (classEdit) {
                await Api.put(`/class/${classEdit.class_id}`, data, {headers})
                message = 'Aula editada!'
            }
            else {
                await Api.post(`${teacherId}/class/${moduleId}`, data, {headers})
                message = 'Aula criada!'
            }

            Toast(message, true)
            clearForm()
        } catch (error) {
            Toast('Dados inválidos.', false)
            console.log(error);
        }

    }

    function fillFields() {
        descriptionInput.current.value = classEdit.descriptions

        const instance = M.Datepicker.getInstance(classDate.current)
        instance.setDate(DateUtil.fromString(classEdit.date))

        classDate.current.value = instance.toString()

        const {module_id} = classEdit
        moduleInput.current.querySelectorAll('option').forEach(opt => {
            if (parseInt(opt.value) === module_id)
                opt.setAttribute('selected', true)
        });

        const teacher = classEdit.teacher_id
        teacherInput.current.querySelectorAll('option').forEach(opt => {
            if (parseInt(opt.value) === teacher) {
                opt.setAttribute('selected', true)
                console.log('oi');
                
            }
                
        });

        M.FormSelect.init(document.querySelectorAll('select'))
        M.updateTextFields()
    }


    useEffect(() => {
        getModules().then(r => {
            if (classEdit)
                fillFields()       
        })
    }, [])
    

    return (
        <form className="pr-3 pl-3 blue-form">
            <div className="row">
                <div className="input-field">
                    <input ref={descriptionInput} type="text" id="name"/>
                    <label htmlFor="name">Descrição:</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <input ref={classDate} type="text" className="datepicker" />
                    <label htmlFor="name">Data:</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <select ref={moduleInput}>
                        <option value="">Selecione o módulo</option>
                        {modules.map(current => {
                            return (
                                <option key={current.module_id} value={current.module_id} >{current.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            
            <div className="row">
                <div className="input-field">
                    <select ref={teacherInput}>
                        <option value="">Selecione o professor</option>
                        {teachers.map(current => {
                            return (
                                <option key={current.teacher_id} value={current.teacher_id} >{current.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="row">
                <button type="submit" onClick={save} className="btn col s12 m1 mb-3 mr-3">Salvar</button>
                <button type="button" onClick={clearForm} className="btn grey lighten-3 black-text col s12 m1">Limpar</button>
            </div>
        </form>
    )
}