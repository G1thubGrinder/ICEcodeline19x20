import { useState } from "react";

export default function Login({ setStudent }) {
  const [studentID, setStudentID] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/students.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data");
        return res.json();
      })
      .then((data) => {
        const found = data.find(
          (s) => s.studentID === studentID && s.birthdate === birthdate
        );
        if (found) {
          setStudent(found);
        } else {
          setError("Invalid Student ID or password.");
        }
      })
      .catch(() => setError("Something went wrong. Please try again."));
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-400 text-center">
          Find Your Codeline
        </h1>

        <input
          type="text"
          placeholder="Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          className="w-full p-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white transition"
          required
        />

        <input
          type="password"
          placeholder="Password (birthdate: ddmmyyyy)"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="w-full p-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white transition"
          required
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-xl transition"
        >
          Reveal
        </button>
      </form>
    </div>
  );
}
