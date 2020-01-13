import React from 'react'
import Tabs from '../../../components/Tabs'


import Create from './Create'
import All from './List'

const tabs = [
    {
        title: 'Todas',
        id: 'all',
        component: <All />
    },
    {
        title: 'Adicionar aula',
        id: 'create',
        component: <Create />
    }
]


export default () => {

    return (
        <>
            <h1 className="center">Aulas</h1>
            <Tabs tabs={tabs} />
        </>
    )
}