<div class="flex flex-col align-center justify-center my-10">

    <h1 class="text-4xl text-center w-full my-10">TEST TECHNIQUE MILLION VICTORIES</h1>
    <h2 class="text-2xl text-center w-full my-10">Fullstack Dev Aout 2022</h2>

    <div class="prose m-auto">

        <h3>Objectif de ce test technique</h3>
        <p>Vous l'avez probablement relevé dans l'offre d'emploi, nous ne cherchons pas un grand débutant en développement web.</p>
        <p>En premier lieu, nous cherchons à identifier par ce test que vous avez quelques compétences de base:</p>
        <ul>
            <li>Vous savez vous repérer dans une codebase</li>
            <li>Vous êtes à l'aise avec l'utilisation du HTML et du CSS</li>
            <li>Vous connaissez le Javascript ES6</li>
            <li>Vous êtes à l'aise avec l'arithmétique</li>
            <li>Vous savez utiliser une API REST et sa réponse en JSON</li>
        </ul>
        <p>Le test utilise des éléments probablement nouveaux pour vous. La librairie <code>Svelte</code> pour le templating front, et <code>TailwindCSS</code> ainsi que <code>DaisyUI</code> pour la partie style.</p>
        <p>Avoir une expérience avec ces technologies ne vous avancerait que peu. Et il n'est pas nécessaire d'aller les explorer avant non plus. Le test est réalisé de sorte que vous ayez déjà dans le code fourni suffisamment d'informations pour aller au bout. Il n'y a rien de très spécifique aux librairies qui vous est demandé.</p>

        <h3>Mission</h3>
        <p>Nous souhaitons réaliser une interface permettant aux équipes de gamedesign de modifier des paramètres d'un serveur de jeu.</p>
        <p>Vous intégrez la team <em>tools</em> et vous devez dans un premier temps faire que les settings s'affichent puis mettre en place les champs permettant de modifier les valeurs. Pour la publication de ces modifications sur les serveurs, ce sera pour bien plus tard.</p>
        <p>L'équipe <em>backend</em> vous a préparé une <a href="#backendapi"><code>API REST</code></a> vous permettant de récupérer les données, et pour vous aider, votre <em>lead dev</em> vous a kickstarté le projet, et a écrit quelques composants de démonstration, parce que <em>Svelte</em>, c'est encore nouveau pour vous.</p>

        <h3>Code source</h3>
        <p>Pour obtenir le projet de démarrage avec Git</p>
        <div class="mockup-code">
            <pre data-prefix=">"><code>git clone [REPO]</code></pre>
        </div>

        <p>Pour démarrer le projet</p>
        <div class="mockup-code">
            <pre data-prefix=">"><code>npm i</code></pre>
            <pre data-prefix=">"><code>npm run dev</code></pre>
        </div>
        <p>L'application se lance par défaut sur le port <code>3000</code>.</p>
        <h4>Navigation</h4>
        <p><code>SvelteKit</code>, qui est le framework applicatif du projet, utilise un router basé sur l'arborescende de fichiers (<em>file based routing</em>) dans le dossier <code>src/routes</code>.</p>
        <p>Exemples: </p>
        <ul>
            <li>Le fichier <code>src/routes/foo/bar/hello.svelte</code> sera accessible sur l'URL <code>/foo/bar/hello/</code></li>
            <li>Le fichier <code>src/routes/foo/bar/index.svelte</code> sera accessible sur l'URL <code>/foo/bar/</code></li>
            <li>Le fichier <code>src/routes/foo/index.js</code> sera accessible sur l'URL <code>/foo/</code></li>
        </ul>
        <p>Les fichiers d'extension <code>.svelte</code> dans le dossier <code>src/routes</code> représentent des pages de l'application.</p>
        <p>Les fichiers d'extension <code>.js</code> sont des endpoints permettant de récupérer de la data. Si il existe un fichier Svelte et un JS se résolvant sur la même URL, les data retournées par le fichier JS sont injectées directement dans la page Svelte (l'objet <code>body</code> est appliqué sur les <code>props</code> de la page, les variables précédées de <code>export</code>)</p>

        <h3>A réaliser</h3>
        <ul>
            <li>
                <h4>Ecrire le contenu de la function <code>handleChange</code> du composant <code>ValueInteger</code></h4>
                <p>De sorte que les comportements suivants s'appliquent:</p>
                <ul>
                    <li>Si la valeur saisie est supérieure au champs <code>max</code>, quand il est présent, la valeur doit devenir le maximum</li>
                    <li>Si la valeur saisie est inférieure au champs <code>min</code>, quand il est présent, la valeur doit devenir le minimum</li>
                </ul>
            </li>
            <li>
               <h4>Terminer le composant <code>ValueDecimal</code> et sa function <code>handleChange</code></h4>
               <ul>
                   <li>Il doit afficher un champs de saisie permettant d'afficher et de modifier le nombre décimal reçu en donnée entrante</li>
                   <li>Si la valeur saisie est supérieure au champs <code>max</code>, quand il est présent, la valeur doit devenir le maximum</li>
                   <li>Si la valeur saisie est inférieure au champs <code>min</code>, quand il est présent, la valeur doit devenir le minimum</li>
                   <li>Si la valeur saisie est d'une précision (nombre de chiffres après la virgule) supérieure à la valeur du champs <code>precision</code>, quand il est présent, la valeur sera tronquée à la précision donnée</li>
               </ul>
            </li>
            <li>
                <h4>Permettre l'affichage des valeurs <code>boolean</code></h4>
                <p>Faire les modifications nécessaires dans le projet pour permettre d'afficher une valeur avec <code>"type": "boolean"</code>, et créer le composant qui doit</p>
                <ul>
                    <li>Afficher un champs de saisie permettant d'afficher et de modifier le boolean reçu en donnée entrante</li>
                </ul>
            </li>
            <li>
                <h4>Terminer le composant <code>ValueTime</code></h4>
                <ul>
                    <li>Il doit afficher un champs de saisie permettant d'afficher et de modifier l'heure reçue en donnée entrante</li>
                </ul>
            </li>
            <li>Faire les modifications nécessaires pour le champs <code>desc</code> d'un noeud soit affiché, s'il est présent</li>
            <li>Pouvez vous expliquer ce que l'on cherche à faire dans la fonction <code>handleChange</code> du composant <code>ValueDateTime</code>?</li>
            <li>Quels sont selon vous les avantages à utiliser <code>TailwindCSS</code> et <code>DaisyUI</code>?</li>
        </ul>

        <h3>Rendu</h3>
        <p>A réception de l'email vous ayant donné le lien du test, vous aurez 48h, horodatage de l'email faisant foi, pour retourner:</p>
        <ul>
            <li>Un lien vers un repository git public sur la plateforme de votre choix contenant votre réalisation</li>
            <li>
                Un document texte au format libre avec un suivi de votre réflexion, des questions que vous vous êtes posées lors de l'exercice, et vos avancées
            </li>
        </ul>
        <h4>Pourquoi ce deuxième point?</h4>
        <p>Parce que votre façon d'aborder un problème, une situation inconnue, est plus intéressant à évaluer qu'une réalisation technique.</p>
        <p>Même si vous n'avez pas complètement terminé le test, envoyez votre résultat.</p>
        <p>N'hésitez pas à vous amusez un peu avec le style si vous le voulez.</p>

        <h3 id="backendapi">L'API de back-end</h3>
        <p>URL: <code>https://fullstacktest0822-gdasbv46yq-od.a.run.app</code></p>
        <h4>Format des données</h4>
        <p>Les données reçues peuvent être vues comme un <em>arbre</em>, chaque champs de haut niveau (sauf <code>desc</code>) représente <em>une nouvelle branche</em>. Le champs <code>type</code> nous indique que nous atteignons la fin d'une branche, avec au bout une <code>value</code>.</p>
        <p>La récursivité est déjà gérée dans votre front-end, vous n'avez qu'à vous souciez d'afficher correctement les valeurs en bout de branche.</p>
        <p>Les deux seuls champs obligatoires pour représenter une valeur sont <code>type</code> et <code>value</code>, les autres champs servant à indiquer des contraintes optionnelles.</p>

        <h4>Routes:</h4>
        <ul>
            <li>
                <code>/settings</code> => <span>Jeu complet de données de test</span>
            </li>
            <li>
                <code>/settings/:typeToTest</code> => <span>Donnée de test de type <span class="italic">typeToTest</span> (1 route pour chaque type)</span>
            </li>
        </ul>

        <h3>Exemple de l'application en version finale</h3>
        <a class="btn btn-primary" href="https://fullstacktest-corrige-gdasbv46yq-uc.a.run.app" target="_blank">Visit</a>

        <h3>Liens utiles</h3>
        <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">Doc MDN sur la balise input</a></li>
        </ul>
    </div>

</div>
