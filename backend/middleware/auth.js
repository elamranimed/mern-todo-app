const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Accès refusé, aucun token fourni' });
  }

  try {
    const decoded = jwt.verify(token, 'votre_secret_jwt');
    req.user = decoded; // Ajoute l'ID utilisateur décodé à req.user
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token invalide' });
  }
};

module.exports = auth;