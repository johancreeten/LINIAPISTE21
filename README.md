# LINIA — Prototype Piste 2 : Le Parcours créatif

## 1. Présentation

Prototype statique HTML/CSS/JS pour présenter LINIA comme guide créatif : acheter, se poser, créer.

## 2. Objectif

Transformer une envie floue en parcours clair : envie, porte d’entrée, atelier, matériel, conseil, action, cadeau et visite locale.

## 3. Fichiers créés

- `index.html`
- `css/styles.css`
- `js/main.js`
- `assets/placeholders/` — SVG temporaires versionnés en texte, à remplacer plus tard par les WebP Pexels finaux
- `assets/brand/`
- `docs/synthese-piste-2.md`
- `docs/credits-images.md`
- `docs/images-a-telecharger.md`

## 4. Lancer en local

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## 5. Tester sur smartphone

Connecter ordinateur et smartphone au même Wi-Fi, récupérer l’IP locale et ouvrir `http://IP:8000`.

## 6. Publier sur GitHub Pages

Pousser la branche, puis activer GitHub Pages sur la racine du dépôt.

## 7. Transposition WordPress / WooCommerce

Les sections utilisent des classes autonomes proches d’une logique de blocs Gutenberg. Les cartes produits et ateliers pourront devenir des composants WooCommerce.

## 8. Ateliers WooCommerce

Chaque atelier peut être un produit WooCommerce virtuel avec stock limité correspondant au nombre de places disponibles.

## 9. À adapter plus tard

Vraies photos définitives, adresse, horaires, produits réels, ateliers réels, fiches parcours, intégration WooCommerce, paiements Stripe/Mollie, Google Maps, formulaires, avis clients, textes légaux.
