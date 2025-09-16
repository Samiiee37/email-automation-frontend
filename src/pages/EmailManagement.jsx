import { useState } from 'react';


// Dummy data
const dummyEmails = ["test@ovam.ai"];
const dummyFromEmails = ["sender@ovam.ai"];

function EmailManagement() {
  const [emails, setEmails] = useState(dummyEmails);
  const [fromEmails, setFromEmails] = useState(dummyFromEmails);
  const [generateInput, setGenerateInput] = useState({ url: "", name: "", company: "", domain: "" });
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyResult, setVerifyResult] = useState(null);

  const handleGenerate = async () => {
    // TODO: API integration for /generate-emails
    try {
      // const response = await fetch("http://localhost:3007/generate-emails", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(generateInput),
      // });
      // const data = await response.json();
      // if (data.success) setEmails([...emails, ...data.result.emails]);
      console.log("Generate emails with:", generateInput);
    } catch (err) {
      console.error("Generate error:", err);
    }
  };

  const handleVerify = async () => {
    // TODO: API integration for /verify-email
    try {
      // const response = await fetch("http://localhost:3007/verify-email", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: verifyEmail }),
      // });
      // const data = await response.json();
      // if (data.success) setVerifyResult(data.result);
      console.log("Verify email:", verifyEmail);
    } catch (err) {
      console.error("Verify error:", err);
    }
  };

  const handleCsvUpload = (file, type) => {
    // TODO: API integration for /upload-csv
    // const formData = new FormData();
    // formData.append("csv", file);
    // fetch(`http://localhost:3007/upload-csv?type=${type}`, { method: "POST", body: formData });
    console.log(`Upload ${type} CSV:`, file.name);
    if (type === "emails") setEmails([...emails, "new@ovam.ai"]);
    else setFromEmails([...fromEmails, "new-sender@ovam.ai"]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-tight max-w-7xl mx-auto">
        Email Management
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-7xl mx-auto mb-6">
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
              d="M12 9v3m0 0v3m0-3h-3m3 0h3"
            ></path>
          </svg>
          <h2 className="text-xl font-semibold text-gray-700">Generate Emails</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={generateInput.url}
            onChange={(e) => setGenerateInput({ ...generateInput, url: e.target.value })}
            placeholder="LinkedIn URL"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="LinkedIn URL"
          />
          <input
            type="text"
            value={generateInput.name}
            onChange={(e) => setGenerateInput({ ...generateInput, name: e.target.value })}
            placeholder="Name"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Name"
          />
          <input
            type="text"
            value={generateInput.company}
            onChange={(e) => setGenerateInput({ ...generateInput, company: e.target.value })}
            placeholder="Company"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Company"
          />
          <input
            type="text"
            value={generateInput.domain}
            onChange={(e) => setGenerateInput({ ...generateInput, domain: e.target.value })}
            placeholder="Domain"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Domain"
          />
        </div>
        <button
          onClick={handleGenerate}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
          aria-label="Generate emails"
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
              d="M12 9v3m0 0v3m0-3h-3m3 0h3"
            ></path>
          </svg>
          Generate Emails
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-7xl mx-auto mb-6">
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
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <h2 className="text-xl font-semibold text-gray-700">Verify Email</h2>
        </div>
        <input
          type="text"
          value={verifyEmail}
          onChange={(e) => setVerifyEmail(e.target.value)}
          placeholder="Enter email to verify"
          className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Email to verify"
        />
        <button
          onClick={handleVerify}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
          aria-label="Verify email"
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
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          Verify Email
        </button>
        {verifyResult && (
          <p className="mt-2 text-gray-600">
            Status: <span className={verifyResult.status === 'valid' ? 'text-green-600' : 'text-red-600'}>
              {verifyResult.status}
            </span>, Reason: {verifyResult.reason || "N/A"}
          </p>
        )}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
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
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <h2 className="text-xl font-semibold text-gray-700">Manage CSVs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-2">Emails CSV:</p>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => handleCsvUpload(e.target.files[0], "emails")}
              className="border border-gray-300 p-2 rounded-lg w-full"
              aria-label="Upload emails CSV"
            />
            <ul className="mt-2 text-gray-600">
              {emails.map((email, index) => (
                <li key={index} className="py-1">{email}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gray-600 mb-2">From Emails CSV:</p>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => handleCsvUpload(e.target.files[0], "from_emails")}
              className="border border-gray-300 p-2 rounded-lg w-full"
              aria-label="Upload from emails CSV"
            />
            <ul className="mt-2 text-gray-600">
              {fromEmails.map((email, index) => (
                <li key={index} className="py-1">{email}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailManagement;