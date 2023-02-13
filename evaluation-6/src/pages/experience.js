import React from 'react'
import data from '@/config/constants'

export default function experience(){
    return(
        <div>
            <ul>
                {data.experience.map((desigs) =>(
                    <li>
                        <h6>{desigs.name}</h6>
                        <p>{desigs.time}</p>
                    </li>
                ))}
                </ul>
        </div>
    )
}

