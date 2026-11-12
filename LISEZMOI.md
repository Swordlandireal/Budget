# Budget : installer l'appli sur ton téléphone

Ce dossier contient l'appli prête à être mise en ligne gratuitement avec **GitHub Pages**.
Une fois en ligne, tu l'installes sur Android et iPhone comme une vraie appli : icône sur
l'écran d'accueil, plein écran, et elle s'ouvre même sans connexion.

## Ce qu'il y a dans le dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Toute l'appli (écrans, styles et code) |
| `manifest.webmanifest` | Nom, icône et couleurs de l'appli installée |
| `sw.js` | Garde une copie de l'appli pour l'ouvrir hors connexion |
| `icons/` | Les icônes de l'écran d'accueil |

## 1. Mettre l'appli en ligne (une seule fois, ~10 minutes)

1. Crée un compte gratuit sur **github.com** (si tu n'en as pas).
2. En haut à droite : **+** → **New repository**.
   - Nom : `budget`
   - Coche **Public** (obligatoire pour GitHub Pages gratuit, voir la note plus bas)
   - Clique **Create repository**.
3. Sur la page du dépôt, clique **uploading an existing file**.
   Glisse **tout le contenu** du dossier (les 4 éléments, y compris le dossier `icons`),
   puis **Commit changes**.
4. Va dans **Settings** → **Pages** (menu de gauche).
   - *Source* : **Deploy from a branch**
   - *Branch* : **main** et **/ (root)** → **Save**.
5. Attends 1 à 2 minutes. Ton appli est en ligne à l'adresse :
   `https://TON-PSEUDO.github.io/budget/`

> **Note sur « Public »** : c'est le *code* de l'appli qui est public, pas tes chiffres.
> Tes données restent enregistrées uniquement sur ton téléphone et ne sont jamais envoyées en ligne.

## 2. Installer sur ton téléphone

**Android (Chrome)**
1. Ouvre l'adresse de ton appli dans Chrome.
2. Menu **⋮** → **Installer l'application** (ou **Ajouter à l'écran d'accueil**).

**iPhone (Safari obligatoirement)**
1. Ouvre l'adresse de ton appli dans **Safari**.
2. Bouton **Partager** (carré avec une flèche) → **Sur l'écran d'accueil** → **Ajouter**.

L'icône « Budget » apparaît, et l'appli s'ouvre en plein écran.

## 3. Récupérer les données saisies dans Claude

1. Dans la version Claude de l'appli : **⚙︎ Options** → **Sauvegarde et transfert** → **Copier mes données**.
2. Envoie-toi ce texte (note, mail à toi-même, message…).
3. Dans l'appli installée : **⚙︎ Options** → **Sauvegarde et transfert**, colle le texte,
   puis **Importer le texte collé**.

## ⚠️ À savoir

- **Tes données sont sur l'appareil.** Un budget saisi sur ton Android n'apparaît pas sur ton
  iPhone : utilise *Sauvegarde et transfert* pour passer de l'un à l'autre.
- **Fais une sauvegarde de temps en temps** (*Copier mes données* ou *Télécharger un fichier*).
  Si tu désinstalles l'appli ou effaces les données du navigateur, elles sont perdues.
- **Sur iPhone**, garde l'appli installée sur l'écran d'accueil : c'est ce qui protège
  ses données du nettoyage automatique de Safari.
- **Code PIN et empreinte** : ils fonctionnent aussi dans la version installée.
  L'empreinte (ou Face ID) s'active séparément sur chaque téléphone.

## Mettre à jour l'appli plus tard

1. Remplace `index.html` dans ton dépôt GitHub (**Add file** → **Upload files**).
2. Dans `sw.js`, change `VERSION = "mon-budget-v1"` en `"mon-budget-v2"` (puis v3…).
3. Sur le téléphone, ferme et rouvre l'appli (deux fois si besoin) pour charger la nouvelle version.
