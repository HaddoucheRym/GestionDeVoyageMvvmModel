import React from 'react'
import DestinationListeViewModel from '../viewmodels/DestinationListeViewModel'
import ListeDestination from '../views/ListeDestination.jsx';

const DestinationLiseModel = () => {

  /**
   * Injection de la logique via notre viewModel
   */
  const viewModel = DestinationListeViewModel();


  /**
   * Methode pour ajouter une destination à la liste des destination
   * @param {*} destination à ajouter
  */
  const rajouterDestination = (destination) => {
  destination.preventDefault();
  viewModel.ajouterDestination(destination.target.ville.value + " " + " " + destination.target.dateDepart.value 
  + " " + destination.target.nbrpersonne.value)
  destination.target.ville.value = "";
  destination.target.dateDepart.value = "";
  destination.target.nbrpersonne.value = 0;
   }
   
  return (
    <>
      <h3> La liste des destinations </h3>
      <ListeDestination listeDestinations={viewModel.destinations}
        ajouterDestination={rajouterDestination}
        retirerDestination={viewModel.supprimerDestination}
        listeVilles={viewModel.villes}
      />
    </>
  )
}

export default DestinationLiseModel