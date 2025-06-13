import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Loginpage({ setRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (userRole) => {
    // Simulate login success
    if (email && password) {
      setRole(userRole);
      navigate(userRole === 'admin' ? '/admin' : '/jobseeker');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="bg-[#f1faee] min-h-screen flex items-center justify-center py-10">
      <div className="max-w-md w-full bg-white px-10 py-10 rounded-2xl shadow-lg">
        <h2 className="text-center text-4xl font-bold text-[#511D43]">Log In</h2>
        <form className="grid gap-6 mt-6">
          <div>
            <label className="text-xl font-medium">Email</label>
            <TextField
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label className="text-xl font-medium">Password</label>
            <TextField
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </div>

          <Button
            type="button"
            variant="contained"
            fullWidth
            onClick={() => handleLogin('jobseeker')}
            sx={{
              backgroundColor: '#511D43',
              '&:hover': { backgroundColor: '#555' },
            }}
          >
            Login as Job Seeker
          </Button>

          <Button
            type="button"
            variant="contained"
            fullWidth
            onClick={() => handleLogin('admin')}
            sx={{
              backgroundColor: '#511D43',
              '&:hover': { backgroundColor: '#555' },
            }}
          >
            Login as Admin
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;