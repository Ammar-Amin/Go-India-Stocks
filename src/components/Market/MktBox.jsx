import React from 'react'

export default function MktBox({ data }) {
    return (
        <div className='mItems mb-10 border-r-2 border-l-2 border-slate-300'>
            <img src={data.img} alt='Image'
                className='w-full h-[180px] object-cover' />
            <div className='px-6'>
                <h1 className='font-bold text-xl py-3'>{data.heading}</h1>
                <p className='text-[13px] pb-3'>{data.description}</p>
            </div>
        </div>
    )
}
