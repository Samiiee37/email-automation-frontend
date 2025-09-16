import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const GoogleAuth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await fetch('http://localhost:3007/google-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential }),
        credentials: 'include',
      });
      const data = await res.json();
      if (data.success) {
        navigate('/dashboard');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Authentication failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Sign Up / Log In with Google
        </h2>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => setError('Google login failed')}
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
