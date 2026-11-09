// =====================================================================
//  CATALOGUE DES PELUCHES
//  Une entrée = une peluche = une page. Pour en ajouter une :
//   1. mettre ses photos dans le dossier images/
//   2. copier un bloc { ... } ci-dessous et changer les textes
//   3. c'est tout : la galerie et la page de la peluche se créent toutes seules
//
//  Champs :
//   id          : identifiant court, sans espace ni accent (sert dans l'adresse de la page)
//   famille     : le titre de la section dans la galerie (les peluches ayant le même titre sont regroupées)
//   type        : le petit mot au-dessus du nom (ex. "Poulpe clown")
//   nom         : le nom affiché
//   description : le petit texte de présentation
//   taille      : (facultatif) ex. "environ 25 cm". Laisser "" pour ne rien afficher
//   photos      : la première photo sert de vignette. "pos" règle le cadrage vertical (facultatif)
// =====================================================================

var PELUCHES = [
  {
    id: "poulpe-rouge",
    famille: "Les poulpes clowns",
    type: "Poulpe clown",
    nom: "Rouge, gris et bleu",
    description: "Un petit poulpe farceur, tout en fantaisie. Son chapeau pointu gris est coiffé d'un pompon rouge, sa collerette est bordeaux et ses tentacules en spirale mélangent le rouge, le bleu et le gris. Crocheté à la main, en fil doux et moelleux.",
    taille: "",
    photos: [
      { src: "images/peluches_deco/clown/poulpe-clown-tricolore.jpg", alt: "Poulpe clown au crochet rouge, gris et bleu, avec un chapeau pointu", pos: "15%" },
      { src: "images/peluches_deco/clown/poulpes-clowns-duo-table.jpg", alt: "Deux poulpes clowns au crochet côte à côte, l'un rouge, gris et bleu, l'autre jaune", pos: "15%" }
    ]
  },
  {
    id: "poulpe-jaune",
    famille: "Les poulpes clowns",
    type: "Poulpe clown",
    nom: "Jaune, rouge et bleu",
    description: "Le plus joyeux de la bande ! Chapeau jaune à pompon rouge, collerette rouge vif et tentacules qui jouent avec le jaune, le rouge et le bleu. Crocheté à la main, en fil doux et moelleux.",
    taille: "",
    photos: [
      { src: "images/peluches_deco/clown/poulpe-clown-jaune.jpg", alt: "Poulpe clown au crochet jaune, rouge et bleu, avec un chapeau pointu", pos: "15%" },
      { src: "images/peluches_deco/clown/poulpes-clowns-duo-table.jpg", alt: "Deux poulpes clowns au crochet côte à côte, l'un rouge, gris et bleu, l'autre jaune", pos: "15%" }
    ]
  },
  {
    id: "poulpe-orange-bleu",
    famille: "Les poulpes clowns",
    type: "Poulpe clown",
    nom: "Orange et bleu",
    description: "Un poulpe aux couleurs chaudes : chapeau orange à pompon gris, petite collerette bleue, grande collerette orange et tentacules bleus, orange et gris. Crocheté à la main, en fil doux et moelleux.",
    taille: "",
    photos: [
      { src: "images/peluches_deco/clown/poulpe-clown-orange-bleu.jpg", alt: "Poulpe clown au crochet orange, bleu et gris, posé sur un tabouret", pos: "15%" },
      { src: "images/peluches_deco/clown/poulpes-clowns-duo-tabouret.jpg", alt: "Deux poulpes clowns au crochet côte à côte sur un tabouret, l'un orange et bleu, l'autre gris et bordeaux", pos: "15%" }
    ]
  },
  {
    id: "poulpe-gris-orange",
    famille: "Les poulpes clowns",
    type: "Poulpe clown",
    nom: "Gris, orange et bordeaux",
    description: "Un poulpe tout en douceur : chapeau gris à pompon bordeaux, collerette orange, et des tentacules gris, orange et bordeaux, certains rayés. Crocheté à la main, en fil doux et moelleux.",
    taille: "",
    photos: [
      { src: "images/peluches_deco/clown/poulpe-clown-orange-gris.jpg", alt: "Poulpe clown au crochet gris, orange et bordeaux, posé sur un tabouret", pos: "15%" },
      { src: "images/peluches_deco/clown/poulpes-clowns-duo-tabouret.jpg", alt: "Deux poulpes clowns au crochet côte à côte sur un tabouret, l'un orange et bleu, l'autre gris et bordeaux", pos: "15%" }
    ]
  },
  {
    id: "tortue-rose",
    famille: "Les tortues",
    type: "Tortue",
    nom: "Rose et bleue",
    description: "Une petite tortue toute douce, au corps rose et à la carapace bleu-gris. Crochetée à la main, en fil doux et moelleux.",
    taille: "",
    photos: [
      { src: "images/peluches_deco/tortues/tortue-rose.jpg", alt: "Tortue au crochet rose avec une carapace bleu-gris", pos: "55%" },
      { src: "images/peluches_deco/tortues/tortues-duo.jpg", alt: "Deux tortues au crochet côte à côte : l'une rose à carapace bleue, l'autre bleue à carapace rose", pos: "60%" }
    ]
  },
  {
    id: "tortue-bleue",
    famille: "Les tortues",
    type: "Tortue",
    nom: "Bleue et rose",
    description: "Le pendant de la tortue rose : un corps bleu-gris et une carapace rose. Crochetée à la main, en fil doux et moelleux.",
    taille: "",
    photos: [
      { src: "images/peluches_deco/tortues/tortue-bleue.jpg", alt: "Tortue au crochet bleu-gris avec une carapace rose", pos: "70%" },
      { src: "images/peluches_deco/tortues/tortues-duo.jpg", alt: "Deux tortues au crochet côte à côte : l'une rose à carapace bleue, l'autre bleue à carapace rose", pos: "60%" }
    ]
  },


    {
    id: "dragon",
    famille: "Les dragons",
    type: "Dragon",
    nom: "Bleu",
    description: "Un petit dragon bleu, avec ses deux cornes blanches, ses ailes doublées d'orange et sa queue orange. Crocheté à la main, en fil doux et moelleux.",
    taille: "Environ 30 cm.",
    photos: [
      { src: "images/peluches_deco/dragons/dragon1/peluche-dragon.jpg", alt: "Peluche dragon bleu au crochet, avec des cornes blanches et des ailes orange", pos: "40%" },
      { src: "images/peluches_deco/dragons/dragon1/peluche-dragon2.jpeg", alt: "Peluche dragon bleu au crochet, autre vue", pos: "40%" }
    ]
  },
  {
    id: "dragon-2",
    famille: "Les dragons",
    type: "Dragon",
    nom: "Turquoise",
    description: "Un petit dragon bleu clair, avec ses deux cornes blanches, ses ailes doublées rose et sa queue rose. Crocheté à la main, en fil doux et moelleux.",
    taille: "Environ 30 cm.",
    photos: [
      { src: "images/peluches_deco/dragons/dragon2/dragon2.jpeg", alt: "Peluche dragon au crochet", pos: "40%" },
      { src: "images/peluches_deco/dragons/dragon2/dragon1.jpeg", alt: "Peluche dragon au crochet, vue 2", pos: "40%" },
      { src: "images/peluches_deco/dragons/dragon2/dragon3.jpeg", alt: "Peluche dragon au crochet, vue 3", pos: "40%" },
      { src: "images/peluches_deco/dragons/dragon2/dragon4.jpeg", alt: "Peluche dragon au crochet, vue 4", pos: "40%" }
    ]
  },


  {
    id: "pelican",
    famille: "Les autres peluches",
    type: "Peluche",
    nom: "Le pélican",
    description: "Un grand pélican blanc, avec son énorme bec moutarde en forme de poche, ses pattes assorties et ses touches de noir. Il ne passe jamais inaperçu ! Crocheté à la main, en fil doux et moelleux.",
    taille: "",
    photos: [
      { src: "images/peluches_deco/pelican/peluche-pelican.jpg", alt: "Peluche pélican blanc au crochet avec un grand bec moutarde", pos: "30%" }
    ]
  },

  {
    id: "porte-cle-poule",
    categorie: "accessoire",
    famille: "Les porte-clés",
    type: "Porte-clés",
    nom: "La poule",
    description: "Des petites poules blanches tout rondes, avec leur crête rouge, leur bec jaune et leurs yeux noirs, montées sur un anneau porte-clés. Crochetées à la main, en fil doux et moelleux.",    taille: "",
    photos: [
      { src: "images/portes_cle/poule/porte_cle_poules1.jpeg", alt: "Porte-clés poule au crochet", pos: "40%" },
      { src: "images/portes_cle/poule/porte_cle_poules2.jpeg", alt: "Porte-clés poule au crochet, autre vue", pos: "40%" }
    ]
  }




];
