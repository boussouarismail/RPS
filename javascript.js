


let roundN = 5; //round number
let scorP = 0;  //player scor
let scorC = 0;  //computer scor

function getComputerChoice (){
    let rand = (Math.random())*9;

    if (rand < 3) return "r";
    if (rand < 6) return "p";
    return "s";

}

function getPlayerChoice () {
    while (true){

        let player = prompt("choose your weapon :")[0].toLocaleLowerCase();
        if (player == "r") {
            return "r";
        }else if(player == "p"){
            return "p";
        }else if(player == "s"){
            return "s";
        }else if(player == "q" || player == "e" ){
            return "q";
        }else{
            alert("invalide choice choose exit or quit to end the game")
        }
    }
    
}

function playRound (humane,computer){
    /*const p1 = document.querySelector('#fight');
    p1.textContent = "";
    const p2 = document.querySelector('#round');
    p2.textContent = "";*/
    if (humane == computer){
        return("it's a tie");
    }else if (humane == "r" ){
        if (computer == "p"){
            return("you lose");
        }else{
            return("you win");
        }
        
    }else if (humane == "p" ){
        if (computer == "s"){
            return("you lose");
        }else{
            return("you win")
        }  

    }else if(humane == "s" ){
        if (computer == "r"){
            return("you lose");
        }else{
            return("you win")
        } 
    }  
}

function game (pl){

        let c = getComputerChoice();
        if ( pl == "q"){
            alert("game over");
        }else{
            fight(round(playRound(pl,c)));
    }
    console.log('round n°  '+roundN);
    console.log('computer score :  '+scorC);
    console.log('player score :  '+scorP);    
}

function round (roundResult){

    const p = document.querySelector('#round');
    p.textContent = roundResult;
    return roundResult;
}

function fight (round1) {
    const p1 = document.querySelector('#fight');
    if (roundN > 0){
        
      
        if (round1 == "it's a tie"){
            p1.textContent = "this round doesn't count its a tie" 
        }else {
            roundN--;
            if (round1 == "you win"){
                ++scorP;
                p1.textContent = 'you won this round stile have ' + (roundN) +' rounds to go';
            }else if (round1 == "you lose"){
                ++scorC;
                p1.textContent = 'you lost this round stile have ' + (roundN) +' rounds to go';
            }
            suddenDeath();
            
        }
        
    }else{
            p1.textContent = 'GAME OVER';
        if (scorP>scorC){
            p1.innerHTML += ' <br>congrats you win the fight';
            initialize ()
        }else if (scorP<scorC){
            p1.innerHTML += ' <br>you lost the fight!';
            initialize ()
        }else{
            initialize ()
        }
    }
}

// listener to the buttons***********************************
/*
const btn_r = document.querySelector('#r');
btn_r.addEventListener('click', game('r'));

const btn_p = document.querySelector('#p');
btn_p.onclick = () => game('p');

const btn_s = document.querySelector('#s');
btn_s.onclick = () => game('s');*/

function suddenDeath (){
    const p1 = document.querySelector('#fight');
    if (scorP == 3){
        p1.innerHTML = ' GAME OVER <br> no need to keep going you win';   
        initialize ()
    }else if (scorC == 3){
        p1.innerHTML = ' GAME OVER <br> no need to keep going you already lost'; 
        initialize ()
    }
}
 function initialize (){
    roundN = 5;
    scorC = 0;
    scorP = 0;
 }