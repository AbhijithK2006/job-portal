import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function Loginpage() {
   return (
    <div className='bg-[#00809D]'>
    <div className='flex items-start justify-center py-36'>
    <div className='max-w-md w-screen border bg-amber-50 border-amber-950 rounded-2xl shadow-xl p-8 space-y-8'>
      <h2 className="text-center text-2xl font-bold text-[#511D43]">Login In</h2>
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
          Submit
        </Button>
        </div>
      </form>
    </div> 
    </div> 
    </div>  
    
  );
}

export default Loginpage;