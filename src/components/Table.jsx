import React from 'react'
import Rankings from './Rankings'
const Table = (props) => {
    return (
        <>
            <table className="w-full md:w-3/4 lg:w-2/3 xl:w-3/4">
                <thead className="bg-gray-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-gray-300 text-xl">Rank</th>
                        <th className="px-6 py-3 text-left text-gray-300 text-xl">Username</th>
                        <th className="px-6 py-3 text-left text-gray-300 text-xl">Speed</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                    {props.rankings && props.rankings.map((value, index) => {
                        return (
                            <Rankings key={index} rank={index + 1} username={value.username} speed={value.speed} />
                        );
                    })}

                </tbody>
            </table>
        </>
    )
}

export default Table