import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Table from '../components/Table'

const LeaderBoard = () => {
  const [rankings, setRankings] = useState()
  useEffect(() => {
    const getRankings = async () => {
      const response = await axios.get('http://localhost:3000/leaderboard', {});
      // console.log(response.data)
      setRankings(response.data)
      console.log('rankings ', rankings)
    }
    getRankings();
  }, [])
  return (
    <div className='w-screen h-screen bg-[#e0f6ea] overflow-x-hidden relative'>
      <div className=''>
        <Navbar />
      </div>
      <div className='flex flex-col items-center justify-start mt-20 w-screen px-3 rounded-md'>
        <Table rankings = {rankings} />
      </div>
    </div>
  )
  {/* <tr key={index} className="bg-white border-b-4 border-gray-200 hover:bg-[#53c285] hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
 //   <td className="px-6 py-4 whitespace-nowrap">
 //     <span className="font-semibold text-2xl">{index + 1}</span>
 //   </td>
 //   <td className="px-6 py-4 whitespace-nowrap">
 //     <h1 className='text-2xl text-gray-700'>
 //       {value.username}
 //     </h1>
 //   </td>
 //   <td className="px-6 py-4 whitespace-nowrap">
 //     <span className='text-2xl'>{value.speed} WPM</span>
 //   </td>
  </tr> */}
}
export default LeaderBoard