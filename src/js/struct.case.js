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

