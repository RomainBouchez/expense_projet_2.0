"use client";

import Link from "next/link";

export default function UserMenu() {
  // Pour le moment, nous utilisons un état fictif pour l'utilisateur
  const isSignedIn = false;

  // Si l'utilisateur n'est pas connecté, afficher les boutons de connexion/inscription
  if (!isSignedIn) {
    return (
      <div className="flex items-center space-x-2">
        <Link
          href="/dashboard"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Dashboard
        </Link>
      </div>
    );
  }

  // Si l'utilisateur est connecté, afficher un avatar simple
  return (
    <div className="relative ml-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200">
        <span className="text-sm font-medium">U</span>
      </div>
    </div>
  );
}