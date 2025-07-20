export default function Reveal({ student, goBack }) {
  const codelineCount = student.codelines.length;

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-6">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 w-full max-w-3xl overflow-y-auto max-h-full space-y-6 text-gray-900 dark:text-gray-100">
        <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-400 text-center">
          Hello, {student.nickname}!
        </h1>

        {codelineCount > 1 ? (
          <p className="text-lg font-semibold text-blue-500 text-center">
            Congratulations! You’ve been matched with {codelineCount} codelines
          </p>
        ) : (
          <p className="text-lg font-semibold text-blue-500 text-center">
            Congratulations! You’ve been matched with 1 codeline
          </p>
        )}


        {student.codelines.map((code, index) => (
          <div
            key={index}
            className="border-t border-blue-200 dark:border-gray-700 pt-4 space-y-1"
          >
            {codelineCount > 1 && (
              <p className="text-xl font-semibold text-blue-500">
                Codeline #{index + 1}
              </p>
            )}
            <p><span className="font-semibold text-blue-400">Name:</span> {code.name || "Not provided"}</p>
            <p><span className="font-semibold text-blue-400">Nationality:</span> {code.nationality || "Not provided"}</p>
            <p><span className="font-semibold text-blue-400">Favorite Food:</span> {code.favoriteFood || "Not provided"}</p>
            <p><span className="font-semibold text-blue-400">Favorite Snack:</span> {code.favoriteSnack || "Not provided"}</p>
            <p><span className="font-semibold text-blue-400">Favorite Drink:</span> {code.favoriteDrink || "Not provided"}</p>
            <p><span className="font-semibold text-blue-400">Hobby:</span> {code.hobby || "Not provided"}</p>
            <p><span className="font-semibold text-blue-400">Specific Preference:</span> {code.specificPref || "None"}</p>
            <p><span className="font-semibold text-blue-400">Line ID:</span> {code.lineID || "Not provided"}</p>
            <p><span className="font-semibold text-blue-400">Instagram:</span> {code.instagram || "Not provided"}</p>
          </div>
        ))}

        <button
          onClick={goBack}
          className="w-full mt-6 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-semibold py-2 rounded-xl transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
