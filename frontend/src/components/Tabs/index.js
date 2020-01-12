import React, { useEffect } from 'react'
import M from 'materialize-css'
import FormatText from '../../utils/FormatText'

import './styles.css'

export default (props) => {
    const {tabs} = props

    useEffect(() => {
        M.AutoInit()
    }, [])

    return (
        <div className="row m-0">
            <div className="col s12">
                <ul className="tabs z-depth-1">
                    {tabs.map((tab, index) => {
                        return (
                            <li key={index} className="tab col s3 teal-text">
                                <a href={'#' + tab.id } >
                                    {FormatText.capitalize(tab.title)}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            {tabs.map((tab, index) => {
                return (
                    <div key={index} id={tab.id} className="col s12">
                        {tab.component}
                    </div>
                )
            })}
        </div>
    )
}