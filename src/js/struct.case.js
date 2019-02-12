function Case() {
  this.gauche = null
  this.droite = null
  this.haut = null
  this.bas = null

  this.font = null
  this.document = null
}

function Case(gauche, droite, haut, bas, font) {
  this.droite = droite
  this.gauche = gauche
  this.haut = haut
  this.bas = bas

  this.font = font
  this.document = null
}

function Case(gauche, droite, haut, bas, font, document) {
  this.droite = droite
  this.gauche = gauche
  this.haut = haut
  this.bas = bas

  this.font = font
  this.document = document
}

getFont = function() {
  //TODO
  if (this.font === "mer"){
    return cheminMer.png 
  } else if (this.font === "neige"){
    return cheminMer.png 
  } else if (this.font === "ville"){
    return cheminMer.png 
  } else if (this.font === "camp"){
    return cheminMer.png 
  } else if (this.font === "foret"){
    return cheminMer.png 
  } else {
    console.warn("Erreur lors de la recherche de l'image de font qui ne correspond a aucune des images possible")
    return ""
  }
}
