import React from 'react'

import Data from './data'
import Card from './Card'

export default () => {
    return (
        <div className="p-5 mb-0">
            <div className="row">
                {Data.map(data => {
                    return (
                        <div className="col s12 m4 mb-4">
                            <Card data={data} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}