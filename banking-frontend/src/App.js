import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ApplyForLoan from './components/ApplyForLoan';
import CheckBalance from './components/CheckBalance'; 

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation links */}
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/checkbalance">Check Balance</Link></li>
            <li><Link to="/apply-for-loan">Apply for a Loan</Link></li>
          </ul>
        </nav>

        {/* Route definitions */}
        <Routes>
            {/* Redirect root to /home */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkbalance" element={<CheckBalance />} />
          <Route path="/apply-for-loan" element={<ApplyForLoan />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
