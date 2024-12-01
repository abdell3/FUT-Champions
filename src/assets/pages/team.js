let drag = null;  // To store the dragged element

// Get all player positions in the squad and player cards
let p = document.querySelectorAll('.player');
let players = document.querySelectorAll(".card"); // These are the draggable player cards

// Make each card draggable
let allCards = document.querySelectorAll('.card');
allCards.forEach(card => {
    card.addEventListener('dragstart', function (e) {
        drag = e.target;  // Store the dragged element
        e.dataTransfer.setData("text", drag.outerHTML);
    });
    card.addEventListener('dragend', function () {
        drag = null;  // Reset when the drag ends
    });
});

// Allow each position on the squad to accept the dragged card
p.forEach(player => {
    player.addEventListener('dragover', function (e) {
        e.preventDefault();  // Allow dropping by preventing the default behavior
    // On vérifie si la position est valide pour le joueur
    let validDrop = false;
    const position = player.getAttribute("data-position"); // Récupérer la position de la case
    const draggedCardPosition = drag ? drag.querySelector(".position").innerText : "";

    // Si la position du joueur correspond à la position de la carte
    if (position === draggedCardPosition) {
        validDrop = true;
    }

    // Appliquer un style en fonction de la validité du drop
    if (validDrop) {
        player.style.border = "3px solid green"; // Zone valide, on la met en vert
    } else {
        player.style.border = "3px solid red";  // Zone invalide, on la met en rouge
    }
});

player.addEventListener('dragleave', function () {
    // Réinitialiser la couleur de la bordure quand le drag quitte la zone
    player.style.border = "";
});

player.addEventListener('drop', function () {
    // Quand un joueur dépose une carte
    let validDrop = false;
    const position = player.getAttribute("data-position");  // Position de la case
    const draggedCardPosition = drag ? drag.querySelector(".position").innerText : "";

    // Vérifier si la position du joueur est valide
    if (position === draggedCardPosition) {
        validDrop = true;
    }

    // Si le drop est valide, ajouter la carte à cette position
    if (validDrop) {
        let droppedCard = drag.cloneNode(true);  // Clone la carte déplacée
        player.innerHTML = '';  // Vide la case
        player.appendChild(droppedCard);  // Ajoute la carte à la position

        drag.style.display = 'none';  // Masque la carte dans le pool (optionnel)
    } else {
        // Si le drop est invalide, remettre la carte à sa place d'origine
        drag.style.display = '';  // Réafficher la carte originale si elle doit revenir
    }

    // Réinitialiser la couleur de la bordure à la fin
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
    crud_modal.style = "display: hidden";
});



let ajouterJoueur= document.getElementById("ajouter-joueur");
ajouterJoueur.addEventListener("click", function(){
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
    for (let stat of stats) {
      if (stat < 0 || stat > 99) {
          alert("Les statistiques doivent être comprises entre 0 et 99.");
          return;
      }
  }

  // Validation du nom du joueur (obligatoire)
  if (!nom) {
    alert("Le nom du joueur est obligatoire.");
    return;
}

    const blkdiv = document.getElementById("card");
    blkdiv.insertAdjacentHTML("beforeend", `
                                               <div dragable="true" id="joueur"  class ="card" >
                            <div class ="first-section">
                            <div class ="position-rating">
                                <h1 class ="rating">${rating}</h1>
                                <h1 class ="position">${position}</h1>
                                <img src=${club_logo} alt="club">
                            </div>
                            <div class ="image-name">
                            <img src=${image_joueur} alt="">
                            <h1 class="nom">${nom}</h1>
                            </div>
                            </div>
                           <div class ="informations">
                              <div class ="first">
                                 <h1>${pace}PAC</h1>
                                 <h1>${shooting}SHO</h1>
                                 <h1>${passing}PAS</h1>
                              </div>
                           <div class ="second">
                                 <h1>${dribbling}DRI</h1>
                                 <h1>${defending}DEF</h1>
                                 <h1>${physical}PHY</h1>
                           </div>
                          </div>
                        </div>
                                            `
        )
        
        document.getElementById("name").value;
        document.getElementById("rating").value;
        document.getElementById("position").value;
        document.getElementById("pace").value;
        document.getElementById("shooting").value;
        document.getElementById("passing").value;
        document.getElementById("dribbling").value;
        document.getElementById("defending").value;
        document.getElementById("physical").value;

});



    fetch("../pages/players.json")
      .then((response) => response.json())
      .then((data) => displayPlayers(data.players));
    
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


document.getElementById('formation-select').addEventListener('change', function() {
  const formation = this.value;

  const players = {
      'GK': document.querySelector('.player1'),
      'LB': document.querySelector('.player2'),
      'CB1': document.querySelector('.player3'),
      'CB2': document.querySelector('.player4'),
      'RB': document.querySelector('.player5'),
      'CM1': document.querySelector('.player6'),
      'CM2': document.querySelector('.player7'),
      'CM3': document.querySelector('.player8'),
      'LW': document.querySelector('.player9'),
      'ST': document.querySelector('.player10'),
      'RW': document.querySelector('.player11')
  };

  // Réinitialiser les positions des joueurs
  Object.values(players).forEach(player => {
      player.style.gridArea = '';
  });

  if (formation === '433') {
      players['GK'].style.gridArea = '7/4/8/5';
      players['LB'].style.gridArea = '6/1/7/2';
      players['CB1'].style.gridArea = '6/3/7/4';
      players['CB2'].style.gridArea = '6/5/7/6';
      players['RB'].style.gridArea = '6/7/7/8';
      players['CM1'].style.gridArea = '4/2/5/3';
      players['CM2'].style.gridArea = '4/4/5/5';
      players['CM3'].style.gridArea = '4/6/5/7';
      players['LW'].style.gridArea = '2/2/3/3';
      players['ST'].style.gridArea = '2/4/3/5';
      players['RW'].style.gridArea = '2/6/3/7';
  } else if (formation === '442') {
      players['GK'].style.gridArea = '7 / 4 / 8 / 5';
      players['LB'].style.gridArea = '6 / 1 / 7 / 2';
      players['CB1'].style.gridArea = '6 / 3 / 7 / 4';
      players['CB2'].style.gridArea = '6 / 5 / 7 / 6';
      players['RB'].style.gridArea = '6 / 7 / 7 / 8';
      players['CM1'].style.gridArea = '4 / 7 / 5 / 8';
      players['CM2'].style.gridArea = '4 / 5 / 5 / 6';
      players['CM3'].style.gridArea = '4 / 3 / 5 / 4';
      players['LW'].style.gridArea = '4 / 1 / 5 / 2';
      players['ST'].style.gridArea = '2 / 3 / 3 / 4';
      players['RW'].style.gridArea = '2 / 5 / 3 / 6';
  } else if (formation === '451') {
      players['GK'].style.gridArea = '7/4';
      players['LB'].style.gridArea = '6/1';
      players['CB1'].style.gridArea = '6/2';
      players['CB2'].style.gridArea = '6/3';
      players['RB'].style.gridArea = '6/5';
      players['CM1'].style.gridArea = '4/2';
      players['CM2'].style.gridArea = '4/3';
      players['CM3'].style.gridArea = '4/4';
      players['CM4'].style.gridArea = '3/2';
      players['ST'].style.gridArea = '2/3';
      players['RW'].style.gridArea = '2/4';
  }
});

