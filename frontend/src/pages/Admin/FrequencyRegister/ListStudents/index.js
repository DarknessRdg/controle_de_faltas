import React from 'react'
import FormatText from '../../../../utils/FormatText'


export default (props) => {
    const {students, setStudents} = props

    function changeStatus(id) {
        const element = document.querySelector(`#status-${id}`)

        const hiddenClass = 'scale-out'
        const showClass = 'scale-in'

        element.classList.remove(showClass)
        element.classList.add(hiddenClass)

        let changed = students
        changed.map(currentStudent => {
            if (currentStudent.student_id === id) {
                currentStudent.present = !currentStudent.present
            }
            return undefined
        })

        setTimeout(() => {
            setStudents([...changed])

            element.classList.remove(hiddenClass)
            element.classList.add(showClass)
        }, 300)
    }

    return (
        <>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Nome <span className="right">Presente</span></h4></li>
                
                {students.map((currentStudent, index) => {
                    return (
                        <li key={currentStudent.student_id} className={"collection-item " + ( index%2 !== 0 ? ' grey lighten-4': '')} >
                                {FormatText.capitalize(currentStudent.name)}
                                <a id={`status-${currentStudent.student_id}`} href="#!" className="secondary-content scale-transition" onClick={(e) => {
                                    e.preventDefault()
                                    changeStatus(currentStudent.student_id)}}
                                >
                                    <i className={'material-icons ' + (currentStudent.present ? 'green-text' : 'red-text')}>
                                        {currentStudent.present? 'check' : 'clear'}
                                    </i>
                                </a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
    
}