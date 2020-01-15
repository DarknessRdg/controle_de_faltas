import React, {useState, useEffect} from 'react'
import Api from '../../../services/Api'
import User from '../../../routes/user'
import './styles.css'

import DateHanlder from '../../../utils/Date'


export default () => {
    const [allModules, setAllModules] = useState([])

    const [frequences, setFrequences] = useState([])
    const [modules, setModules] = useState([])

    const [presentFilter, setPresentFilter] = useState(false)
    const [missedFilter, setMissedFilter] = useState(false)

    const [countPresent, setCountPresent] = useState(0)
    const [countMissed, setCountMissed] = useState(0)
        

    const userId = User.getId()
    const headers = User.getAtuhorizationHeader()

    async function getFrequences() {
        const {data} = await Api.get(`/students/${userId}`, {headers})
        setFrequences(data.student_frequences)
    }

    async function getClasses() {
        let data = (await Api.get('/modules', {headers})).data
        let today = new Date()
        const filterClasses = (module) => {
            module.module_class = module.module_class.filter(currentClass =>{
                const classDate = DateHanlder.fromString(currentClass.date)
                return DateHanlder.compare(classDate, today) === -1
            })
        }
        
        data.map(filterClasses)

        setModules(data)
        setAllModules(data)

        let present = 0
        let missed = 0

        data.map(module => {
            module.module_class.forEach(currentClass => {
                if (isUserPresent(currentClass.class_id))
                    present += 1
                else
                    missed += 1
            })
        })

        setCountPresent(present)
        setCountMissed(missed)
    }

    function filterList() {
        if ((presentFilter && missedFilter) || (!presentFilter && !missedFilter)) {
            setModules(allModules)
        }
        else {
            let newModules = []
            allModules.map(currentModule => {
                
                let classes = currentModule.module_class.filter(({class_id}) => {
                    
                    if (presentFilter && isUserPresent(class_id))
                        return true
                    else if (missedFilter && !isUserPresent(class_id))
                        return true
                    
                    return false
                })

                newModules.push({...currentModule, module_class: classes})
            })
            
            setModules(newModules)
        }
        
    }

    function isUserPresent(classId){
        
        const filter = frequences.filter(frequency => {
            return frequency.class_id === classId && frequency.present
        })

        return filter.length !== 0
    }

    useEffect(() => {
        getFrequences()
    }, [])

    useEffect(() => {
        getClasses()
    }, [frequences])

    useEffect(() => {
        filterList()
    }, [presentFilter, missedFilter])
   
    return (<div className="p-5 row">
        <h1 className="center">Frequência de aulas</h1>
        <p className="center">Presente: {countPresent}</p>
        <p className="center">Faltadas: {countMissed}</p>

        <div className="col s12 l2 m3 mt-2 mr-2 p-3" id="filter">
            <h5 className="mt-0">Mostrar as aulas:</h5>
            <div className="mt-2">
                <p>
                    <label>
                        <input type="checkbox" onChange={() => setPresentFilter(!presentFilter)}/>
                        <span className="black-text">Presente</span>
                    </label>
                </p>
                <p className="mt-2">
                    <label>
                        <input type="checkbox" onChange={() => setMissedFilter(!missedFilter)}/>
                        <span className="black-text">Faltou</span>
                    </label>
                </p>
            </div>
        </div>

        <ul className="collection col s12 m8">
            
            {modules.map(currentModules => {
                
                return (
                    currentModules.module_class.map(currentClass => (
                        <li key={currentClass.class_id} className="collection-item avatar p-3">
                            <span className="title">{currentModules.name}</span>
                            <p>{currentClass.descriptions} <br />
                               {currentClass.date}
                               <span className="secondary-content">
                                   <i className={"material-icons " + (isUserPresent(currentClass.class_id) ? 'green-text' : 'red-text')}>
                                       {(isUserPresent(currentClass.class_id) ? 'check' : 'clear')}
                                    </i>
                               </span>
                            </p>
                        </li>
                    ))
                )
            })}
        </ul>
    </div>)
}