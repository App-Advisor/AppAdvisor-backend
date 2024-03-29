# Installation du serveur App Advisor

## Étape 1: Cloner le projet 
Commencez par cloner le projet depuis votre IDE (ex: Visual Studio Code).
```bash
git clone https://github.com/App-Advisor/AppAdvisor-backend.git 
cd Appadvisor-backend
```
## Étape 2: Initialiser Git 
Si votre dossier de projet n'est pas encore un dépôt Git :
```bash
git init
``` 
Suivez les instructions pour lier votre dossier local à un dépôt distant.

## Étape 2: Installer les dépendances

Installez toutes les dépendances nécessaires pour le bon fonctionnement du projet

```bash
npm install 
``` 

## Étape 3: Lancer votre projet

Pour voir votre travail en action, lancez le serveur de développement :

```bash
npm start
``` 

Votre application Next.js est désormais configurée sur votre appareil, vous pourrez tester le serveur sur [http://localhost:3000/](http://localhost:3000/) avec les différentes routes qui sont documentées ici: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

 La connexion à la base de données MongoDB Atlas se fait grâce aux données de connexion contenu dans le `.env` .

