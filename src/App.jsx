// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ScrapeManagement from './pages/ScrapeManagement';
import EmailManagement from './pages/EmailManagement';
import EmailSending from './pages/EmailSending';
import GoogleAuth from './pages/GoogleAuth';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
      <UserProvider>
         <Routes>
          <Route path="/auth" element={<GoogleAuth />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/scrape" element={<PrivateRoute><ScrapeManagement /></PrivateRoute>} />
          <Route path="/emails" element={<PrivateRoute><EmailManagement /></PrivateRoute>} />
          <Route path="/send" element={<PrivateRoute><EmailSending /></PrivateRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </UserProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;