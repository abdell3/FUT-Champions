// drag and drop


let drag = null;  


let p = document.querySelectorAll('.player');
let allCards = document.querySelectorAll('#card');
allCards.forEach(card => {
    card.addEventListener('dragstart', function (e) {
        drag = e.target;  
        e.dataTransfer.setData("text", drag.outerHTML);
    });
    card.addEventListener('dragend', function () {
        drag = null; 
    });
});


p.forEach(player => {
    player.addEventListener('dragover', function (e) {
        e.preventDefault();  
    let validDrop = false;
    const position = player.getAttribute("data-position"); 
    const draggedCardPosition = drag ? drag.querySelector(".position").innerText : "";

 
    if (position === draggedCardPosition) {
        validDrop = true;
    }

   
    player.style.border = validDrop ? "3px solid green" : "3px solid red";
});

player.addEventListener('dragleave', function () {
    
    player.style.border = "";
});

player.addEventListener('drop', function () {
   
    let validDrop = false;
    const position = player.getAttribute("data-position");  
    const draggedCardPosition = drag ? drag.querySelector(".position").innerText : "";

   
    if (position === draggedCardPosition) {
        validDrop = true;
    }

    
    if (validDrop) {
        let droppedCard = drag.cloneNode(true); 
        player.innerHTML = '';  
        player.appendChild(droppedCard); 
        drag.style.display = 'none';  
    } else {
        
        drag.style.display = '';  
    }

    
    player.style.border = "";
});
});


// le modal, l'ajout des joueurs, la forme de validation

let toggle = document.getElementById("toggle-modal-btn");
toggle.addEventListener("click", function(){
   var crud = document.getElementById("crud-modal");
   crud.style = "display:block;";
});

let closeBtn = document.getElementById("cancel-btn");
closeBtn.addEventListener("click", function(){
    const crud_modal = document.getElementById("crud-modal");
    crud_modal.style = "display: none";
});

let positionSelect = document.getElementById("position");

positionSelect.addEventListener('change', function () {
    const selectedPosition = positionSelect.value;

    // autre
    const paceField = document.getElementById("pace");
    const shootingField = document.getElementById("shooting");
    const passingField = document.getElementById("passing");
    const dribblingField = document.getElementById("dribbling");
    const defendingField = document.getElementById("defending");
    const physicalField = document.getElementById("physical");

    //  (GK)
    const divingField = document.getElementById("diving");
    const handlingField = document.getElementById("handling");
    const kickingField = document.getElementById("kicking");
    const reflexesField = document.getElementById("reflexes");
    const speedField = document.getElementById("speed");
    const positioningField = document.getElementById("positioning");

    if (selectedPosition === "GK") {
        // Désactiver les champs spécifiques aux joueurs
        paceField.disabled = true;
        shootingField.disabled = true;
        passingField.disabled = true;
        dribblingField.disabled = true;
        defendingField.disabled = true;
        physicalField.disabled = true;

        paceField.value = "";
        shootingField.value = "";
        passingField.value = "";
        dribblingField.value = "";
        defendingField.value = "";
        physicalField.value = "";

        paceField.placeholder = "Pace (Non applicable)";
        shootingField.placeholder = "Shooting (Non applicable)";
        passingField.placeholder = "Passing (Non applicable)";
        dribblingField.placeholder = "Dribbling (Non applicable)";
        defendingField.placeholder = "Defending (Non applicable)";
        physicalField.placeholder = "Physical (Non applicable)";

        // Activer les champs spécifiques au GK
        divingField.disabled = false;
        handlingField.disabled = false;
        kickingField.disabled = false;
        reflexesField.disabled = false;
        speedField.disabled = false;
        positioningField.disabled = false;

        divingField.placeholder = "Diving";
        handlingField.placeholder = "Handling";
        kickingField.placeholder = "Kicking";
        reflexesField.placeholder = "Reflexes";
        speedField.placeholder = "Speed";
        positioningField.placeholder = "Positioning";

    } else {
        // Activer les champs spécifiques aux joueurs (ST, RW, etc.)
        paceField.disabled = false;
        shootingField.disabled = false;
        passingField.disabled = false;
        dribblingField.disabled = false;
        defendingField.disabled = false;
        physicalField.disabled = false;

        paceField.value = "0";
        shootingField.value = "0";
        passingField.value = "0";
        dribblingField.value = "0";
        defendingField.value = "0";
        physicalField.value = "0";

        paceField.placeholder = "Pace";
        shootingField.placeholder = "Shooting";
        passingField.placeholder = "Passing";
        dribblingField.placeholder = "Dribbling";
        defendingField.placeholder = "Defending";
        physicalField.placeholder = "Physical";

        // Désactiver les champs spécifiques au GK
        divingField.disabled = true;
        handlingField.disabled = true;
        kickingField.disabled = true;
        reflexesField.disabled = true;
        speedField.disabled = true;
        positioningField.disabled = true;

        divingField.value = "";
        handlingField.value = "";
        kickingField.value = "";
        reflexesField.value = "";
        speedField.value = "";
        positioningField.value = "";

        divingField.placeholder = "Diving (Non applicable)";
        handlingField.placeholder = "Handling (Non applicable)";
        kickingField.placeholder = "Kicking (Non applicable)";
        reflexesField.placeholder = "Reflexes (Non applicable)";
        speedField.placeholder = "Speed (Non applicable)";
        positioningField.placeholder = "Positioning (Non applicable)";
    }
});

let ajouterJoueur = document.getElementById("ajouter-joueur");
ajouterJoueur.addEventListener("click", function () {
    const image_joueur = document.getElementById("image-joueur").files[0];
    let imageUrl = '';
    if (image_joueur) {
        imageUrl = URL.createObjectURL(image_joueur);
    }
    const club_logo = document.getElementById("logo").files[0];
    let logoUrl = '';
    if (club_logo) {
        logoUrl = URL.createObjectURL(club_logo);
    }
    const nom = document.getElementById("name").value;
    const sup = nom.split(' ').join('');
    const rating = document.getElementById("rating").value;
    const position = document.getElementById("position").value;
    const pace = document.getElementById("pace").value;
    const shooting = document.getElementById("shooting").value;
    const passing = document.getElementById("passing").value;
    const dribbling = document.getElementById("dribbling").value;
    const defending = document.getElementById("defending").value;
    const physical = document.getElementById("physical").value;
    const diving = document.getElementById("diving").value;
    const handling = document.getElementById("handling").value;
    const kicking = document.getElementById("kicking").value;
    const reflexes = document.getElementById("reflexes").value;
    const speed = document.getElementById("speed").value;
    const positioning = document.getElementById("positioning").value;

    // Validation de la position
    if (!['GK', 'LB', 'CB', 'RB', 'CM', 'LW', 'RW', 'ST'].includes(position)) {
        alert("Position invalide. Elle doit être l'une des suivantes : GK, LB, CB, RB, CM, LW, RW, ST.");
        return;
    }

    const stats = [positioning, kicking, diving, handling, speed, reflexes, rating, pace, shooting, passing, dribbling, defending, physical];
    if (position === "GK") {
        if (reflexes > 0 || speed > 0 || handling > 0 || diving > 0 || kicking > 0 || positioning > 0) {
            alert("Les statistiques de gardien de but doivent avoir uniquement des valeurs pour positif.");
            return;
        }
    } else {
        for (let stat of stats) {
            if (stat < 0 || stat > 99) {
                alert("Les statistiques doivent être comprises entre 0 et 99.");
                return;
            }
        }
    }

    const affichage = document.getElementById("card");
    if (position === "GK") {
        
        affichage.insertAdjacentHTML("beforeend", `
            <div draggable="true" id=${sup} class="card">
                <div class="first-section">
                    <div class="position-rating">
                        <h1 class="rating">${rating}</h1>
                        <h1 class="position">${position}</h1>
                        <img src=${logoUrl} alt="club">
                    </div>
                    <div class="image-name">
                        <img src=${imageUrl} alt="">
                        <h1 class="nom">${nom}</h1>
                    </div>
                </div>
                <div class="informations">
                    <div class="first">
                        <h1>${reflexes}REF</h1>
                        <h1>${speed}SPE</h1>
                        <h1>${handling}HAN</h1>
                    </div>
                    <div class="second">
                        <h1>${diving}DIV</h1>
                        <h1>${kicking}KIC</h1>
                        <h1>${positioning}POS</h1>
                    </div>
                </div>
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" onclick="deleteCard(${sup})">Delete</button>
            </div>
        `);
    } else {
        
        affichage.insertAdjacentHTML("beforeend", `
            <div draggable="true" id=${sup} class="card">
                <div class="first-section">
                    <div class="position-rating">
                        <h1 class="rating">${rating}</h1>
                        <h1 class="position">${position}</h1>
                        <img src=${logoUrl} alt="club">
                    </div>
                    <div class="image-name">
                        <img src=${imageUrl} alt="">
                        <h1 class="nom">${nom}</h1>
                    </div>
                </div>
                <div class="informations">
                    <div class="first">
                        <h1>${pace}PAC</h1>
                        <h1>${shooting}SHO</h1>
                        <h1>${passing}PAS</h1>
                    </div>
                    <div class="second">
                        <h1>${dribbling}DRI</h1>
                        <h1>${defending}DEF</h1>
                        <h1>${physical}PHY</h1>
                    </div>
                </div>
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" onclick="deleteCard(${sup})">Delete</button>
            </div>
        `);
    }

    document.getElementById("crud-modal").style = "display:none";
});


// fetch de data d'apres JSON

    fetch("../pages/players.json")
      .then((response) => response.json())
      .then((data) => displayPlayers(data.players))
      .catch(error => console.error('Error fetching player data:', error));
    
    function displayPlayers(info){
        const allPlayers = document.getElementById("card");
        const playerCard = document.getElementById("card");
        playerCard.setAttribute('draggable', 'true');
        allPlayers.innerHTML = '';
        info.forEach((item)=>{
          let stats = '';
          if (item.position === "GK") {
                stats = `<div draggable="true" id="joueur"  class ="card" >
                            <div class ="first-section">
                                <div class ="position-rating">
                                    <h1 class ="rating">${item.rating}</h1>
                                    <h1 class ="position">${item.position}</h1>
                                    <img src=${item.logo} alt="club">
                                </div>
                                <div class ="image-name">
                                    <img src=${item.photo} alt="">
                                    <h1 class="nom">${item.name}</h1>
                                </div>
                            </div>
                            <div class ="informations">
                               <div class ="first">
                                   <h1>${item.diving}DIV</h1>
                                   <h1>${item.handling}HAN</h1>
                                   <h1>${item.kicking}KIC</h1>
                               </div>
                               <div class ="second">
                                   <h1>${item.reflexes}REF</h1>
                                   <h1>${item.speed}SPD</h1>
                                   <h1>${item.positioning}POS</h1>
                               </div>
                            </div>
                         </div>
                        `;
                  }
                  else {
                    
                    stats = `<div draggable="true" id="joueur"  class ="card" >
                                <div class ="first-section">
                                   <div class ="position-rating">
                                       <h1 class ="rating">${item.rating}</h1>
                                       <h1 class ="position">${item.position}</h1>
                                       <img src=${item.logo} alt="club">
                                   </div>
                                   <div class ="image-name">
                                       <img src=${item.photo} alt="">
                                       <h1 class="nom">${item.name}</h1>
                                   </div>
                                </div>
                                <div class ="informations">
                                    <div class="first">
                                         <h1>${item.pace}PAC</h1>
                                         <h1>${item.shooting}SHO</h1>
                                         <h1>${item.passing}PAS</h1>
                                    </div>
                                    <div class="second">
                                         <h1>${item.dribbling}DRI</h1>
                                         <h1>${item.defending}DEF</h1>
                                         <h1>${item.physical}PHY</h1>
                                    </div>
                                </div>
                             </div> 
                        `;
                }
                const playerCard = `
            <div draggable="true" id="joueur" class="card transition-all hover:scale-105 flex flex-row">
                ${stats}
            </div>
             `;
             allPlayers.innerHTML += playerCard;
    })

}

// le changement de la position 

const formationSelect = document.getElementById('formation-select');
const play = document.querySelectorAll('.player');


function changeFormation(formation) {
  
  play.forEach(player => {
    player.style.gridArea = ''; 
  });

  if (formation === '4-3-3') {
    // Formation 4-3-3
    play[0].style.gridArea = '7 / 4 / 8 / 5';
    play[1].style.gridArea = '5 / 7 / 6 / 8';
    play[2].style.gridArea = '5 / 5 / 6 / 6';
    play[3].style.gridArea = '5 / 3 / 6 / 4';
    play[4].style.gridArea = '5 / 1 / 6 / 2';
    play[5].style.gridArea = '3 / 6 / 4 / 7';
    play[6].style.gridArea = '3 / 4 / 4 / 5';
    play[7].style.gridArea = '3 / 2 / 4 / 3';
    play[8].style.gridArea = '1 / 6 / 2 / 7';
    play[9].style.gridArea = '1 / 4 / 2 / 5';
    play[10].style.gridArea = '1 / 2 / 2 / 3'
  } else if (formation === '4-4-2') {
    // Formation 4-4-2
    play[0].style.gridArea = '7 / 4 / 8 / 5';
    play[1].style.gridArea = '5 / 7 / 6 / 8';
    play[2].style.gridArea = '5 / 5 / 6 / 6';
    play[3].style.gridArea = '5 / 3 / 6 / 4';
    play[4].style.gridArea = '5 / 1 / 6 / 2';
    play[5].style.gridArea = '3 / 1 / 4 / 2';
    play[6].style.gridArea = '3 / 3 / 4 / 4';
    play[7].style.gridArea = '3 / 5 / 4 / 6';
    play[8].style.gridArea = '3 / 7 / 4 / 8';
    play[9].style.gridArea = '1 / 5 / 2 / 6';
    play[10].style.gridArea = '1 / 3 / 2 / 4'
  } else if (formation === '3-5-2') {
    // Formation 3-5-2
    play[0].style.gridArea = '7 / 5 / 8 / 6';
    play[1].style.gridArea = '6 / 3 / 7 / 4';
    play[2].style.gridArea = '6 / 5 / 7 / 6';
    play[3].style.gridArea = '6 / 7 / 7 / 8';
    play[4].style.gridArea = '4 / 9 / 5 / 10';
    play[5].style.gridArea = '4 / 7 / 5 / 8';
    play[6].style.gridArea = '4 / 5 / 5 / 6';
    play[7].style.gridArea = '4 / 3 / 5 / 4';
    play[8].style.gridArea = '4 / 1 / 5 / 2';
    play[9].style.gridArea = '2 / 4 / 3 / 5';
    play[10].style.gridArea = '2 / 6 / 3 / 7';
  }
}


formationSelect.addEventListener('change', (e) => {
  changeFormation(e.target.value);
});

// delete du card ajouter
function deleteCard(card){
    card.remove();
}
