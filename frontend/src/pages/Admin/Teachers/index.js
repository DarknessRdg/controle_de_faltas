import React from 'react'

import Tabs from '../../../components/Tabs'
import All from './List'
import Create from './Create'

const tabs = [
    {
        title: 'Todos',
        id: 'all',
        component: <All />
    },
    {
        title: 'Adicionar professor',
        id: 'create',
        component: <Create />
    }
]

export default () => {
    

    return (
        <div>
            <h1 className="center">Professores</h1>
            <Tabs tabs={tabs} />
        </div>
        
    )
}