import React from 'react';

const UpdateCards = (props) => {
    const { setOpen, setUpdateCheck } = props; 

    const handleYesClick = () => {
        props.updateScore(); 
        setOpen(false); 
        setUpdateCheck(false); 
    };

    const handleNoClick = () => {
        setOpen(false); 
        setUpdateCheck(false); 
    };

    return (
        <div className='updateCheckDiv absolute z-30 w-screen flex justify-center top-3 p-2'>
            <div className=" rounded-lg  w-96 h-32 bg-[#2ed6d9] p-3" >
                <h1 className='text-black text-xl'>Do You Want to Update Your Score ??</h1>
                <h1 className='text-black text-xl'>Your Previous Score Was <span className='text-indigo-800'>{props.responseReceived} WPM</span></h1>
                <div className='flex gap-10 justify-center mt-4'>
                    <button className='bg-[#5ec161] px-4 py-1 rounded-lg text-white hover:scale-105 transition-all ease-in-out duration-200'
                        onClick={handleYesClick} 
                    >Yes</button>
                    <button className='bg-red-400 px-4 py-1 rounded-lg text-white hover:scale-105 transition-all ease-in-out duration-200'
                        onClick={handleNoClick} // Call handleNoClick on "No" button click
                    >No</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateCards;
