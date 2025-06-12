import { Search } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <>
    <div className='min-h-screen items-start justify-center py-12 bg-[#f1faee]'>
        <h1 className="text-center text-7xl font-bold text-[#511D43]">Find Your Dream Jobs</h1>
        <p className="text-center py-4 text-2xl">Discover exciting career opportunities that match your skills!!!</p>
    <div className="flex gap-25 items-start justify-center px-120 py-12">
      <Button variant="contained" color="success" style={{ backgroundColor: '#511D43', color: 'white' }}
      className='h-12 w-40'>
        Get Started
      </Button>
       <Button variant="outlined" style={{ borderColor: '#511D43', color: '#511D43' }}
      className='h-12 w-40'>
        Login
      </Button>
    </div>







    <div className="max-w-4xl mx-auto px-4 py-5">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search jobs, companies, keywords..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
    </div>
    
    
    
    
    </>


  )
}

export default Home