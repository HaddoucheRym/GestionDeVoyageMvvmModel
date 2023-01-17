import React from 'react'
import { useState } from 'react'

const DestinationListeViewModel = () => {
  const [destinations, setDestinations] = useState([
    {
      ville: "Londre",
      datetime: new Date().toLocaleString("en-EU", { timeZone: "Europe/London" }),
      dateDepart: "2023/12/12",
      nbrPersonne: 2
    },
    {
      ville: "Caire",
      datetime: new Date().toLocaleString("en-AF", { timeZone: "Africa/Cairo" }),
      dateDepart: "",
      nbrPersonne: 0
    }
  ]);

  const villes = [
    { nom: "Londre", datetime: new Date().toLocaleString("en-EU", { timeZone: "Europe/London" }) },
    // {nom:"madrid", timeZone:"Europe/Madrid"},
    { nom: "Cairo", datetime: new Date().toLocaleString("en-AF", { timeZone: "Africa/Cairo" }) },
    { nom: "tokyo", datetime: new Date().toLocaleString("en-AS", { timeZone: "Asia/Tokyo" }) }
  ]



  /**
   * Methode pour ajouter une destination à la liste des destinations
   * @param {*} destination a ajouter
   */
  const ajouterDestination = (destination) => {
    setDestinations([...destinations, destination]);
  }

  /**
   * Methode pour supprimer une destination de la liste des destinations
   * @param {*} destination a supprimer
   */
  const supprimerDestination = (destination) => {
    setDestinations(destinations.filter(d => d !== destination));
  }



  return { destinations, ajouterDestination, supprimerDestination, villes }
}

export default DestinationListeViewModel