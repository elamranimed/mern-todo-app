import React, { useState } from "react"; // Import des hooks React pour gérer les états locaux
import api from "../axiosConfig"; // Importation de la configuration Axios pour effectuer les requêtes API

// Composant AuthForm pour gérer le processus d'authentification
const AuthForm = ({ setToken }) => {
  const [email, setEmail] = useState(""); // État local pour stocker l'email saisi par l'utilisateur
  const [password, setPassword] = useState(""); // État local pour stocker le mot de passe
  const [isLogin, setIsLogin] = useState(true); // État pour différencier entre Connexion et Inscription
  const [profileName, setProfileName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

// reccuperer donnes profil a afficher apres connexion
  const getProfile = async () => {
    try {
      const res = await api.get('/user');
      setProfileName(res.data.profileName);
      setProfilePicture(res.data.profilePicture);
    } catch (err) {
      console.error(err);
    }
  };

  // Fonction déclenchée lors de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut de rechargement de la page
    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register"; // Endpoint API choisi en fonction du mode actuel
      const res = await api.post(endpoint, { email, password }); // Envoi des données via une requête POST
      if (isLogin) {
        setToken(res.data.token); // Stocke le token de l'utilisateur après une connexion réussie
        localStorage.setItem("token", res.data.token); // Sauvegarde le token dans le stockage local
        getProfile(); // Appeler la fonction pour récupérer les données de l'utilisateur
      } else {
        alert("Inscription réussie, connectez-vous !"); // Message d'alerte pour informer que l'inscription a réussi
        setIsLogin(true); // Bascule en mode Connexion après une inscription réussie
      }
    } catch (err) {
      alert(err.response?.data?.message || "Erreur"); // Affiche un message d'erreur si la requête échoue
    }
  };

  // Rendu du formulaire d'authentification
  return (
    <div className="auth-form"> 
      <h2>{isLogin ? "Connexion" : "Inscription"}</h2> 
      <form onSubmit={handleSubmit}> 
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          className="input-field" 
          required 
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Mot de passe" 
          className="input-field" 
          required 
        />

        {!isLogin && (
          <>
            <input
              type="text"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              placeholder="Nom de profil"
              className="input-field"
            />
            <input
              type="file"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              placeholder="Image de profil"
              className="input-field"
            />
            
            {profilePicture && (
              <img
                src={URL.createObjectURL(profilePicture)}
                alt="Image de profil"
              />
            )}
          </>
        )}

        <button type="submit" className="auth-button">
          {isLogin ? "Se connecter" : "S’inscrire"} 
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
        {isLogin
          ? "Pas de compte ? Inscrivez-vous" 
          : "Déjà un compte ? Connectez-vous"}
      </button>
    </div>
  );
};

export default AuthForm; // Exporte le composant pour qu'il puisse être utilisé ailleurs
