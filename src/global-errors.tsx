"use client";

import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Enregistrer l'erreur dans un service de monitoring
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={`${inter.variable} bg-gray-50 dark:bg-gray-900`}>
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <div className="space-y-8 px-6">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold text-red-600 dark:text-red-500">
                Erreur Critique
              </h1>
              <h2 className="text-2xl text-gray-800 dark:text-gray-200">
                Oups! Quelque chose s&apos;est mal passé
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                L&apos;application a rencontré une erreur inattendue.
              </p>
            </div>

            <button
              onClick={() => reset()}
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:ring-offset-gray-900"
            >
              Réessayer
            </button>

            {process.env.NODE_ENV === "development" && (
              <div className="mt-8 max-w-2xl rounded-lg bg-red-50 p-6 text-left dark:bg-red-900/20">
                <p className="mb-2 font-bold text-red-800 dark:text-red-200">
                  Détails de l&apos;erreur:
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  {error.message}
                </p>
                {error.stack && (
                  <pre className="mt-2 max-h-96 overflow-auto rounded bg-gray-100 p-2 text-xs text-red-700 dark:bg-gray-800 dark:text-red-300">
                    {error.stack}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}