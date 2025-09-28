/* 
1. Dans JavaScript, sélectionnez la div #app.
2. Ajoutez dynamiquement un titre (<h2>). 
*/
document.getElementById("app").innerHTML = "<h2>Voici mes images</h2>";

/*
3. Créez un conteneur (<div class="gallery">).
*/
const gallery = document.createElement("div");
gallery.setAttribute("class", "gallery");

/*
4. Ajoutez trois images dans ce conteneur en utilisant createElement et appendChild.
    - Les images doivent être choisies dans un tableau JavaScript contenant leurs URL.
    - Utilisez setAttribute pour définir src et alt.
*/
const images = [
    "https://www.photo-paysage.com/albums/userpics/10001/thumb_Crepuscule-lac-bourget-IMG_1964.jpeg",

    "https://media.istockphoto.com/id/1069539210/fr/photo/coucher-de-soleil-automne-fantastique-du-lac-hintersee.jpg?s=612x612&w=0&k=20&c=bEO1YiSMBcrphxE7zg27ljwjMNZS57KCXw3Z0wUiVtc=",

    "https://www.photo-paysage.com/albums/Paysages/Lac-riviere-cascade/thumb_croatie-lacs-plitvice-cascades-7.jpg"

];

images.forEach((url, index) => {
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.setAttribute("alt", "Image" + (index + 1));
    gallery.appendChild(img);
});

app.appendChild(gallery);

/*
1. Rendez chaque image cliquable grâce à addEventListener avec une fonction anonyme.
2. Lors d’un clic :
- Affichez l’adresse (src) de l’image avec getAttribute.
- Ajoutez un style CSS directement en JavaScript (par exemple, une bordure rouge).
3. Vérifiez que chaque clic fonctionne indépendamment sur toutes les images.
*/
const imgs = document.querySelectorAll(".gallery img");
imgs.forEach((img) => {
    img.addEventListener("click", function() {
        const src = this.getAttribute("src");
        alert("URL de l'image : " + src);
        this.style.border = "5px solid red";
    });
});

/*
1. Ajoutez dynamiquement un bouton "Lancer le diaporama".
2. Au clic sur ce bouton, démarrez un diaporama :
    - Toutes les 2 secondes (setInterval), une image différente doit être mise en avant (par exemple, avec une bordure bleue).
    - Le titre de la page doit être mis à jour avec innerHTML pour indiquer quelle image est affichée.
3. Utilisez firstChild et lastChild pour explorer les enfants de la div #app.
4. Utilisez getElementsByTagName pour récupérer et afficher dans la console le nombre de boutons de la page.
*/
const button = document.createElement("button");
button.innerHTML = "Lancer le diaporama";
document.getElementById("app").appendChild(button);

let currentIndex = 0;
let intervalId;

button.addEventListener("click", function() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(function() {
        imgs.forEach((img, index) => {
            img.style.border = index === currentIndex ? "5px solid blue" : "none";
        });
        document.querySelector("h2").innerHTML = "Image affichée : " + (currentIndex + 1);
        currentIndex = (currentIndex + 1) % imgs.length;
    }, 2000);
});



/* 
1. Ajouter une nouvelle image :
    - Créez un champ texte et un bouton "Ajouter une image".
    - Quand l’utilisateur saisit une URL et clique sur le bouton, une nouvelle image est insérée dans la galerie.
*/
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Entrez l'URL de l'image");

const addButton = document.createElement("button");
addButton.innerHTML = "Ajouter une image";

document.getElementById("app").appendChild(input);
document.getElementById("app").appendChild(addButton);

addButton.addEventListener("click", function() {
    const url = input.value;
    if (url) {
        const newImg = document.createElement("img");
        newImg.setAttribute("src", url);
        newImg.setAttribute("alt", "Nouvelle Image");
        newImg.addEventListener("click", function() {
            const src = this.getAttribute("src");
            alert("URL de l'image : " + src);
            this.style.border = "5px solid red";
        });
        gallery.appendChild(newImg);
        input.value = "";
    } 
    else {
        alert("Veuillez entrer une URL.");
    }
});

/*
2. Bouton Pause :
    - Ajoutez un bouton "Pause" qui permet d’arrêter le diaporama (clearInterval).
*/
const pauseButton = document.createElement("button");
pauseButton.innerHTML = "Pause";
document.getElementById("app").appendChild(pauseButton);

pauseButton.addEventListener("click", function() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

/* 
3. Gestion par classes CSS :
    - Créez une classe CSS .highlight qui applique une bordure.
    - Utilisez .classList.add() et .classList.toggle() en JavaScript pour gérer les styles au lieu de modifier directement .style.
*/






// Récupération et affichage du nombre de boutons dans la console
const buttons = document.getElementsByTagName("button");
console.log("Nombre de boutons sur la page :", buttons.length);

// Exploration des enfants de la div #app
const appDiv = document.getElementById("app");
console.log("Premier enfant de #app :", appDiv.firstChild);
console.log("Dernier enfant de #app :", appDiv.lastChild);

