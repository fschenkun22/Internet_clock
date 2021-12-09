import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

    const paramas = useParams()
    
    return (
        <div>
            detail{paramas.id}
        </div>
    )
}

export default Detail
