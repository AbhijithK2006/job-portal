import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home/Home';
import Nav from './Home/Nav';
import Loginpage from './Home/Loginpage';
import Signup from './Home/Signup';
import JobSeekerPage from './Admin/JobSeekerPage';
import AdminPage from './Admin/AdminPage';
import JobDetails from './Admin/JobDetails'; // ✅ added

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: 'OpenAI',
      title: 'Frontend Developer',
      location: 'San Francisco',
      salary: '$120,000',
      status: 'pending',
      applicants: [],
    },
    {
      id: 2,
      company: 'Google',
      title: 'Data Scientist',
      location: 'New York',
      salary: '$140,000',
      status: 'pending',
      applicants: [],
    },
    {
      id: 3,
      company: 'Microsoft',
      title: 'Backend Developer',
      location: 'Seattle',
      salary: '$130,000',
      status: 'open',
      applicants: [],
    },
    {
      id: 4,
      company: 'Amazon',
      title: 'Cloud Engineer',
      location: 'Austin',
      salary: '$125,000',
      status: 'open',
      applicants: [],
    },
    {
      id: 5,
      company: 'Netflix',
      title: 'UI/UX Designer',
      location: 'Los Angeles',
      salary: '$110,000',
      status: 'pending',
      applicants: [],
    },
    {
      id: 6,
      company: 'Meta',
      title: 'Machine Learning Engineer',
      location: 'Boston',
      salary: '$145,000',
      status: 'open',
      applicants: [],
    },
    {
      id: 7,
      company: 'Tesla',
      title: 'DevOps Engineer',
      location: 'Fremont',
      salary: '$135,000',
      status: 'closed',
      applicants: [],
    },
  ]);

  const [role, setRole] = useState(null); // 'admin' or 'jobseeker'

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home jobs={jobs} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginpage setRole={setRole} />} />
        <Route path="/admin" element={<AdminPage jobs={jobs} setJobs={setJobs} />} />
        <Route path="/jobseeker" element={<JobSeekerPage jobs={jobs} setJobs={setJobs} />} />
        <Route path="/job/:id" element={<JobDetails jobs={jobs} />} /> {/* ✅ New route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;