"use client";

import { useTheme } from "@/components/theme-provider";
import UserMenu from "./UserMenu";

export default function Header() {
  const { theme, setTheme } = useTheme();

  // Bascule entre les thèmes clair et sombre
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700 bg-background px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center lg:hidden">
          {/* En mobile, le titre est affiché au centre */}
          <h1 className="text-xl font-semibold text-foreground lg:hidden">
            ExpenseTracker
          </h1>
        </div>
        
        <div className="flex flex-1 items-center justify-end">
          {/* Bouton de changement de thème */}
          <button 
            onClick={toggleTheme}
            className="flex items-center rounded-md border border-gray-200 dark:border-gray-700 bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-secondary"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-category-entertainment"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-category-entertainment"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
                <span>Dark Mode</span>
              </>
            )}
          </button>
          
          {/* Bouton de notification */}
          <button className="ml-4 rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
            <span className="sr-only">View notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
          
          {/* Menu utilisateur */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}