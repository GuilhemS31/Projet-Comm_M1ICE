function getDocument(doc){
  path = '/data'
  target = doc.substr(0,1)
  elmnt = doc.substr(1)

  switch (expr) {
    case 'B':
      path+= '/Guilhem-'
      break;
    case 'R':
      path+= '/Titouan-'
      break;
    case 'B':
      path+= '/Arnaud-'
      break;
    default:
      window.alert('Erreur, Document introuvable');
  }

  switch (elmnt){
    case '1':
      path+= 'CV.pdf'
      break;
    case '2':
      path+= 'Attentes.pdf'
      break;
    case '3':
      path+= 'Compétences_professionelles.pdf'
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
      path+= 'Explication_accident_parcours.pdf'
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
  return path;
}
