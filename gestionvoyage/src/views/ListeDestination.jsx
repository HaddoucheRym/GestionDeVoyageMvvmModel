import React from 'react'

const ListeDestination = (props) => {

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.retirerDestination(e.target.parentNode.firstChild.textContent);
  }

  return (
    <>
      <h3> Formulaire de nouvelle destination</h3>
      <form onSubmit={props.ajouterDestination}>
        <div>
          <label htmlFor="ville"></label>
          <input type="text" id='ville'
            name='ville'
            placeholder='Entrer le nom de la ville' />
          <label htmlFor="dateDepart"></label>
          <input type="date" id='dateDepart'
            name='dateDepart'
            placeholder='Choisir la date de depart' />
          <label htmlFor="nbrpersonne"></label>
          <input type="number" id='nbrpersonne'
            name='nbrpersonne'
            placeholder='Saisire le nombre de personne' />
        </div>
        <button type='submit'>Ajouter</button>
      </form>
      <h3> Liste des destinations </h3>
      <ul>
        {props.listeDestinations && props.listeDestinations.map((
          destination, index) => {
          return <li key={index}>
            <div>
              <span>{destination.ville} {destination.datetime}</span>
              <button onClick={handleDelete}>supprimer</button>
            </div>
          </li>
        }
        )}
      </ul>
    </>
  )
}

export default ListeDestination 