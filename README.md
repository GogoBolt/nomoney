# NO-Money Just QR-Code

Application de gestion de cantine et transport scolaire par QR Code.

## Description

NO-Money Just QR-Code est une application qui permet de dématérialiser la gestion des paiements et du suivi des élèves pour la cantine scolaire et le transport scolaire. Elle s'adresse aux parents, établissements scolaires et transporteurs souhaitant automatiser et sécuriser ces processus tout en facilitant la gestion financière.

## Fonctionnalités

- Gestion des comptes utilisateurs (élèves, parents, administrateurs, cantiniers, chauffeurs de bus)
- Attribution d'un QR Code unique à chaque élève
- Suivi en temps réel des consommations de repas et des trajets effectués
- Gestion des paiements en ligne
- Envoi de notifications
- Génération de rapports et statistiques

## Technologies utilisées

- **Frontend**: Nuxt 3 (Vue.js), Tailwind CSS, Chart.js
- **Backend**: Nhost (BaaS), Hasura, PostgreSQL
- **Gestion des QR Codes**: qrcode.vue, vue-qrcode-reader

## Installation

1. Cloner le projet
```bash
git clone https://github.com/votre-utilisateur/no-money-just-qrcode.git
cd no-money-just-qrcode
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d'environnement
Créez un fichier `.env` à la racine du projet en vous basant sur le fichier `.env.example` :
```
NHOST_SUBDOMAIN=your-nhost-subdomain
NHOST_REGION=your-nhost-region
NHOST_ADMIN_SECRET=your-nhost-admin-secret
```

4. Démarrer le projet en local
```bash
npm run dev
```

## Configuration de Nhost

1. Créez un compte sur [Nhost](https://nhost.io/)
2. Créez un nouveau projet
3. Utilisez les fichiers de migration dans le dossier `nhost/migrations` pour configurer votre base de données
4. Configurez les métadonnées Hasura en utilisant les fichiers dans le dossier `nhost/metadata`
5. Récupérez les informations de connexion (subdomain, region, admin secret) et ajoutez-les à votre fichier `.env`

## Structure du projet

```
├── assets/            # Fichiers statiques (images, CSS)
├── components/        # Composants Vue réutilisables
├── composables/       # Composables Vue (logique réutilisable)
├── layouts/           # Layouts de l'application
├── middleware/        # Middleware Nuxt
├── nhost/             # Configuration Nhost (migrations, métadonnées)
├── pages/             # Pages de l'application
├── plugins/           # Plugins Nuxt
├── public/            # Fichiers publics
├── .env.example       # Exemple de variables d'environnement
├── nuxt.config.ts     # Configuration Nuxt
├── package.json       # Dépendances et scripts
└── tailwind.config.js # Configuration Tailwind CSS
```

## Licence

Ce projet est sous licence MIT.# nomoney
# nomoney
