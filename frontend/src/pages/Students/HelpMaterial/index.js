import React, { useState, useEffect } from 'react'

import Arduino from './arduino'
import Python from './python'
import Scratch from './scratch'


export default () => {
    const [materials, setMaterials] = useState([])

    useEffect(() => {
        setMaterials([Arduino, Python, Scratch])
    }, [])
    

    return (<div className="p-5">
        <h1 className="center">Material de apoio</h1>
        {materials.map(current => 
            <ul className="collection with-header">
                <li className="collection-header"><h4 className="green-text text-darken-3">{current.title}</h4></li>

                {current.materials.video? current.materials.video.map(video => <li className="collection-item">
                    <i className="material-icons">desktop_mac</i> {video.description} 
                    <a href={video.link} className="secondary-content">
                        <i className="material-icons">send</i>
                    </a> 
                </li>): <></>}
                
                {current.materials.book ? current.materials.book.map(book => <li className="collection-item">
                    <i className="material-icons">class</i> {book.description} 
                    <a href={book.link} className="secondary-content">
                        <i className="material-icons">send</i>
                    </a> 
                </li>) : <></>}
            </ul>
        )}
    </div>)
}