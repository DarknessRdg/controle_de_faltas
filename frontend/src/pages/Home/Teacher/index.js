import React, {useEffect, useState} from 'react';
import Api from '../../../services/Api';
import M from 'materialize-css';
import './styles.css';

import ClassModules from  '../../../components/ClassModules';


export default () => {
    const [user, setUser] = useState({})

    async function getUser() {
        const token = localStorage.getItem('@user/token');
        
        const header = {headers: {'Authorization': `Bearer ${token}`}}
        const {data} = await Api.get('/teachers/', header)
        setUser(data)
    }

    useEffect(() => {
        M.AutoInit();
        getUser();
    }, [])
    
    return (
        <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    <li className="tab col s3"><a href="#schedule">Cronograma</a></li>
                    <li className="tab col s3"><a href="#students">Alunos</a></li>
                </ul>
            </div>

            <div id="schedule" className="col s12">
                <ClassModules modules={[
                    {
                        header: {
                            name: 'Scratch',
                        },
                        body: <span>Lorem ipsum dolor sit amet.</span>
                    },
                    {
                        header: {
                            name: 'Python',
                        },
                        body: <span>Lorem ipsum dolor sit amet.</span>
                    },
                    {
                        header: {
                            name: 'Arduino',
                        },
                        body: <span>Lorem ipsum dolor sit amet.</span>
                    }
                ]} />
            </div>
            <div id="students" className="col s12">Alunos</div>
        </div>
                
    )
}