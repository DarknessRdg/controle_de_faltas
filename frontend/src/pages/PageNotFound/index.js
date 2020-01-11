import React from 'react'
import './styles.css'
import redirect from '../../routes/redirect'


export default () => {

    return (
        <div id="not-found">
            <h4>Esta página não existe. <i className="ml-2 far fa-frown red-text text-darken-1"></i></h4>
            <h5><a href="#!" className="btn" onClick={() => redirect('/')}>Voltar para o site</a></h5>
        </div>
    )
}