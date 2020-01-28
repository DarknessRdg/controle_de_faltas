import React, { useState, useEffect } from 'react'
import user from '../../../../routes/user'
import Api from '../../../../services/Api'
import Toast from '../../../../utils/Toast'
import FormatText from '../../../../utils/FormatText'


export default (props) => {
    const {selectedClass} = props
    
    const [students, setStudents] = useState([])

    const headers = user.getAdminAuthorizationHeader()

    async function getFrequency() {
        try {
            const {data} = await Api.get('/students', {headers})
            data.map(student => {
                const classFound = student.student_frequences.filter(frequency => {
                    return frequency.class_id === selectedClass.class_id
                })[0]
                
                if (classFound) 
                    student.present = classFound.present
                else
                    student.present = false
                
                return undefined
            })

            setStudents([...data])
        } catch (error) {
            Toast('Error ao carregar alunos', false)
            console.log(error)
        }
    }

    // function changeStatus(id) {
        // const element = document.querySelector(`#status-${id}`)

        // const hiddenClass = 'scale-out'
        // const showClass = 'scale-in'

        // element.classList.remove(showClass)
        // element.classList.add(hiddenClass)

        // let changed = students
        // changed.map(currentStudent => {
        //     if (currentStudent.student_id === id) {
        //         currentStudent.present = !currentStudent.present
        //     }
        // })

        // setTimeout(() => {
        //     setStudents([...changed])

        //     element.classList.remove(hiddenClass)
        //     element.classList.add(showClass)
        // }, 300)
    // }

    useEffect(() => {
        getFrequency()
        // eslint-disable-next-line
    }, [selectedClass])

    return (
        <ul className="collection with-header">
            <li className="collection-header"><h4>Nome <span className="bold right">Presente</span></h4></li>
            
            {students.map((currentStudent, index) => {
                return (
                    <li key={currentStudent.student_id} className={"collection-item " + ( index%2 !== 0 ? ' grey lighten-4': '')} >
                            {FormatText.capitalize(currentStudent.name)}
                            <div id={`status-${currentStudent.student_id}`} className="secondary-content scale-transition">
                                <i className={'material-icons ' + (currentStudent.present ? 'green-text' : 'red-text')}>
                                    {currentStudent.present? 'check' : 'clear'}
                                </i>
                            </div>
                    </li>
                )
            })}
        </ul>
    
    )
} 