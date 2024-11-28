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
   crud.style = "display:block;"; 
});

var cont = 3;
var cint = 0;

let closeBtn = document.getElementById("cancel-btn");
closeBtn.addEventListener("click", function(){
    const crud_modal = document.getElementById("crud-modal");
    crud_modal.style = "display: hidden";
});



let ajouterJoueur= document.getElementById("ajouter-serv");
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
    const blkdiv = document.getElementById("card");
    blkdiv.insertAdjacentHTML("beforeend", `<div id="card" class ="card">
                            <div class ="first-section">
                            <div class ="position-rating">
                                <h1 class ="rating">${rating}</h1>
                                <h1 class ="position">${position}</h1>
                                <img src=${club_logo} alt="club">
                            </div>
                            <div class ="image-name">
                            <img src=${image_joueur} alt="messi">
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
                        </div>`
        )
        
        document.getElementById("name").value = " "
        document.getElementById("price").value = " "
        document.getElementById("description").value = " "
        document.getElementById("category").value = "Selectioner la categorie"

});



    fetch("../pages/players.json")
      .then((response) => response.json())
      .then((data) => displayPlayers(data.players));
    
    function displayPlayers(info){
        const allPlayers = document.getElementById("card");
        allPlayers.innerHTML = info.map((item)=>{
                return `<div id="card" class ="card">
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