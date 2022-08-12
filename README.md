# Mon parcrous et mes intérogations :

TO DO : Réponses aux questions ouvertes. Retracer ton parcours et tes interrogations, les recherches éventuelles effectuées
L’appli de démo avec les instructions : https://fullstcak0822-corrige-gdasbv46yq-od.a.run.app
Le repo à cloner avec l’application de démarrage : https://gitlab.com/mvtechtests/public/fullstack0822_sujet
=>

0.  Remarque : je n'ai pas pu cloner le repot gitlab (problème de droits), j'ai donc du télécharger le repot en .zip

1.  initialisation du projet sur la branche main, puis passage sur une branche de travail dev

2.  lecture du sujet et découverte du code : je n'avais jamais utilisé le framework Svelte. Je comprends comment fonctionne le routage, et les composants placés dans le fichier lib puis importés sur les pages .svelte

3.  Composant ValueInteger, Fonction handleChange du : je constate que le composant ValueInteger est importé dans le composant Value (qui rend un composant ValueInteger si type est integer), et que le composant Value est lui importé dans le composant Setting. Puis sur la page /settings/integer : on appelle le composant Setting. Le fichier index.js appelle l'API back-end, ce qui permet d'indiquer dans les props de Setting qu'on a un type integer. Test : en rentrant des valeurs inférieures au min ou supérieures au max, elles sont bien modifiées au min ou au max : http://localhost:3000/settings/integer

4.  Composant ValueDecimal et sa function handleChange : à tester sur la page : http://localhost:3000/settings/decimal
    Je me sers de la structure de ValueInteger, car c'est le même principe de base. Je réutilise mon code pour le min et le max.
    Je modifie le pas à la valeur de la précision value : Math.pow(10, -precision).
    Puis j'écris le code pour tronquer à la décimale voulue.
    Difficulté et bug recontré : avec ma condiition de boucle if initiale (cf mon code), la modification du champ via la flèche du haut ne marche plus : l'input est tronqué est ne peut plus augmenter via appui sur la flèche. Difficulté résolue en utilisant une autre façon d'écrire la condition sur les décimales, trouvée sur internet.

5.  Permettre l'affichage des valeurs boolean:

- je créé un composant ValueBoolean.svelte
- je complète Value.svelet
- je créé la route boolean

je constate que l'affichage initial correspond bien à ce qui est donné par l'API : true pour pirate et false pour dwarf

6. Terminer le composant ValueTime : en reprenant la structure des autres composants, j'ai simplement utilisé un input avec le type="time"

7. Le champs desc d'un noeud est affiché, s'il est présent : je n'y suis pas arrivé

8. Composant ValueDateTime : expliquer la fonction handleChange :
   La fonction handleChange permet de récupérer la date donnée par l'utilisateur. Il faut pour cela faire plusieurs conversions.
   Pour m'aider j'ai effectué des console.log des variables :

- le slice(0,-8) sert à supprimer les secondes et milliseccondes ainsi que le Z
- userinput : on récupère d'abord l'heure locale indiquée par l'utilisateur.
- dateInLocale : puis on utilise la fonction JS new Date() pour pouvoir utiliser des méthodes dessus
- clientOffset : connaître le décalage horaire du client par rapport à l'heure GMT, exprimé en minutes.
- inputInUTCMs : C'est la valeur numérique en millisecondes de l'heure UTC correspondant à l'heure indiquée par l'utilisateur. En effet : getTime renvoie la valeur numérique relative à UTC en milliseconde. Donc il faut retrancher le décalage horaire, converti en millisec (avec *60*1000)
- puis value est assignée à cette date, convertie en chaine de caractère au format ISO
- et on supprime les secondes et millisecondes et le Z via slice

9. Avantages selon vous à utiliser TailwindCSS :

- on peut lire directement dans le fichier les classes Tailwind utilisées, on n'a pas besoin d'étudier un fichier CSS annexe.
- des classes CSS sont prêtes et "préformatées" : on peut rapidement écrire du style une fois Tailwind maîtrisé"

10. Avantages selon vous à utiliser DaisyUI :
    C'est une bibliothèque de composants venant enrichir TailWind. Y sont fournis par exemple des boutons, des caroussels etc... Cela permet par import de fournir de jolis composants très rapidement .

=================================================

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
