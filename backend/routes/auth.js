const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");

// Inscription
router.post("/register", upload.single("profilePicture"), async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe requis" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      fullName, // Ajout du nom complet (optionnel)
      email,
      password: hashedPassword,
      profilePicture: req.file ? `/uploads/${req.file.filename}` : null,
    });
    await user.save();
    console.log("Utilisateur créé avec succès:", user);
    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (err) {
    console.error("Erreur lors de l’inscription:", err);
    res
      .status(400)
      .json({ message: "Email déjà utilisé ou erreur lors de l’inscription" });
  }
});

// Connexion
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email et mot de passe requis" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    const token = jwt.sign({ id: user._id }, "votre_secret_jwt", {
      expiresIn: "1h",
    });
    res.json({
      token,
      user: {
        fullName: user.fullName,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Récupérer les infos de l'utilisateur connecté
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.json({
      fullName: user.fullName,
      email: user.email,
      profilePicture: user.profilePicture,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});



// *** Nouvelle route : Mettre à jour le mode jour/nuit ***
router.put("/theme", auth, async (req, res) => {
  const { preferredTheme } = req.body; // Récupérer le thème depuis le corps de la requête
  try {
    const user = await User.findByIdAndUpdate(req.user.id, { preferredTheme }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé !" });
    }
    res.status(200).json({ message: `Thème mis à jour en ${preferredTheme}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la mise à jour du thème." });
  }
});

// *** Nouvelle route : Récupérer le mode jour/nuit ***
router.get("/theme", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Récupérer l'utilisateur connecté
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé !" });
    }
    res.status(200).json({ preferredTheme: user.preferredTheme });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la récupération du thème." });
  }
});


module.exports = router;