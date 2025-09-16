// src/components/Navbar.jsx
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

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
    { to: '/', label: 'Dashboard' },
    { to: '/scrape', label: 'Scrape Management' },
    { to: '/emails', label: 'Email Management' },
    { to: '/send', label: 'Email Sending' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-xl flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-indigo-400">Automation Tool</h1>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`block px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200
                  ${
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

      {/* Logout button at bottom */}
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
