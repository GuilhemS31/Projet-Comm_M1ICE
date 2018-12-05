function Case() {
    this.droite = null
    this.gauche = null
    this.face = null
    this.bas = null

    this.font = null
    this.document = null
  }

  function Case(droite, gauche, face, bas, font) {
    this.droite = droite
    this.gauche = gauche
    this.face = face
    this.bas = bas

    this.font = font
    this.document = null
  }

  function Case(droite, gauche, face, bas, font, document) {
    this.droite = droite
    this.gauche = gauche
    this.face = face
    this.bas = bas

    this.font = font
    this.document = document
  }

