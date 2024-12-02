let drag = null;  


let p = document.querySelectorAll('.player');
let players = document.querySelectorAll(".card"); 


let allCards = document.querySelectorAll('.card');
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
// function dragItem() {
//   let players = document.querySelectorAll('.joueur');
//   players.forEach(player => {

//     player.addEventListener('dragstart', function (e) {
//       drag = player;
//       player.style.opacity = '0.5';
//       console.log('dragstart', drag);
//       console.log(player);
//       console.log('e.target');
//     })

//     player.addEventListener('dragend', function (e) {
//       drag = null;
//       player.style.opacity = '1';
//       console.log('dragend', player);
//       console.log(player);
//       console.log('e.target');
//     })
//     p.forEach(player => {
//       player.addEventListener('dragover', function (e) {
//         e.preventDefault();

//         console.log('dragover');
//         // this.style.background = '#090';
//       })

//       player.addEventListener('dragleave', function () {
//         // this.style.background = '##333';
//       })

//       player.addEventListener('drop', function () {
//         console.log('drop', this)
//         drag.className = 'joueur';
//         this.appendChild(drag);
//       })


//     })

//   })

// };



// let players = document.querySelectorAll('.player');
// let drag=null;



// function dragItem(){
//     let items=document.querySelectorAll('.player');
//     items.forEach(player=>{
//         player.addEventListener('dragstart',function(){
//             drag = player;
//             player.style.opacity = '0.5';
//         })

//         player.addEventListener('dragend',function(){
//             drag = null;
//             player.style.opacity = '1';
//         })

//         players.forEach(player=>{
//             player.addEventListener('dragover', function(){
//                 console.log('drag over');
//             })
//             player.addEventListener('drop', function(){
//                 player.append(drag);
//             })
    
//         })
        
        


//       })
// }
// let newX = 0, newY = 0, startX = 0, startY = 0 ;

// const card = document.getElementById('card');

// card.addEventListener('mousedown', mouseDown)

// function mouseDown(e){
//     startX = e.joueurX;
//     startY = e.joueurY;

//     document.addEventListener('mousemove', mouseMove)
//     document.addEventListener('mouseup', mouseUp)
// }

// function mouseMove(e){
//     newX = startX - e.joueurX;
//     newY = startY - e.joueurY;

//     startX = e.joueurX;
//     startY = e.joueurY;

//     card.style.top = (card.offsetTop - newY) + 'px';
//     card.style.left = (card.offsetLeft - newX) + 'px';

//     console.log({newX, newY});
//     console.log({startX, startY});

// }

// function mouseUp(e){
//     document.removeEventListener('mousemove', mouseMove);
// }

// le modal, l'ajout des joueurs, la forme de validation

let toggle = document.getElementById("toggle-modal-btn");
toggle.addEventListener("click", function(){
   var crud = document.getElementById("crud-modal");
   crud.style = "display:block;"
});

var cont = 3;
var cint = 0;

let closeBtn = document.getElementById("cancel-btn");
closeBtn.addEventListener("click", function(){
    const crud_modal = document.getElementById("crud-modal");
    crud_modal.style = "display: none";
});

// Récupère le champ de sélection de position dans le modal
let positionSelect = document.getElementById("position");

// Ajoute un événement pour quand la position change
positionSelect.addEventListener('change', function () {
    const selectedPosition = positionSelect.value;

    // Récupère les champs de statistiques du modal
    const paceField = document.getElementById("pace");
    const shootingField = document.getElementById("shooting");
    const passingField = document.getElementById("passing");
    const dribblingField = document.getElementById("dribbling");
    const defendingField = document.getElementById("defending");
    const physicalField = document.getElementById("physical");

    // Vérifie si la position est "GK" (Gardien de but)
    if (selectedPosition === "GK") {
        // Si la position est GK, remplace les statistiques par celles spécifiques aux gardiens
        paceField.disabled = true;
        shootingField.disabled = true;
        passingField.disabled = true;
        dribblingField.disabled = true;
        defendingField.disabled = false;  // Gardien a des statistiques de défense spécifiques
        physicalField.disabled = false;  // Gardien a des statistiques physiques

        // Remplacer les valeurs par défaut par celles des gardiens
        paceField.value = "";  // Laisser vide car non applicable au GK
        shootingField.value = "";  // Laisser vide
        passingField.value = "";  // Laisser vide
        dribblingField.value = "";  // Laisser vide
        defendingField.value = "";  // Laisser vide ou valeur par défaut
        physicalField.value = "";  // Laisser vide ou valeur par défaut

        // Modifier les placeholders des champs
        paceField.placeholder = "Pace (Non applicable)";
        shootingField.placeholder = "Shooting (Non applicable)";
        passingField.placeholder = "Passing (Non applicable)";
        dribblingField.placeholder = "Dribbling (Non applicable)";
        defendingField.placeholder = "Defending (GK)";
        physicalField.placeholder = "Physical (GK)";
    } else {
        // Si la position est autre que GK, rétablit les statistiques normales pour les joueurs de champ
        paceField.disabled = false;
        shootingField.disabled = false;
        passingField.disabled = false;
        dribblingField.disabled = false;
        defendingField.disabled = false;
        physicalField.disabled = false;

        // Rétablir les valeurs par défaut pour les joueurs de champ
        paceField.value = "0";  // Remet à 0 si nécessaire
        shootingField.value = "0";  // Remet à 0 si nécessaire
        passingField.value = "0";  // Remet à 0 si nécessaire
        dribblingField.value = "0";  // Remet à 0 si nécessaire
        defendingField.value = "0";  // Remet à 0 si nécessaire
        physicalField.value = "0";  // Remet à 0 si nécessaire

        // Rétablir les placeholders des joueurs de champ
        paceField.placeholder = "Pace";
        shootingField.placeholder = "Shooting";
        passingField.placeholder = "Passing";
        dribblingField.placeholder = "Dribbling";
        defendingField.placeholder = "Defending";
        physicalField.placeholder = "Physical";
    }
});

// Ajout de la carte avec validation des données
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
    const rating = document.getElementById("rating").value;
    const position = document.getElementById("position").value;
    const pace = document.getElementById("pace").value;
    const shooting = document.getElementById("shooting").value;
    const passing = document.getElementById("passing").value;
    const dribbling = document.getElementById("dribbling").value;
    const defending = document.getElementById("defending").value;
    const physical = document.getElementById("physical").value;

    // VALIDATION DES DONNEES
    if (!['GK', 'LB', 'CB', 'RB', 'CM', 'LW', 'RW', 'ST'].includes(position)) {
        alert("Position invalide. Elle doit être l'une des suivantes : GK, LB, CB, RB, CM, LW, RW, ST.");
        return;
    }

    // Validation des statistiques (0 <= stat <= 99)
    const stats = [rating, pace, shooting, passing, dribbling, defending, physical];
    if (position === "GK") {
        // Validation pour le gardien de but
        if (pace > 0 || shooting > 0 || passing > 0 || dribbling > 0) {
            alert("Les statistiques de gardien de but doivent avoir uniquement des valeurs pour 'Defending' et 'Physical'.");
            return;
        }
    } else {
        // Validation classique pour les joueurs de champ
        for (let stat of stats) {
            if (stat < 0 || stat > 99) {
                alert("Les statistiques doivent être comprises entre 0 et 99.");
                return;
            }
        }
    }

    // Ajouter la carte avec les données
    const blkdiv = document.getElementById("card");
    blkdiv.insertAdjacentHTML("beforeend", `
        <div draggable="true" id="joueur" class="card">
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
        </div>
    `);

    // Réinitialiser les valeurs des champs après l'ajout
    document.getElementById("name").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("position").value = "";
    document.getElementById("pace").value = "";
    document.getElementById("shooting").value = "";
    document.getElementById("passing").value = "";
    document.getElementById("dribbling").value = "";
    document.getElementById("defending").value = "";
    document.getElementById("physical").value = "";
});




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



const formationSelect = document.getElementById('formation-select');
const play = document.querySelectorAll('.player');


function changeFormation(formation) {
  
  play.forEach(player => {
    player.style.gridArea = ''; 
  });

  if (formation === '4-3-3') {
    // Formation 4-3-3
    play[0].style.gridArea = '7 / 4 / 8 / 5';  // GK
    play[1].style.gridArea = '5 / 7 / 6 / 8';  // RB
    play[2].style.gridArea = '5 / 5 / 6 / 6';  // CB
    play[3].style.gridArea = '5 / 3 / 6 / 4';  // CB
    play[4].style.gridArea = '5 / 1 / 6 / 2';  // RB
    play[5].style.gridArea = '3 / 6 / 4 / 7';  // CM
    play[6].style.gridArea = '3 / 4 / 4 / 5';  // CM
    play[7].style.gridArea = '3 / 2 / 4 / 3';  // CM
    play[8].style.gridArea = '1 / 6 / 2 / 7';  // LW
    play[9].style.gridArea = '1 / 4 / 2 / 5';  // ST
    play[10].style.gridArea = '1 / 2 / 2 / 3'; // RW
  } else if (formation === '4-4-2') {
    // Formation 4-4-2
    play[0].style.gridArea = '7 / 4 / 8 / 5';  // GK
    play[1].style.gridArea = '5 / 7 / 6 / 8';  // LB
    play[2].style.gridArea = '5 / 5 / 6 / 6';  // CB
    play[3].style.gridArea = '5 / 3 / 6 / 4';  // CB
    play[4].style.gridArea = '5 / 1 / 6 / 2';  // RB
    play[5].style.gridArea = '3 / 1 / 4 / 2';  // LM
    play[6].style.gridArea = '3 / 3 / 4 / 4';  // CM
    play[7].style.gridArea = '3 / 5 / 4 / 6';  // RM
    play[8].style.gridArea = '3 / 7 / 4 / 8';  // LF
    play[9].style.gridArea = '1 / 5 / 2 / 6';  // RF
    play[10].style.gridArea = '1 / 3 / 2 / 4'; // st
  } else if (formation === '3-5-2') {
    // Formation 3-5-2
    play[0].style.gridArea = '7 / 5 / 8 / 6';  // GK
    play[1].style.gridArea = '6 / 3 / 7 / 4';  // CB
    play[2].style.gridArea = '6 / 5 / 7 / 6';  // CB
    play[3].style.gridArea = '6 / 7 / 7 / 8';  // CB
    play[4].style.gridArea = '4 / 9 / 5 / 10';  // LM
    play[5].style.gridArea = '4 / 7 / 5 / 8';  // CM
    play[6].style.gridArea = '4 / 5 / 5 / 6';  // RM
    play[7].style.gridArea = '4 / 3 / 5 / 4';  // LF
    play[8].style.gridArea = '4 / 1 / 5 / 2';  // RF
    play[9].style.gridArea = '2 / 4 / 3 / 5';  // ST
    play[10].style.gridArea = '2 / 6 / 3 / 7';
  }
}


formationSelect.addEventListener('change', (e) => {
  changeFormation(e.target.value);
});
