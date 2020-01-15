import React from 'react'
import Tabs from '../../../components/Tabs'


import Create from './Create'
import All from './List'

const tabs = [
    {
        title: 'Todos',
        id: 'all',
        component: <All />
    },
    {
        title: 'Adicionar módulo',
        id: 'create',
        component: <Create />
    }
]


export default () => {

    return (
        <>
            <h1 className="center">Módulos</h1>
            <Tabs tabs={tabs} />
        </>
    )
}