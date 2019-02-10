var begin = 0;
var player, bot;
var tab = [];
var tree;
var current_node;
for (var i = 0; i < 9; i++) tab[i] = 0;
function checkWin(player) {
  if (tab[0] == player && tab[1] == player && tab[2] == player) return true;
  if (tab[3] == player && tab[4] == player && tab[5] == player) return true;
  if (tab[6] == player && tab[7] == player && tab[8] == player) return true;
  if (tab[0] == player && tab[3] == player && tab[6] == player) return true;
  if (tab[1] == player && tab[4] == player && tab[7] == player) return true;
  if (tab[2] == player && tab[5] == player && tab[8] == player) return true;
  if (tab[0] == player && tab[4] == player && tab[8] == player) return true;
  if (tab[2] == player && tab[4] == player && tab[6] == player) return true;
  return false;
}
function playerChoice(choice1, choice2) {
  if (begin == 0) {
    begin = 1;
    player = choice1;
    bot = choice2;
    document.getElementsByClassName(player)[0].style.color = "green";
    document.getElementsByClassName(bot)[0].style.color = "red";
    if (bot == "X") {
      tree = _init_X();
      tab[0] = bot;
    }
    else{
      tree = _init_O();
    }
    current_node = tree._root;
    updateView();
  }
}
function findNext(play, node) {
  for (var i = 0; i < node.children.length; i++) {
    if (node.children[i].traverse == play) return node.children[i];
  }
  return undefined;
}
function play(lastPlay) {
  if (begin && tab[lastPlay]==0 && !checkWin(bot)) {
   tab[lastPlay] = player;
   current_node = findNext(lastPlay,current_node);
   tab[current_node.data]=bot;

  }
  updateView();
}
function updateView() {
  for (var i = 0; i < 9; i++) {
    if (tab[i] != 0) {
      document.getElementById(i).innerHTML = tab[i];

      document.getElementById(i).style.textalign = "center";
      if (tab[i] == player) {
        document.getElementById(i).style.color = "green";
      } else {
        document.getElementById(i).style.color = "red";
      }
    }
  }
}
function init() {
  begin = 0;
  for (var i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = "";
    tab[i] = 0;
    document.getElementsByClassName("X")[0].style.color = "black";
    document.getElementsByClassName("O")[0].style.color = "black";
  }
}
