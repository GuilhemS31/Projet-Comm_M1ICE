function Case() {
  this.gauche = null
  this.droite = null
  this.haut = null
  this.bas = null

  this.fond = null
  this.document = null
}

function Case(gauche, droite, haut, bas, fond) {
  this.droite = droite
  this.gauche = gauche
  this.haut = haut
  this.bas = bas

  this.fond = fond
  this.document = null
}

function Case(gauche, droite, haut, bas, fond, document) {
  this.droite = droite
  this.gauche = gauche
  this.haut = haut
  this.bas = bas

  this.fond = fond
  this.document = document
}
