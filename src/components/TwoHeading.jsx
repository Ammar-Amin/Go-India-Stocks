import React from 'react'

export default function TwoHeading() {
    return (
        <div className='head flex'>
            <div className='discussion w-[70%]'>
                <button className='dHead px-3 py-2 ml-5 mb-10 inline-block font-semibold text-5xl text-red-700 bg-slate-100'
                >Discussion Fourm</button>
            </div>
            <div className='market w-[30%]'>
                <button className='mHead px-3 py-2 mb-6 inline-block font-semibold text-4xl text-red-600 bg-slate-100'>Market Stories</button>
            </div>
        </div>
    )
}
