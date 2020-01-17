import React, {useEffect, useState} from 'react'
import Api from '../../services/Api'

import logout from '../../routes/logout'
import redirect from '../../routes/redirect'


export default () => {
    const [user, setUser] = useState({})

    async function getUser() {
        const token = localStorage.getItem('@user/token');
        const userId = localStorage.getItem('@user/id');
        
        const header = {headers: {'Authorization': `Bearer ${token}`}}
        const {data} = await Api.get(`/students/${userId}`, header)
        setUser(data)
    }

    useEffect(() => {
        getUser();
    }, [])
    


    return (<>
        <li>
            <div className="user-view">
                <div className="center">
                    <i className="large material-icons">account_circle</i>
                    <h6 className="center">{user.name}</h6>
                </div>
            </div>
        </li>
        <li className="mt-4"><a href="#!" onClick={() => redirect('/home')}>Início</a></li>
        <li><a href="#!" onClick={(e) => redirect('/class', e)}>Aluas</a></li>
        <li><a href="#!" onClick={(e) => redirect('/frequency', e)}>Minhas presenças</a></li>
        <li><a href="#!" onClick={(e) => redirect('/materials', e)}>Material</a></li>
        <li><a href="#!" onClick={(e) => redirect('/update', e)}>Configuração</a></li>
        <li><a href="#!" onClick={() => {logout()}}>Sair</a></li>
    </>)
}