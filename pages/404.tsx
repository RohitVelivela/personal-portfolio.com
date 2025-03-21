import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/" className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-all">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
