import React, {useEffect} from 'react';
import M from 'materialize-css';

import ClassModules from  '../../../components/ClassModules';

import Arduino from './arduino'
import Python from './python'
import Scratch from './scratch'


export default () => {
    useEffect(() => {
        M.AutoInit();
    }, [])

    return (<>
        <div className="p-5">
            <div id="modules">
                <h3 className="center">Saiba mais!</h3>
                <ClassModules modules={[
                    Arduino,
                    Python,
                    Scratch
                ]} />
            </div>
        </div>
    </>)
}