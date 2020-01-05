import React, {useEffect} from 'react'
import M from 'materialize-css';


export default (props) => {
    // const {user} = props;

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