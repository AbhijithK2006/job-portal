import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function AdminPage({ jobs, setJobs }) {
  const [newJob, setNewJob] = useState({
    company: '',
    title: '',
    location: '',
    salary: '',
    status: 'pending',
  });

  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({});

  // Add new job
  const handleAddJob = () => {
    if (!newJob.company || !newJob.title || !newJob.location || !newJob.salary) {
      alert('Please fill out all fields.');
      return;
    }

    setJobs([
      ...jobs,
      {
        ...newJob,
        id: jobs.length + 1,
        applicants: [],
      },
    ]);
    setNewJob({ company: '', title: '', location: '', salary: '', status: 'pending' });
  };

  // Delete job
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  // Set edit mode
  const startEditing = (job) => {
    setEditingId(job.id);
    setEditFields({ ...job });
  };

  // Save edited job
  const saveEdit = () => {
    setJobs(jobs.map((job) => (job.id === editingId ? editFields : job)));
    setEditingId(null);
  };

  // Update status
  const updateStatus = (id, status) => {
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, status } : job))
    );
  };

  return (
    <div className="min-h-screen bg-[#f1faee] p-6">
      <h2 className="text-4xl font-bold text-[#511D43] mb-8 text-center">Admin Dashboard</h2>

      {/* Add Job Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto mb-10">
        <h3 className="text-2xl font-semibold text-[#511D43] mb-4">Add New Job</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <TextField
            label="Company"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
            fullWidth
          />
          <TextField
            label="Job Title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            fullWidth
          />
          <TextField
            label="Location"
            value={newJob.location}
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
            fullWidth
          />
          <TextField
            label="Salary"
            value={newJob.salary}
            onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
            fullWidth
          />
        </div>
        <Button
          className="mt-4"
          variant="contained"
          onClick={handleAddJob}
          sx={{
            backgroundColor: '#511D43',
            mt: 2,
            '&:hover': { backgroundColor: '#333' },
          }}
        >
          Add Job
        </Button>
      </div>

      {/* Job List */}
      <div className="grid gap-6 max-w-4xl mx-auto">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-xl shadow-md">
            {editingId === job.id ? (
              <div className="grid gap-3 md:grid-cols-2">
                <TextField
                  label="Company"
                  value={editFields.company}
                  onChange={(e) => setEditFields({ ...editFields, company: e.target.value })}
                />
                <TextField
                  label="Title"
                  value={editFields.title}
                  onChange={(e) => setEditFields({ ...editFields, title: e.target.value })}
                />
                <TextField
                  label="Location"
                  value={editFields.location}
                  onChange={(e) => setEditFields({ ...editFields, location: e.target.value })}
                />
                <TextField
                  label="Salary"
                  value={editFields.salary}
                  onChange={(e) => setEditFields({ ...editFields, salary: e.target.value })}
                />
                <Button
                  variant="contained"
                  onClick={saveEdit}
                  sx={{ backgroundColor: '#511D43' }}
                >
                  Save
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-[#511D43]">{job.title}</h3>
                <p className="text-gray-700">Company: {job.company}</p>
                <p className="text-gray-700">Location: {job.location}</p>
                <p className="text-gray-700">Salary: {job.salary}</p>
                <p className="text-gray-600 mt-1">Status: {job.status}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#2a9d8f' }}
                    onClick={() => updateStatus(job.id, 'accepted')}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#e76f51' }}
                    onClick={() => updateStatus(job.id, 'rejected')}
                  >
                    Reject
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => startEditing(job)}
                    sx={{ borderColor: '#511D43', color: '#511D43' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(job.id)}
                  >
                    Delete
                  </Button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;