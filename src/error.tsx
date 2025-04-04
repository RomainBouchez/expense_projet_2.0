"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Éventuellement logger l'erreur vers un service d'analytics
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center dark:bg-gray-900">
      <div className="space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-red-600 dark:text-red-500">Erreur</h1>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Quelque chose s&apos;est mal passé
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Nous sommes désolés, une erreur s&apos;est produite lors du traitement de votre demande.
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="space-x-4">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:ring-offset-gray-900"
            >
              Réessayer
            </button>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
            >
              Retour au tableau de bord
            </Link>
          </div>

          {error.message && process.env.NODE_ENV === "development" && (
            <div className="mt-6 max-w-lg rounded-md bg-red-50 p-4 dark:bg-red-900/20">
              <pre className="text-left text-sm text-red-700 dark:text-red-300">
                {error.message}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}