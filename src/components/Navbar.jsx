import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

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

  const navLinks = [
    { to: '/scrape', label: 'Scrape Management' },
    { to: '/emails', label: 'Email Management' },
    { to: '/send', label: 'Email Sending' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-xl flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-indigo-400">Automation Tool</h1>
      </div>

      {/* User Info */}
      {user && (
        <div className="p-4 border-b border-gray-800 flex items-center">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-white">{user.name}</h2>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>
      )}

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-3">

          {/* Dashboard with dropdown */}
          <li>
            <div
              className={`flex items-center justify-between px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200 ${
                location.pathname === '/' || location.pathname.startsWith('/home') || location.pathname.startsWith('/history')
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Link to="/" className="flex-1">
                Dashboard
              </Link>
              <button
                onClick={() => setIsDashboardOpen((prev) => !prev)}
                className="ml-2 focus:outline-none"
              >
                {isDashboardOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </div>

            {isDashboardOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li>
                  <Link
                    to="/home"
                    className={`block px-4 py-2 rounded-lg text-base transition-colors duration-200 ${
                      location.pathname === '/home'
                        ? 'bg-indigo-500 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/history"
                    className={`block px-4 py-2 rounded-lg text-base transition-colors duration-200 ${
                      location.pathname === '/history'
                        ? 'bg-indigo-500 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    History
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other nav links */}
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`block px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-lg font-medium transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Navbar;
