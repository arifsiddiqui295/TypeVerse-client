import React from 'react'

const Rankings = (props) => {
    return (
        <>
            <tr key={props.index} className="bg-white border-b-4 border-gray-200 hover:bg-[#53c285] hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-2xl">{props.rank}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <h1 className='text-2xl text-gray-700'>
                        {props.username}
                    </h1>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className='text-2xl'>{props.speed} WPM</span>
                </td>
            </tr>
        </>
    )
}

export default Rankings