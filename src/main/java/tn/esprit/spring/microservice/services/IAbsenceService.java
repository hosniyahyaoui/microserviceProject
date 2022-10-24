package tn.esprit.spring.microservice.services;

import java.util.List;

import tn.esprit.spring.microservice.entities.Absence;



public interface IAbsenceService {

	List<Absence> retrieveAllAbsences();

	Absence addAbsence(Absence a);

	void deleteAbsence(Long id);

}
