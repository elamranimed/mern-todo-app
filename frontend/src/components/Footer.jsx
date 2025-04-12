import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-text-primary py-8 mt-auto shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-4">To-Do App</h2>
            <p className="text-sm text-text-secondary">
              Gérez vos tâches efficacement avec style et simplicité.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-accent transition-colors duration-300"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/docs"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-accent transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-accent transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="text-sm mt-4 text-text-secondary">
              © {new Date().getFullYear()} To-Do App. Tous droits réservés.
            </p>
          </div>
        </div>
        {/* Ligne de séparation */}

        <div className="border-t border-base-content/10 mt-8 pt-4 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} To-Do App. Tous droits réservés.
          </p>
          <p className="text-sm opacity-70">
            Réalisé par Youness KHAMLICHI IDRISSI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
