function Conducteur(){
    this.cCaseGauche = null
    this.cCaseFace = null
    this.cCaseDroite = null
    this.cFrom = null
}

function arriveDuBas(gauche, droite, haut, bas){
    this.cCaseGauche = gauche
    this.cCaseFace = haut
    this.cCaseDroite = droite
    this.cFrom = bas
}

function arriveDeGauche(gauche, droite, haut, bas){
    this.cCaseGauche = haut
    this.cCaseFace = droite
    this.cCaseDroite = bas
    this.cFrom = gauche
}

function arriveDeDroite(gauche, droite, haut, bas){
    this.cCaseGauche = bas
    this.cCaseFace = gauche
    this.cCaseDroite = haut
    this.cFrom = droite
}

function arriveDuHaut(gauche, droite, haut, bas){
    this.cCaseGauche = droite
    this.cCaseFace = bas
    this.cCaseDroite = gauche
    this.cFrom = haut
}
