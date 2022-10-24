package tn.esprit.spring.microservice.services;

import java.util.List;


import tn.esprit.spring.microservice.entities.Conges;
import tn.esprit.spring.microservice.entities.Etat;




public interface ICongesService {

	List<Conges> retrieveAllConges();

	Conges addConges(Conges c);

	void deleteConges(Long id);

	List<Conges> RetrieveCongesByEtatEnAttente(Etat etat);
	
	Integer ValidateConges(Long idConges, Etat etat) ;
	

}
