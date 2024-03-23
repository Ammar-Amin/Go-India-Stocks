import React from 'react'
import { data } from './dummy'
import MktBox from './MktBox'

export default function Market() {
    return (
        <div className='mItemParent w-[30%]'>
            <div >
                <MktBox data={data[0]} />
                <MktBox data={data[1]} />
                <MktBox data={data[2]} />
            </div>
        </div>
    )
}
