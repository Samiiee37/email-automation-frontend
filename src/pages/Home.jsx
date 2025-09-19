import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '../context/UserContext';

function Home() {
  const { user } = useUser();
  const [stats] = useState({
    totalScraped: 245,
    totalSent: 180,
    successRate: 0.85,
  });

  const [recentActivities] = useState([
    { type: 'Scrape', time: '2025-09-18 09:00 AM', details: 'Scraped 50 new emails' },
    { type: 'Send', time: '2025-09-18 09:30 AM', details: 'Sent 40 emails (35 success)' },
    { type: 'Scrape', time: '2025-09-17 05:00 PM', details: 'Scraped 30 new emails' },
    { type: 'Send', time: '2025-09-17 06:00 PM', details: 'Sent 25 emails (22 success)' },
  ]);

  return (
    <>
      <Navbar />
      <div className="ml-64 min-h-screen bg-gray-700 p-6 text-gray-200">
        <h1 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
          Welcome Back{user ? `, ${user.name}` : ''} 👋
        </h1>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-blue-300 mb-2">Total Scraped Emails</h2>
            <p className="text-4xl font-bold text-white">{stats.totalScraped}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-green-300 mb-2">Total Emails Sent</h2>
            <p className="text-4xl font-bold text-white">{stats.totalSent}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Success Rate</h2>
            <p className="text-4xl font-bold text-white">{(stats.successRate * 100).toFixed(1)}%</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Recent Activities</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-600 p-3 text-left text-gray-200">Type</th>
                  <th className="border border-gray-600 p-3 text-left text-gray-200">Time</th>
                  <th className="border border-gray-600 p-3 text-left text-gray-200">Details</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${idx % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'} hover:bg-gray-700`}
                  >
                    <td className="border border-gray-700 p-3 font-semibold">{item.type}</td>
                    <td className="border border-gray-700 p-3">{item.time}</td>
                    <td className="border border-gray-700 p-3 text-gray-300">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
