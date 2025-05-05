document.body.style.backgroundColor = "MediumAquaMarine";

document.getElementById("intro_text").style.backgroundColor = "MistyRose";
document.getElementById("intro_text").style.textAlign = "center";

document.getElementById("comment").style.textAlign = "center";

document.getElementById("result").style.textAlign = "center";
document.getElementById("result").style.fontSize = "49px";

document.getElementById("intro_text").style.padding = "20px";
document.getElementById("toss").style.padding = "20px";
document.getElementById("comment").style.padding = "20px";
document.getElementById("result").style.padding = "20px";

let player_score = 0;
let machine_score = 0;

function randint()
{
    return Math.floor(Math.random()*7);
}


let toss_val = Math.floor(Math.random()*2);
if(toss_val == 1)
{
    document.getElementById("toss").innerHTML = "You are batting first";
    machine_score = -1;
    document.getElementById("comment").innerHTML = "Game yet to start<br>" + "Your score = " + player_score;
}
else
{
    document.getElementById("toss").innerHTML = "Machine is batting first";
    player_score = -1;
    document.getElementById("comment").innerHTML = "Game yet to start<br>" + "Machine score = " + machine_score;
}

document.getElementById("scoring").style.display = "block"

function game()
{
    
    const form = document.getElementById("scoring");
    let current_player = +form.querySelector('input[name="score"]:checked').value;
    

    const current_machine = randint();
    if(toss_val == 1 && machine_score == -1) //player is batting 1st
        {
            if(current_machine == current_player)
                {
                    document.getElementById("comment").innerHTML = 
                    "You chose "+current_player+"<br>"+
                    "Machine chose "+current_machine+"<br>"+
                    "You got out :(<br>"+
                    "Your score : "+player_score+"<br>"+
                    "Machine needs "+(player_score+1)+" to win";
                    machine_score = 0;

                    document.getElementById("toss").innerHTML = "Machine needs "+(player_score+1)+" to win";
                }
            else
                {
                    if(current_player == 0)
                        {
                            player_score += current_machine;
                        }
                    else{player_score+=current_player;}

                    document.getElementById("comment").innerHTML = 
                    "You chose "+current_player+"<br>"+
                    "Machine chose "+current_machine+"<br>"+
                    "You scored : "+player_score+"<br>";
                }
        }
    else if(toss_val == 1 && machine_score != -1) //machine is chasing
        {
            if(current_machine == current_player)
                {
                    document.getElementById("comment").innerHTML = 
                    "You chose "+current_player+"<br>"+
                    "Machine chose "+current_machine+"<br>"+
                    "Machine got out :D<br>"+
                    "Your score : "+player_score+"<br>"+
                    "Machine score : "+machine_score;
                    machine_score = 0;

                    if(player_score == machine_score)
                        {
                            document.getElementById("result").innerHTML = 
                            "IT'S A DRAW!!!<br>"+
                            "Refresh to play again!<br>Bye human!<br>";
                            document.getElementById("scoring").style.display = "none";
                            document.getElementById("toss").style.display = "none";
                        }
                    else
                        {
                            document.getElementById("result").innerHTML = 
                            "Congratulations, you won by "+ (player_score-machine_score) +" runs! :D<br>"+
                            "Refresh to play again!<br>Bye human!<br>";
                            document.getElementById("scoring").style.display = "none";
                            document.getElementById("toss").style.display = "none";
                        }
                    
                }
            else
                {
                    if(current_machine == 0)
                        {
                            machine_score += current_player;
                        }
                    else{machine_score+=current_machine;}

                    document.getElementById("comment").innerHTML = 
                    "You chose "+current_player+"<br>"+
                    "Machine chose "+current_machine+"<br>"+
                    "Your score : "+player_score+"<br>"+
                    "Machine score : "+machine_score+"<br>";

                    if(machine_score > player_score)
                        {
                            document.getElementById("result").innerHTML = 
                            "Unfortunately, machine won! :(<br>"+
                            "Refresh to play again!<br>Bye human!<br>";
                            document.getElementById("scoring").style.display = "none";
                            document.getElementById("toss").style.display = "none";
                        }
                }
        }
    else if(toss_val == 0 && player_score == -1) //machine is batting 1st
        {
            if(current_machine == current_player)
                {
                    document.getElementById("comment").innerHTML = 
                    "You chose "+current_player+"<br>"+
                    "Machine chose "+current_machine+"<br>"+
                    "Machine got out :D<br>"+
                    "Machine score : "+machine_score+"<br>"+
                    "You need "+(machine_score+1)+" to win";
                    player_score = 0;

                    document.getElementById("toss").innerHTML = "You need "+(machine_score+1)+" to win";
                }
            else
                {
                    if(current_machine == 0)
                        {
                            machine_score += current_player;
                        }
                    else{machine_score+=current_machine;}

                    document.getElementById("comment").innerHTML = 
                    "You chose "+current_player+"<br>"+
                    "Machine chose "+current_machine+"<br>"+
                    "Machine score : "+machine_score+"<br>";
                }
        }
    else if(toss_val == 0 && player_score != -1) //player is chasing
        {
            if(current_machine == current_player)
                {
                    document.getElementById("comment").innerHTML = 
                    "You chose "+current_player+"<br>"+
                    "Machine chose "+current_machine+"<br>"+
                    "You got out :(<br>"+
                    "Your score : "+player_score+"<br>"+
                    "Machine score : "+machine_score;

                    if(player_score == machine_score)
                        {
                            document.getElementById("result").innerHTML = 
                            "IT'S A DRAW!!!<br>"+
                            "Refresh to play again!<br>Bye human!<br>";
                            document.getElementById("scoring").style.display = "none"
                            document.getElementById("toss").style.display = "none";
                        }
                    else
                        {
                            document.getElementById("result").innerHTML = 
                            "Unfortunately, you lost by "+ (machine_score-player_score) +" runs! :(<br>"+
                            "Refresh to play again!<br>Bye human!<br>";
                            document.getElementById("scoring").style.display = "none";
                            document.getElementById("toss").style.display = "none";
                        }
                }
            else
                {
                    if(current_player == 0)
                        {
                            player_score += current_machine;
                        }
                    else{player_score+=current_player;}

                    document.getElementById("comment").innerHTML = 
                    "You chose "+current_player+"<br>"+
                    "Machine chose "+current_machine+"<br>"+
                    "Your score : "+player_score+"<br>"+
                    "Machine score : "+machine_score+"<br>";

                    if(player_score > machine_score)
                        {
                            document.getElementById("result").innerHTML = 
                            "Congratulations, you won! :D<br>"+
                            "Refresh to play again!<br>Bye human!<br>";
                            document.getElementById("scoring").style.display = "none";
                            document.getElementById("toss").style.display = "none";
                        }
                }
        }
}
    

