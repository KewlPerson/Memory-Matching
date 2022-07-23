var array = ["a", "a", "b", "b", "c", "c", "d", "d"];
var guess1 = "";
var guess2 = "";
var guessNumber = 1;
var cardsRevealed = 0;
var integer = 0;
var strikes = 0;
var randNum = 0;
setInterval(checkLose, 1000);
for(i=0;i<8;i++){
  document.getElementById("b"+String(i)).disabled = true;
}
function ready() {
  strikes = 0;
  document.getElementById("strikes").innerHTML = "Strikes: 0";
  cardsRevealed = 0;
  document.getElementById("header2").innerHTML = "Press ready to begin! Match the tiles, but make three mistakes and you lose!";
  while(integer < Math.floor(Math.random() * 8)){
    randNum = Math.floor(Math.random() * 7);
    array.push(array[0]);
    array.reverse();
    array.shift();
    array.push(array[randNum])
    array.splice(randNum,1);
    integer += 1;
  }
  integer = 0
  for(i=0;i<8;i++){
    document.getElementById("b"+String(i)).innerHTML = array[i];
  }
  setTimeout(begin,2000);
}
function guess(choice){
  document.getElementById("b"+String(choice)).disabled = true;
  cardsRevealed += 1;
  document.getElementById("b"+String(choice)).innerHTML = array[choice];
  if(guessNumber == 1){
    document.getElementById("b"+String(choice)).innerHTML = array[choice];
    guess1 = choice;
    guessNumber *= -1;
    check();
  }
  else{
    guess2 = choice;
    guessNumber *= -1;
    document.getElementById("b"+String(guess1)).disabled = false;
    document.getElementById("b"+String(guess2)).disabled = false;
    check();
  }
}
function check(){
if(cardsRevealed >= 8){
    document.getElementById("header2").innerHTML = "You Win! Press Ready to Try Again!";
  }
  if((typeof guess1 != "string") && (typeof guess2 != "string")){
    if(array[guess1] == array[guess2]){
      document.getElementById("b"+String(guess1)).disabled = true;
      document.getElementById("b"+String(guess2)).disabled = true;
      guess1 = ""
      guess2 = ""
    }
    else{
      strikes += 1
      document.getElementById("strikes").innerHTML = "Strikes: " + strikes
      cardsRevealed -= 2;
      document.getElementById("b"+String(guess1)).innerHTML = "_";
      document.getElementById("b"+String(guess2)).innerHTML = "_";
      guess1 = "";
      guess2 = "";
    }
  }
}
function begin(){
  for(i=0;i<8;i++){
    document.getElementById("b"+String(i)).innerHTML = "_";
    document.getElementById("b"+String(i)).disabled = false;
  }
}
function checkLose(){
  if(strikes>=3){
    for(i=0;i<8;i++){
      document.getElementById("b"+String(i)).disabled = true;
    }
    document.getElementById("header2").innerHTML = "You Lose. Press Ready to Try Again!";
  }
}
