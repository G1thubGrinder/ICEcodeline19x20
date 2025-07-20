export default function Loading() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-blue-600 dark:text-blue-300 font-semibold text-lg">Loading...</p>
    </div>
  );
}