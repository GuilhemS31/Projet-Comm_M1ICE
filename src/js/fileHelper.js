function getDocument(doc){
  path = '/data'
  target = doc.substr(0,1)
  elmnt = doc.substr(1)
  searchElmnt = false
  switch (expr) {
    case 'B':
      path+= '/Guilhem-'
      searchElmnt = true
      break;
    case 'R':
      path+= '/Titouan-'
      searchElmnt = true
      break;
    case 'N':
      path+= '/Arnaud-'
      searchElmnt = true
      break;
    default:
      window.alert('Erreur, Document introuvable');
  }

if(searchElmnt){
  switch (elmnt){
    case '1':
      path+= 'CV.pdf'
      break;
    case '2':
      path+= 'Attentes.pdf'
      break;
    case '3':
      path+= 'Competences_professionelles.pdf'
      break;
    case '4':
      path+= 'Traits_personalitee.pdf'
      break;
    case '5':
      path+= 'Centres_interets.pdf'
      break;
    case '6':
      path+= 'Itineraire_etudes-pro.pdf'
      break;
    case '7':
      path+= 'Accident_parcours.pdf'
      break;
    case '8':
      path+= 'Influence_choix.pdf'
      break;
    case '9':
      path+= 'Contraintes_personelles.pdf'
      break;
    case '10':
      path+= 'Informations_complementaire.pdf'
      break;
    case '11':
      path+= 'Caricature.png'
      break;
    default:
      window.alert('Erreur, Document introuvable');
  }

  return path
}

  return '';
}

function getBiome(biome){
  path = '/src/images/biomes/'
  switch (biome){
    case 'mer':
      path += 'plages.png'
      break;
    case 'neige':
      path += 'montagne.jpg'
      break;
    case 'foret':
      path += 'foret.jpg'
      break;
    case 'ville':
      path += 'ville.jpg'
      break;
    default:
      path += 'campagne.jpg'
  }

}
