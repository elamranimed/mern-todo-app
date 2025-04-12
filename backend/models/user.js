const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String }, // Nouveau champ pour le nom complet
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: Buffer },
  createdAt: { type: Date, default: Date.now },
  preferredTheme: { type: String, default: "light" }, // Ajout : Champ pour le thème avec "light" comme valeur par défaut
});

module.exports = mongoose.model("User", userSchema);