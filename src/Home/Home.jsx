import { Search } from '@mui/icons-material'
import React from 'react'

function Home() {
  return (
    <>
    <div className='items-start justify-center py-12'>
        <h1 className="text-center text-5xl font-bold text-[#511D43]">Welcome to Your Dream Jobs</h1>
        <p className="text-center py-4 text-2xl">Find your dream job or post a job opening!</p>
    </div>
    <div className="flex items-center justify-center">
      <input
            type="text"
            placeholder="Search Jobs"       
            className="px-4 py-2 rounded-lg border border-[#511D43] focus:outline-none focus:ring-2 focus:ring-[#511D43] transition w-80" />
    </div>
    

    

    </>
  )
}

export default Home