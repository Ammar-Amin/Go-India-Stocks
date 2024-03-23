import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TwoHeading() {

    // if (window.screen.width > 770) {
    //     document.querySelectorAll('button').forEach(elem => elem.disabled = true)
    // }

    function handleClick(e) {
        // console.log(e.target.classList.contains('dHead'))
        let val = e.target.classList.contains('dHead')

        if (val) {
            document.querySelector('.dItemParent').style.display = 'block'
            document.querySelector('.mItemParent').style.display = 'none'
        } else {
            document.querySelector('.dItemParent').style.display = 'none'
            document.querySelector('.mItemParent').style.display = 'block'
        }
    }


    return (
        <div className='head flex'>
            <div className='discussion w-[70%]'>
                <button className='dHead px-3 py-2 mb-6 inline-block font-semibold text-5xl text-red-700 bg-slate-100'
                    onClick={handleClick}
                >Discussion Fourm</button>
            </div>
            <div className='market w-[30%]'>
                <button className='mHead px-3 py-2 mb-6 inline-block font-semibold text-4xl text-red-600 bg-slate-100'
                    onClick={handleClick}
                >Market Stories</button>
            </div>
        </div>
    )
}
