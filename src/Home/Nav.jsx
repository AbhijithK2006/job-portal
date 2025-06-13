import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-[#511D43] text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">Job Portal</Link>
      <div className="space-x-4">
        
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Nav;