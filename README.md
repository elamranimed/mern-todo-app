
Rapport détaillé sur l'image du profil et le mode jour/nuit

Image du Profil :

- Enregistrement de l'image : Lors de l'inscription, l'utilisateur peut télécharger une image de profil via le champ profilePicture dans la requête. Le middleware upload.single("profilePicture") est utilisé pour gérer le téléchargement de l'image.
- Stockage de l'image : L'image est enregistrée dans le dossier /uploads/ et le chemin est stocké dans la base de données sous la forme /uploads/${req.file.filename}.
- Affichage de l'image : L'image du profil est affichée dans la zone de profil après connexion. Le chemin de l'image est récupéré depuis la base de données et affiché dans la page.

Détails techniques :

- Le modèle utilisateur a un champ profilePicture pour stocker le chemin de l'image.
- La route /register utilise le middleware upload.single("profilePicture") pour gérer le téléchargement de l'image.
- L'image est enregistrée dans le dossier /uploads/ et le chemin est stocké dans la base de données.

Mode Jour/Nuit :

- Enregistrement du thème : Le thème préféré de l'utilisateur est stocké dans le champ preferredTheme du modèle utilisateur.
- Mise à jour du thème : La route PUT /theme permet de mettre à jour le thème préféré de l'utilisateur. Le thème est récupéré depuis la requête et mis à jour dans la base de données.
- Récupération du thème : La route GET /theme permet de récupérer le thème préféré de l'utilisateur. Le thème est récupéré depuis la base de données et renvoyé dans la réponse.

Détails techniques :

- Le modèle utilisateur a un champ preferredTheme pour stocker le thème préféré de l'utilisateur.
- La route PUT /theme utilise le middleware auth pour vérifier que l'utilisateur est connecté avant de mettre à jour le thème.
- La route GET /theme utilise également le middleware auth pour vérifier que l'utilisateur est connecté avant de récupérer le thème.

Fonctionnement :

- Lorsqu'un utilisateur se connecte, son thème préféré est récupéré depuis la base de données et appliqué à l'interface utilisateur.
- Lorsqu'un utilisateur met à jour son thème préféré, la mise à jour est enregistrée dans la base de données et appliquée à l'interface utilisateur.
