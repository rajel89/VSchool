var readline = require("readline-sync");



function startGame(){
  console.log('\nWelcoem to colossal adventure RGP.');
  var name = readyline-question('\nPayer, what is your name?');

  while(name== ""){
    name = readline.question('\nPlease enter yoru name: ');
  }

  player.setName(name);
  console.log('\nHello '+ name);

}
