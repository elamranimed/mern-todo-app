import React, { useState, useEffect } from "react";
import { FaTasks } from "react-icons/fa";

const Header = ({ onLogout, tasks, user }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const availableThemes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg fixed top-0 w-full z-20 h-16">
        <div className="flex-1">
          <button onClick={toggleSidebar} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <a href="/" className="btn btn-ghost text-xl">
            To-Do App
          </a>
        </div>
        <div className="flex-none gap-2">
          {/* Indicateur de tâches */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FaTasks className="h-5 w-5" />
                <span className="badge badge-sm indicator-item">
                  {tasks.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{tasks.length} Tâches</span>
                <span className="text-info">En cours</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    Voir toutes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Bouton thème rapide */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            title={
              theme === "light"
                ? "Passer au thème sombre"
                : "Passer au thème clair"
            }
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          {/* Avatar et menu déroulant */}
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    alt="Profil utilisateur"
                    src={
                      user.profilePicture
                        ? `http://localhost:3001${user.profilePicture}`
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    onError={(e) => {
                      e.target.src =
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-72 p-4 shadow"
              >
                <li className="text-center mb-4">
                  <span className="text-lg font-bold">COMPTE</span>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <div className="w-16 rounded-full overflow-hidden">
                      <img
                        alt="Profil utilisateur"
                        src={
                          user.profilePicture
                            ? `http://localhost:3001${user.profilePicture}`
                            : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                        onError={(e) => {
                          e.target.src =
                            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {user.fullName || user.email.split("@")[0]}
                      </p>
                      <p className="text-sm text-base-content/70">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <a>Paramètres</a>
                </li>
                <li>
                  <a onClick={onLogout}>Déconnexion</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-200 z-30 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Thèmes</h2>
          <div className="max-h-[calc(100vh-100px)] overflow-y-auto">
            <ul className="menu bg-base-200 w-full rounded-box">
              {availableThemes.map((themeName) => (
                <li key={themeName}>
                  <a
                    onClick={() => handleThemeChange(themeName)}
                    className={theme === themeName ? "active" : ""}
                  >
                    {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay pour fermer la sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Header;
