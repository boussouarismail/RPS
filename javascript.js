function getComputerchoice (){

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
    if (humane == computer){
        alert("it's a tie");
    }else if (humane == "r" ){
        if (computer == "p"){
            alert("you lose");
        }else{
            alert("you win");
        }
        
    }else if (humane == "p" ){
        if (computer == "s"){
            alert("you lose");
        }else{
            alert("you win")
        }  

    }else if(humane == "s" ){
        if (computer == "r"){
            alert("you lose");
        }else{
            alert("you win")
        } 
    }  
}

function game (){
    while(true){
        let c = getComputerchoice();
        let p = getPlayerChoice();
        if ( p == "q"){
            alert("game over");
            break;
        }else{
            playRound(p,c);
        }
    }
    

}