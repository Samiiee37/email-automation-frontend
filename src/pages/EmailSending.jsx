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
const dummyTemplatePreview = { subject: "Review Request", body: "Hi Test, please review our PR at ovam.ai..." };

function EmailSending() {
  const [sendResult, setSendResult] = useState(dummySendResult);
  const [template, setTemplate] = useState("prReview1");
  const [preview, setPreview] = useState(dummyTemplatePreview);

  const handleSend = async () => {
    // TODO: API integration for /send-emails
    try {
      // const response = await fetch("http://localhost:3007/send-emails");
      // const data = await response.json();
      // if (data.success) setSendResult(data);
      console.log("Send emails");
    } catch (err) {
      console.error("Send error:", err);
    }
  };

  const handlePreview = async () => {
    // TODO: API integration for /preview-template
    try {
      // const response = await fetch("http://localhost:3007/preview-template", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ firstName: "Test", company: "ovam.ai", from: "sender@ovam.ai", template }),
      // });
      // const data = await response.json();
      // if (data.success) setPreview({ subject: data.subject, body: data.body });
      console.log("Preview template:", template);
    } catch (err) {
      console.error("Preview error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-tight max-w-7xl mx-auto">
        Email Sending
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-7xl mx-auto mb-6">
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
          <h2 className="text-xl font-semibold text-gray-700">Send Emails</h2>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Select email template"
          >
            <option value="prReview1">PR Review 1</option>
            <option value="prReview2">PR Review 2</option>
            <option value="jiraSlack">Jira Slack</option>
          </select>
          <button
            onClick={handlePreview}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center"
            aria-label="Preview email template"
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            Preview Template
          </button>
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center"
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
        {preview && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600"><strong>Subject:</strong> {preview.subject}</p>
            <p className="text-gray-600"><strong>Body:</strong> {preview.body}</p>
          </div>
        )}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Send Results</h2>
        <p className="text-gray-600 mb-2">
          Total: {sendResult.total}, Success: {sendResult.successCount}, Failed: {sendResult.failCount}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${(sendResult.successCount / sendResult.total) * 100}%` }}
          ></div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3 text-left text-gray-700">To</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700">From</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700">Status</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700">Details</th>
              </tr>
            </thead>
            <tbody>
              {sendResult.results.map((result, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100 transition-colors duration-150`}
                >
                  <td className="border border-gray-300 p-3">{result.to}</td>
                  <td className="border border-gray-300 p-3">{result.from}</td>
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
                  <td className="border border-gray-300 p-3">{result.messageId || result.error}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmailSending;