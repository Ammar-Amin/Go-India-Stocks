import React from 'react'

export default function DisBox({ data }) {
    return (
        <div className='dItems w-[85%] min-h-[180px] ml-[30px] rounded-xl border border-black shadow-xl shadow-indigo-500/40 mb-14'>
            <div className='w-full flex'>
                <div className='w-[140px] mt-[40px]'>
                    <img src={data.profile} alt='profile'
                        className='w-[100px] h-[100px] mx-5 rounded-full object-cover'
                    />
                </div>
                <div className='info w-[70%]'>
                    <div className='flex gap-9 mt-5'>
                        <span className='text-xl font-bold' >{data.name}</span>
                        <button className='text-white font-bold bg-blue-700 rounded-3xl px-5 py-1'
                        >{data.btn}</button>
                    </div>

                    <p className='my-3'>{data.description}</p>

                    <div className='flex justify-between items-center pb-4'>
                        <div className='flex items-center'>
                            <i class="ri-heart-3-line text-xl mr-2"></i>
                            {data.likes}
                        </div>
                        <div className='flex items-center'>
                            <i class="ri-eye-line text-xl mr-2"></i>
                            {data.views}
                        </div>
                        <div className='flex items-center'>
                            <i class="ri-chat-4-line text-xl mr-2"></i>
                            {data.comments}
                        </div>
                        <div className='flex items-center'>
                            <i class="ri-share-line text-xl mr-2"></i>
                            Share
                        </div>
                    </div>
                </div>
                <p className='mt-1 text-[14px] ' >{data.minAgo}</p>
            </div>
        </div>
    )
}
