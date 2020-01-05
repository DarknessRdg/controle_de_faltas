import React, {useState} from 'react'
import Api from '../../../services/Api';

export default () => {
    const [user, setUser] = useState({})

    
    async function getUser() {
        const token = localStorage.getItem('@user/token')
        const header = {headers: {'Authorization': `Bearer ${token}`}}

        const {data} = await Api.get('/teachers/', header)

        setUser(data)
    }

    getUser();

    return (<>
        <li>
            <div className="user-view">
                <div className="center">
                    <i className="large material-icons">account_circle</i>
                    <h6 className="center">{user.name}</h6>
                </div>
            </div>
        </li>
        <li className="mt-4"><a href="#!">Aluas</a></li>
        <li><a href="#!">Minhas presenças</a></li>
        <li><a href="#!">Material</a></li>
        <li><a href="#!">Configuração</a></li>
        <li><a href="#!">Sair</a></li>
    </>)
}