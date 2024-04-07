import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#a9eaab] py-2 shadow-dark-mild lg:py-4">
            <div className="container mx-auto px-3 ">
                <div className="flex w-full flex-wrap items-center justify-between">
                    <span className="text-3xl text-black flex items-center justify-center cursor-pointer font-medium"
                        onClick={() => {navigate('/')}}
                    >
                        <img className='w-12 h-12' src="https://cdn-icons-png.flaticon.com/512/6802/6802191.png" alt="" />
                        {/* <i className="ri-trello-line mt-2 mr-2 text-4xl"></i> */}
                        Typing<span className='text-[#ffb710]'>Verse</span>
                    </span>
                    <div className="hidden lg:block"  onClick={() => {navigate('/leaderboard') }}>
                        <Button text="LeaderBoard" />
                    </div>
                    <div className="lg:hidden" onClick={() => {navigate('/leaderboard') }}>
                        <Button text="LeaderBoard"  />
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default Navbar