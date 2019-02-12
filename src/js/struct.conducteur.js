function Conducteur(){
    this.cCaseGauche = null
    this.cCaseHaut = null
    this.cCaseDroite = null
    this.cFrom = null
}

function arriveDuBas(gauche, droite, haut, bas){
    this.cCaseGauche = gauche
    this.cCaseHaut = haut
    this.cCaseDroite = droite
    this.cFrom = bas
}

function arriveDeGauche(gauche, droite, haut, bas){
    this.cCaseGauche = haut
    this.cCaseHaut = droite
    this.cCaseDroite = bas
    this.cFrom = gauche
}

function arriveDeDroite(gauche, droite, haut, bas){
    this.cCaseGauche = bas
    this.cCaseHaut = gauche
    this.cCaseDroite = haut
    this.cFrom = droite
}

function arriveDuHaut(gauche, droite, haut, bas){
    this.cCaseGauche = droite
    this.cCaseHaut = bas
    this.cCaseDroite = gauche
    this.cFrom = haut
}

