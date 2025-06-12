import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function Loginpage() {
   return (
    <div className='bg-[#f1faee]'>
    <div className='flex items-start justify-center h-screen py-20'>
    <div className='max-w-md w-screen bg-white px-10 py-15 rounded-4xl shadow-lg'>
      <h2 className="text-center text-4xl font-bold text-[#511D43]">Login In</h2>
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
          label="Enter your Password"
          variant="outlined"
          fullWidth
          required
        />
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
          Login as User
        </Button>
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
          Login as Admin
        </Button>
        </div>
      </form>
      </div>
    </div> 
    </div> 
    </div>  
    
  );
}

export default Loginpage;