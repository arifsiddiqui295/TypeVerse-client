import React from 'react'

const Button = (props) => {
    return (
        <div>
           <button className='bg-[#f9bf16] hover:bg-[#ffb710] transition-transform duration-400 ease-in-out transform hover:scale-95  px-5 py-2 rounded-md text-xl text-gray-800'>
            {props.text}
           </button>
        </div>
    )
}

export default Button