// drag and drop

let drag = null;
// let divs = Document.querySelectorAll('.parent1.div1 .parent1.div2 .parent1.div3 .parent1.div4 .parent1.div5 .parent1.div6 .parent1.div7 .parent1.div 8 .parent1.div9 .parent1.div10 .parent1.div10');
let p = document.querySelectorAll('.squad > player');
let plqyers = document.querySelectorAll(".card")
for(let ele of plqyers){
  ele.addEventListener('dragstart', function (e) {
    drag = e.target;
    // player.style.opacity = '0.5';
   
  })
  ele.addEventListener('dragover', function (e) {
    drag = player;
    player.style.opacity = '0.5';
    console.log('dragstart', drag);
    console.log(player);
    console.log('e.target');
  })

}
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


// fetch("../pages/players.json")
//       .then((response) => response.json())
//       .then((data) => displayPlayers(data.players));
    
//     function displayPlayers(info){
//         const allPlayers = document.getElementById("cards");
//         allPlayers.innerHTML = info.map((item)=>{
//                 return `<div>
//             <div class=" bg-orange-300 mb-3 ">
//                 <div class="flex">
//                 <div>
//                 <h6>${item.position}</h6>
//                 <h4>${item.rating}</h4>
//                 </div>
//                 <img src=${item.photo} alt="">
//                 </div>
//               <h6>${item.name}</h6>
//               <p>${item.nationality}</p> 
//               <div class="flex gap-1">
//               <img style="border-radius: 50%; width:20px; height:20px"  src=${item.flag} alt="">
//               <img style="border-radius: 50%; width:20px; height:20px"  src=${item.logo} alt="">
//               </div>

//         </div>
//     </div>`
    
//         })
//         .join( ``);
//     }


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
                                                <div class ="card first-section">
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
        allPlayers.innerHTML = info.map((item)=>{
                return `<div dragable="true" id="joueur"  class ="card" >
                            <div class ="first-section">
                            <div class ="position-rating">
                                <h1 class ="rating">${item.rating}</h1>
                                <h1 class ="position">${item.position}</h1>
                                <img src=${item.logo} alt="club">
                            </div>
                            <div class ="image-name">
                            <img src=${item.photo} alt="messi">
                            <h1 class="nom">${item.name}</h1>
                            </div>
                            </div>
                           <div class ="informations">
                              <div class ="first">
                                 <h1>${item.pace}PAC</h1>
                                 <h1>${item.shooting}SHO</h1>
                                 <h1>${item.passing}PAS</h1>
                              </div>
                           <div class ="second">
                                 <h1>${item.dribbling}DRI</h1>
                                 <h1>${item.defending}DEF</h1>
                                 <h1>${item.physical}PHY</h1>
                           </div>
                          </div>
                        </div>
                        `
    
        })
        .join( ``);
    }
//     function displayPlayers(test){
//     if (player.position == "GK") {
//         html +=   <div>

//             <span>${item.rating}+ player.rating + </span>
//             <span>${item.diving}+ player.diving+ </span>
//             <span>${item.handling}+ player.handling + </span>
//             <span>${item.kicking}+ player.kicking + </span>
//             <span>${item.reflexes}+ player.reflexes + </span>
//             <span>${item.speed}+ player.speed +</span>
//             <span>${item.positioning}+ player.positioning+</span>

//         </div>

//     } else {
//         html +=   <div>

//             <span>${item.pace}+ player.pace + </span>
//             <span>${item.shooting}+ player.shooting + </span>
//             <span>${item.passing}+ player.passing + </span>
//             <span>${item.dribbling}+ player.dribbling + </span>
//             <span>${item.defending}+ player.defending + </span>
//             <span>${item.physical}+ player.physical + </span>
//         </div>
//     }
// }


// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }

