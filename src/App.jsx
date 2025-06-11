// App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Home/Nav';
import Loginpage from './Home/Loginpage';
import Home from './Home/Home';
import Signup from './Home/Signup';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes as needed */}
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;