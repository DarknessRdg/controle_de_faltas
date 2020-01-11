import React from 'react';
import './styles.css';
import redirect from '../../routes/redirect';


const NotAuthenticated = () => (
    <div id="not-authenticated">
        <h4>Desculpe, mas você não tem acesso a esta página. <i className="ml-2 far fa-frown red-text text-darken-1"></i></h4>
        <h5><a href="#!" className="btn" onClick={() => redirect('/')}>Voltar para o site</a></h5>
    </div>
)

export default NotAuthenticated;