import React, {useEffect} from 'react';
import Api from '../../../services/Api';
import Axio from 'axios'
import M from 'materialize-css';
import './styles.css';

import ClassModules from  '../../../components/ClassModules';

async function x() {

    

    console.log(await axio.post('http:localhost:8000/sessions', {email: "nelson@gmail.com", password: "test@123"}))
}


export default () => {
    useEffect(() => {
        M.AutoInit();
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