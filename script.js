//récuperer le formulaire
const form = document.getElementById("form");

// récuperer le message d'erreur
const errorMessage = document.getElementById ("error-message");

//récuperer les champs du formulaire
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");

//Ajouter un évènement d'écoute
form.addEventListener ('submit', (e) => {

    //cacher le message d'erreur
    errorMessage.style.display ='none';

    //afficher le message d'erreur si un ou plusieurs champs vides
   
    if (firstName.value === "" || lastName.value === "" || message.value === "") {
    showError();
    }
    else {
    createComment();
    }
    e.preventDefault();
    });

//message d'erreur
function showError(){
errorMessage.style.display ='block';
}


//Création du nouveau commentaire
function createComment() {

    //récuperer la liste des commentaires
    let commentList = document.getElementById ("comment-list");
   
    //Récuperation des valeurs
    newTextH3 = document.createTextNode(firstName.value + ' ' + lastName.value);
    newTextP = document.createTextNode(message.value);


    //Création des nouveaux éléments
    const newDiv1 = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newDiv3 = document.createElement('div');
    const newH3 = document.createElement('h3');
    const newP = document.createElement('p');

    //Récuperation des classes CSS
    newDiv1.classList.add("flex","space-x-4","text-sm","text-gray-500");
    newDiv2.classList.add("flex-1","py-10");
    newDiv3.classList.add("prose","prose-sm", "mt-4", "max-w-none","text-gray-500");
    newH3.classList.add("font-medium","text-gray-900");

    //Organisation des nouveaux éléments
    newDiv1.appendChild(newDiv2);
    newDiv2.appendChild(newH3);
    newDiv2.appendChild(newDiv3);
    newDiv3.appendChild(newP);
    newH3.appendChild(newTextH3);
    newP.appendChild(newTextP);

    //Je rajoute mmon nouveau commentaire au HTML
    commentList.appendChild(newDiv1);

    //vider le formulaire
    document.getElementById("form").reset();
}

