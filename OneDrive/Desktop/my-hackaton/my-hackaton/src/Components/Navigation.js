import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (window.pageYOffset > lastScrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollY = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-transform duration-500 ease-in-out ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out">
          <a href="#hero">Abdul Rehman</a>
        </div>

        {/* Hamburger Icon (Mobile Menu Toggle) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`fixed lg:static top-16 left-0 lg:left-auto lg:top-auto lg:flex lg:flex-row w-full lg:w-auto bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent shadow-lg lg:shadow-none transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 p-4 lg:p-0">
            <li>
              <a
                href="#hero"
                className="text-gray-700 font-bold dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 font-bold dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-700 font-bold dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-700 font-bold dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out"
              >
                View My Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 font-bold dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-400 dark:hover:bg-gray-900 flex items-center justify-center"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-500 hover:animate-spin" />
          ) : (
            <MoonIcon className="w-6 h-6 text-blue-500 hover:animate-pulse" />
          )}
        </button>
      </div>
    </nav>
  );
}
