import React from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(() => {
    // Safely read from localStorage (avoid SSR errors)
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  React.useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Persist to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // ✅ runs only when `theme` changes

  return (
    <div className="relative">
      <Sun
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <Moon
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`w-12 cursor-pointer transition-all duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default DarkMode;