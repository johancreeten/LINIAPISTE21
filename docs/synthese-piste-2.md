# Synthèse — Piste 2 : Le Parcours créatif

## Intention

Faire de LINIA un guide créatif : la page aide les personnes qui hésitent à choisir une entrée simple, puis à avancer vers un atelier, du matériel, un conseil ou un cadeau.

## Différence avec une piste centrée sur le lieu

La priorité n’est pas de montrer l’espace, mais de rendre l’offre lisible par parcours. Le lieu reste présent via l’ambiance, le café et l’ancrage à Remouchamps.

## Logique parcours

1. Envie de départ. 2. Choix d’une porte. 3. Parcours conseillé. 4. Conseil humain. 5. Action. 6. Cadeau ou prolongement. 7. Réassurance. 8. Visite locale.

## Style visuel

Fond crème/papier, ligne dessinée, cartes organiques, ombres douces, bordures fines, ton chaleureux et pédagogique.

## Palette

Kraft `#D7BFA8`, papier `#F4E3D2`, crème `#FFF5E8`, lavande `#8B78C8`, moutarde `#D8A91E`, corail `#E56F6F`, CTA `#C85252`, sauge `#9AA77B`, olive `#5D694B`, encre `#2F3033`, taupe `#8D745F`.

## Sections

Header, hero étape 1, envies étape 2, parcours étape 3, conseil étape 4, boutique/ateliers étape 5, cadeaux étape 6, réassurance, SEO local, conclusion, footer.

## Animations

IntersectionObserver minimal : ajout de `.is-visible` aux éléments `.reveal-on-scroll`. Respect de `prefers-reduced-motion`.

## WordPress / Gutenberg

Chaque section peut devenir un pattern Gutenberg. Les classes `wp-section`, `wp-container`, `wp-card-grid`, `wp-split` structurent la transposition.

## WooCommerce

Les produits utilisent `.wc-product-card`. Les ateliers utilisent `.wc-workshop-card` et peuvent devenir des produits virtuels WooCommerce avec stock limité.

## Images

Les emplacements attendent des images Pexels locales. Le téléchargement direct a été bloqué dans l’environnement ; des visuels SVG temporaires locaux sont fournis pour éviter les fichiers binaires dans la demande d’extraction et un fichier `docs/images-a-telecharger.md` liste les remplacements à télécharger.

## Critères de sélection

Matière, papier, aquarelle, dessin, atelier, artisanat, café, lumière douce, palette kraft/crème/sauge/corail.

## Points à adapter

Photos finales, adresse, horaires, vrais ateliers, vrais produits, réservations, paiements, Google Maps, formulaires, avis et textes légaux.
