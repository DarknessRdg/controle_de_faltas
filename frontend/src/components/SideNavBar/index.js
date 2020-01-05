import React, {useEffect} from 'react'
import M from 'materialize-css';


export default (props) => {
    useEffect(() => {
        M.AutoInit();
    },[])


    return (
        <>
            <ul id={props.id} className="sidenav">
                {props.body}
            </ul>
        </>
    )
}