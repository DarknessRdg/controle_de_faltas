import React from 'react'


export default (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" data-target={props.sideNavTarget} className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                </ul>
            </div>
        </nav>
    )
}