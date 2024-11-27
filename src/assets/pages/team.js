fetch("players.json")
      .then((response) => response.json())
      .then((data) => displayPlayers(data.players));
    
    function displayPlayers(info){
        const allPlayers = document.getElementById("players-container");
        allPlayers.innerHTML = info.map((item)=>{
            return `<div class="players-contain" >

            <div  class ="player-contain1">
                <div class="d-flex flex-">
                <div >
                <h6>${item.position}</h6>
                <h4>${item.rating}</h4>
                </div>
                <img src=${item.photo} alt="">
                </div>
              <h6>${item.name}</h6>

        if (player.position == "GK") {
            html +=   <div>

                <span>${item.rating}+ player.rating + </span>
                <span>${item.diving}+ player.diving+ </span>
                <span>${item.handling}+ player.handling + </span>
                <span>${item.kicking}+ player.kicking + </span>
                <span>${item.reflexes}+ player.reflexes + </span>
                <span>${item.speed}+ player.speed +</span>
                <span>${item.positioning}+ player.positioning+</span>

            </div>

        } else {
            html +=   <div>

                <span>${item.pace}+ player.pace + </span>
                <span>${item.shooting}+ player.shooting + </span>
                <span>${item.passing}+ player.passing + </span>
                <span>${item.dribbling}+ player.dribbling + </span>
                <span>${item.defending}+ player.defending + </span>
                <span>${item.physical}+ player.physical + </span>
            </div>
        }

        html +=

              <p>${item.nationality}+ player.nationality + </p> 
              <div style="padding-bottom: 30px;">
              <img style="border-radius: 50%; width:20px; height:20px"  src=${item.flag} alt="">
              <img style="border-radius: 50%; width:20px; height:20px"  src=${item.logo} alt="">
              </div>

        </div>
    </div>`
    
        })
        .join( ``);
    }