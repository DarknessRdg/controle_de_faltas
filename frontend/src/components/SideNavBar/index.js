import React, {useEffect} from 'react'
import M from 'materialize-css';

import SideNavBody from './SideNavBody';


export default (props) => {
    useEffect(() => {
        M.AutoInit();
    },[])


    return (
        <>
            <ul id={props.id} className="sidenav">
                <SideNavBody />
            </ul>
        </>
    )
}