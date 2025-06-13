import React, { useState } from 'react';
import { Button } from '@mui/material';

function JobSeekerPage({ jobs, setJobs }) {
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  const handleApply = (jobId) => {
    if (!appliedJobIds.includes(jobId)) {
      setAppliedJobIds([...appliedJobIds, jobId]);
      alert('You have successfully applied for this job!');
    } else {
      alert('You have already applied to this job.');
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this job?');
    if (confirmDelete) {
      const updated = jobs.filter((job) => job.id !== id);
      setJobs(updated);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1faee] py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#511D43] mb-8">Available Jobs</h1>
      <div className="w-full max-w-4xl grid gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-[#511D43]">{job.title}</h3>
            <p className="text-gray-700">Company: {job.company}</p>
            <p className="text-gray-700">Location: {job.location}</p>
            <p className="text-gray-700">Salary: {job.salary}</p>
            <p className="text-gray-600 mt-1">Status: {job.status}</p>

            <div className="mt-4 flex gap-3 flex-wrap">
              <Button
                variant="contained"
                sx={{ backgroundColor: '#511D43' }}
                onClick={() => handleApply(job.id)}
              >
                {appliedJobIds.includes(job.id) ? 'Applied' : 'Apply'}
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(job.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobSeekerPage;