import { Button, TextField } from '@mui/material'
import React from 'react'

function Signup() {
  return (
    <>
    <div className='bg-[#f1faee]'>
    <div className='flex items-start justify-center py-20'>
    <div className='max-w-md w-screen bg-white px-10 py-15 rounded-4xl shadow-lg'>
      <h2 className="text-center text-4xl font-bold text-[#511D43]">Sign up</h2>
      <div className='py-4'>
      <form className='grid gap-5'>
        <div className="text-2xl font-medium">Email</div>
        <TextField
          label="Enter your Email"
          variant="outlined"    
          fullWidth
          required
        />
        <div className="text-2xl font-medium">Password</div>
        <TextField
          label="Enter your new password"
          variant="outlined"
          fullWidth
          required
        />
        <div>
        <TextField
          label="Re-Enter your Password"
          variant="outlined"
          fullWidth
          required
        />
        </div>
        <div>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#511D43',
            '&:hover': { backgroundColor: '#555' }
          }}
        >
          Create Account
        </Button>
        </div>
      </form>
      </div>
    </div> 
    </div> 
    </div>
    </>
  )
}

export default Signup