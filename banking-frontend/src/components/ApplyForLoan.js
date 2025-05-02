import React, { useState } from 'react';
import axios from 'axios';

const ApplyForLoan = () => {
  const [emailId, setEmailId] = useState('');
  const [appId, setAppId] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateAppId = () => {
    return 'app' + Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!emailId) return;

    setLoading(true);
    const newAppId = generateAppId();
    setAppId(newAppId);

    try {
      const response = await axios.get(`/WebFrontEnd/pgp`, {
        params: {
          appId: newAppId,
          emailId: emailId,
        },
      });
      console.log('Loan response:', response.data);
      alert('Loan application successful!');
      // Handle the response as needed
    } catch (error) {
      console.error('Error submitting the loan application', error);
      alert('There was an error submitting your application. We need a backend Service to call');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Apply for a Loan</h1>
      <form onSubmit={handleSubmit}>
        <label>Email Address:</label>
        <input 
          type="email" 
          value={emailId} 
          onChange={(e) => setEmailId(e.target.value)} 
          required
        />
        <br />
        <button type="submit" disabled={loading}>Submit</button>
      </form>

      {appId && (
        <div>
          <p>Your loan application ID is: {appId}</p>
        </div>
      )}
    </div>
  );
};

export default ApplyForLoan;