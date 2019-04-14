function launchGame(){
  //remove btnPlay
  document.getElementById("btnPlay").style.display ="none";

  //Séparer zone de jeu en 2 :
  var uiDiv = document.getElementById("gameWindow");

  document.getElementById("mapDiv").style.display ="inline";
  var leftSide = document.getElementById("mapDiv");

  document.getElementById("gameDiv").style.display ="inline";
  var rightSide = document.getElementById("gameDiv");

  //Gauche = Map
  initMap(leftSide)
  //Droite = jeu
  initGame(rightSide)
}


function initMap(mapDiv){

}

function initGame(gameDiv){

}
