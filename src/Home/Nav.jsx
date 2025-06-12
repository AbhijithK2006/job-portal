// Nav.jsx

import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Nav() {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <Link to="/Home">
        <div className="text-3xl font-bold text-black">
          JOB PORTAL
        </div>
        </Link>
        <div className="flex gap-4 items-center">
          {/* Wrap the Button with Link and set the 'to' prop */}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px' }} 
            className='h-10 w-25'>
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button style={{ backgroundColor: 'black', color: 'white', borderRadius: '10px' }} 
          className='h-10 w-25'>
            Signup
          </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;