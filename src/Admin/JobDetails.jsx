import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetails({ jobs }) {
  const { id } = useParams();
  const job = jobs.find((j) => j.id.toString() === id);

  if (!job) {
    return <div className="text-center py-20 text-xl">Job not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#f1faee] flex justify-center items-center p-6">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-[#511D43] mb-4">{job.title}</h2>
        <p className="mb-2"><strong>Company:</strong> {job.company}</p>
        <p className="mb-2"><strong>Location:</strong> {job.location}</p>
        <p className="mb-2"><strong>Salary:</strong> {job.salary}</p>
        <p className="mb-2"><strong>Status:</strong> {job.status}</p>
 
      </div>
    </div>
  );
}

export default JobDetails;