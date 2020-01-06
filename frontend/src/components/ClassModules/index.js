import React, {useEffect} from 'react';
import M from 'materialize-css';


/**
 * Component to render all class module.
 * 
 * props = {
 *     modules: [
 *          {
 *             header: {
 *                 name: String,
 *                 icon: String,
 *                 customIcon: <Copnonent />
 *             },
 *             body: <Coponent />
 *         }, 
 *         ...
 *    ]
 * }
 */
export default (props) => {

    const {modules} = props;

    
    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
    }, [])

    return (
        <ul className="collapsible popout">

            {modules.map( (module, index) => {
                const {header, body} = module;
                
                const Icon = header.customIcon ? header.customIcon : <i className="material-icons">{header.icon}</i>

                return (
                    <li key={index}>
                        <div className="collapsible-header">
                            {Icon}
                            {header.name}
                        </div>
                        <div className="collapsible-body">{body}</div>
                    </li>
                )
            })}
        </ul>
    )
}