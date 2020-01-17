import React from 'react'
import './styles.css'

import FormatText from '../../utils/FormatText'

export default (props) => {
    return (
        <table className="striped responsive-table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Data</th>
                    <th>Professor</th>
                </tr>
            </thead>
            <tbody>
                {props.classes.map(current => {
                    return (
                        <tr key={current.class_id}>
                            <td>
                                {FormatText.firstUpper(current.descriptions)}
                            </td>
                            <td>
                                {current.date.toLocaleDateString()}
                                </td>
                            <td>
                                {FormatText.capitalize(current.teacher.name)}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}