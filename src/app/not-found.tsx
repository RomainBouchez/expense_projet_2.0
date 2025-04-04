import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center dark:bg-gray-900">
      <div className="space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Page introuvable</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Oups! La page que vous recherchez semble avoir disparu.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="h-64 w-64">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="h-full w-full text-gray-400 dark:text-gray-600"
            >
              <path
                d="M9.172 16.172a4 4 0 015.656 0M12 14a2 2 0 100-4 2 2 0 000 4z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 21a9 9 0 110-18 9 9 0 010 18z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 9l-6 6M9 9l6 6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="space-x-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:ring-offset-gray-900"
            >
              Retour au tableau de bord
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
            >
              Accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}