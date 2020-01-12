import React from 'react'

import redirect from '../../../routes/redirect'


export default (props) => {
    const {data} = props

    return (
        <div className="card">
            <div className="card-image">
                <img className="activator" src={data.img} alt={data.title}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{data.title}</span>
                <p><a href="#!" onClick={(e) => {redirect(data.redirect, e) }}>Ir para {data.title.toLowerCase()}</a></p>
            </div>
        </div>
    )
}