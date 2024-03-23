import React, { useState } from 'react'

export default function SideBar() {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked)
        if (!isClicked) {
            document.querySelector('.sidebar').style.display = 'block';
            // document.querySelector('.sidebar').classList.add = 'transition ease-in-out delay-150';
        } else {
            document.querySelector('.sidebar').style.display = 'none';
        }
    }

    return (
        <>
            <div className='flex sideParent'>
                <div className='sidebar hidden w-[350px] h-[100%] bg-cyan-900 text-white' >
                    <div className='w-full h-[80px] flex justify-between items-center px-6 pb-2 border-b-2 border-white hover:bg-zinc-700 '>
                        <div>
                            <i class="ri-user-fill text-2xl"></i>
                            <span className='ml-3 text-xl font-bold'>
                                Hello, User
                            </span>
                        </div>
                        <i class="ri-notification-3-fill text-2xl"></i>
                    </div>
                    <div className='mt-4 '>
                        <p className='px-5 py-3 text-xl font-bold hover:bg-zinc-700'>
                            <i class="ri-discuss-fill mr-3"></i>
                            Discussion
                        </p>
                        <p className='px-5 py-3 text-xl font-bold hover:bg-zinc-700'>
                            <i class="ri-money-dollar-circle-fill mr-1"></i> Market Stories
                        </p>
                        <p className='px-[50px] py-3 text-xl font-bold hover:bg-zinc-700'>
                            Sentiment
                        </p>
                        <p className='px-[50px] py-3 text-xl font-bold hover:bg-zinc-700'>
                            Market
                        </p>
                        <p className='px-[50px] py-3 text-xl font-bold hover:bg-zinc-700'>
                            Sector
                        </p>
                        <p className='px-[50px] py-3 text-xl font-bold hover:bg-zinc-700'>
                            WatchList
                        </p>
                        <p className='px-[50px] py-3 text-xl font-bold hover:bg-zinc-700'>
                            Events
                        </p>
                        <p className='px-[50px] py-3 text-xl font-bold hover:bg-zinc-700'>
                            News/Interview
                        </p>
                    </div>
                </div>
                <div className='w-[20px] h-[100%] bg-slate-100 '>
                    <button className='sidebtn w-full h-[150px] mt-[490px] font-bold text-white bg-cyan-900'
                        onClick={handleClick}>
                        ⮞
                    </button>
                </div>
            </div>
        </>
    )
}
