import React, { useState, useEffect } from "react"; 
import api from "./axiosConfig"; 
import AuthForm from "./components/AuthForm"; 
import TaskForm from "./components/TaskForm"; 
import TaskList from "./components/TaskList"; 
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css"; 

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || ""); 
  const [tasks, setTasks] = useState([]); 
  const [user] = useState(null);
  useEffect(() => {
    if (token) {
      api
        .get("/tasks")
        .then((res) => setTasks(res.data))
        .catch(() => {
          setToken("");
          localStorage.removeItem("token");
        });
    }
  }, [token]);

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setTasks([]);
  };

  if (!token) {
    return (
      <div className="auth-container">
        <AuthForm setToken={setToken} />
      </div>
    );
  }

  return (
    <div className="auth-container"> {/* Applique les mêmes couleurs qu'à la page de connexion */}
      <div className="auth-form"> {/* Style coloré similaire */}
        <h1>Ma To-Do List</h1> 
        <ThemeSwitcher />                
        <button onClick={logout} className="auth-button">Déconnexion</button> 

        <div className="profil-zone">
                    {user ? (
                      <div>
                        <h2>{user.profileName}</h2>
                        
                      </div>
                    ) : (
                      <p>Erreur : données de l'utilisateur non disponibles</p>
                    )}
                  </div>

        <TaskForm setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
