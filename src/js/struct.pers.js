function Perso(){
    this.Prenom = ""
    this.Nom = ""
    this.infos = []
}

function Perso(prenom, nom, lInfos){
    this.Prenom = prenom
    this.Nom = nom
    this.infos = lInfos
}

function getInfos(name) {
    const info = this.infos.forEach(elem => { if (elem.name === name) { return elem } });
    if (info != null){
        return info
    } else {
        console.warn("Attention aucun element trouver pour le name : ",name)
    }
}