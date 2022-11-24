# Chicken Run

Voici l'API backend pour le webservice /chicken :

## Installation

Cloner le repo

**Prérequis:**

Vous avez besoin d'avoir node et `npm` installés localement sur votre machine.

Pour lancer ce projet, vous aurez aussi besoin d'ajouter les variables d'environnement suivantes à votre fichier .env à la racine du répo.

`PORT=3000`

`APP_SECRET="chicken-user"`

`RANDOM_TOKEN_SECRET="chicken12345"`

**Installation:**

Run `npm install`.

Vous pouvez ensuite lancer le serveur avec `node server` ou `nodemon server`.
Le serveur fonctionnera sur `localhost` avec le port par défault `3000`.

## Tech Stack

**Server:** NodeJS, Express, MongoDB
