import React from 'react'
import { data } from './dummy'
import DisBox from './DisBox'

export default function Discussion() {
    return (

        <div className='dItemParent w-[70%]'>
            <div >
                <DisBox data={data[0]} />
                <DisBox data={data[1]} />
                <DisBox data={data[2]} />
                <DisBox data={data[3]} />
            </div>
        </div>
    )
}
