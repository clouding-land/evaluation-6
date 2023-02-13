import React from 'react'
import data from '@/config/constants'

export default function experience(){
    return(
        <div>
            <ul style={{backgroundColor:'#CCF3EE',marginTop:10,width:'80%',marginLeft:150,borderRadius:10,padding:10,paddingLeft:30,listStyleType:'none'}}>
                {data.experience.map((desigs) =>(
                    <li>
                        <div className='row'>
                            <div className='col-1'><p>{desigs.id}</p></div>
                            <div className='col'>
                            <h6>{desigs.name}</h6>
                            <p>{desigs.time}</p>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
        </div>
    )
}

