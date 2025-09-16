import { useState } from 'react';

// Dummy data
const dummySendResult = {
  success: true,
  total: 2,
  successCount: 1,
  failCount: 1,
  results: [
    { to: "test1@ovam.ai", from: "sender@ovam.ai", status: "sent", messageId: "abc123" },
    { to: "test2@ovam.ai", from: "sender@ovam.ai", status: "failed", error: "Invalid email" },
  ],
};

function Dashboard() {
  const [status, setStatus] = useState({
    lastScrape: "2025-09-15 01:00 AM",
    scrapeEmails: 2,
    lastSend: "2025-09-15 01:10 AM",
    sendSuccess: 1,
    sendTotal: 2,
  });

  const handleScrape = async () => {
    // TODO: API integration for /scrape-emails
    try {
      // const response = await fetch("http://localhost:3007/scrape-emails");
      // const data = await response.json();
      // if (data.success) {
      //   setStatus({ ...status, lastScrape: new Date().toISOString(), scrapeEmails: data.result.emails.length });
      // }
      console.log("Trigger scrape");
    } catch (err) {
      console.error("Scrape error:", err);
    }
  };

  const handleSend = async () => {
    // TODO: API integration for /send-emails
    try {
      // const response = await fetch("http://localhost:3007/send-emails");
      // const data = await response.json();
      // if (data.success) {
      //   setStatus({ ...status, lastSend: new Date().toISOString(), sendSuccess: data.successCount, sendTotal: data.total });
      // }
      console.log("Trigger send emails");
    } catch (err) {
      console.error("Send error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-tight">
        Email Outreach Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Scrape Status Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-blue-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <h2 className="text-xl font-semibold text-gray-700">Scrape Status</h2>
          </div>
          <p className="text-gray-600">Last Scrape: {status.lastScrape}</p>
          <p className="text-gray-600">Emails Extracted: {status.scrapeEmails}</p>
          <button
            onClick={handleScrape}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
            aria-label="Start scraping LinkedIn profiles"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
            Start Scraping
          </button>
        </div>

        {/* Send Status Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <h2 className="text-xl font-semibold text-gray-700">Send Status</h2>
          </div>
          <p className="text-gray-600">Last Send: {status.lastSend}</p>
          <p className="text-gray-600">
            Emails Sent: {status.sendSuccess}/{status.sendTotal}
          </p>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${(status.sendSuccess / status.sendTotal) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Success Rate: {((status.sendSuccess / status.sendTotal) * 100).toFixed(1)}%
            </p>
          </div>
          <button
            onClick={handleSend}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center"
            aria-label="Send emails"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
            Send Emails
          </button>
        </div>
      </div>

      {/* Recent Emails Table */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Emails</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3 text-left text-gray-700">Email</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummySendResult.results.map((result, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100 transition-colors duration-150`}
                >
                  <td className="border border-gray-300 p-3">{result.to}</td>
                  <td className="border border-gray-300 p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        result.status === 'sent'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {result.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;