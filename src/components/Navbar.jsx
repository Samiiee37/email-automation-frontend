// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3007/logout', {
        method: 'POST',
        credentials: 'include',
      });
      navigate('/auth');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <ul className="flex space-x-6 text-white max-w-7xl mx-auto">
        <li>
          <Link
            to="/"
            className="text-lg font-semibold hover:text-blue-300 transition-colors duration-200"
            aria-label="Go to Dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/scrape"
            className="text-lg font-semibold hover:text-blue-300 transition-colors duration-200"
            aria-label="Go to Scrape Management"
          >
            Scrape Management
          </Link>
        </li>
        <li>
          <Link
            to="/emails"
            className="text-lg font-semibold hover:text-blue-300 transition-colors duration-200"
            aria-label="Go to Email Management"
          >
            Email Management
          </Link>
        </li>
        <li>
          <Link
            to="/send"
            className="text-lg font-semibold hover:text-blue-300 transition-colors duration-200"
            aria-label="Go to Email Sending"
          >
            Email Sending
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="text-lg font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors duration-200"
            aria-label="Log out"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;