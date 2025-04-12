const path = require('path');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Servir les photos

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("MongoDB URI is undefined. Check your environment variables.");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.error('Erreur MongoDB:', err));

// Ajouter les routes
const taskRoutes = require("./routes/tasks");
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));