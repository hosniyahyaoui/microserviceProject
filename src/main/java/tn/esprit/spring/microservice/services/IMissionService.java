package tn.esprit.spring.microservice.services;

import java.util.List;

import javax.management.relation.RelationNotFoundException;

import tn.esprit.spring.microservice.entities.Mission;

public interface IMissionService {

	List<Mission> retrieveAllMissions();

	Mission addMission(Mission m);

	void deleteMission(Long id);
	
	Mission updateMission(Mission m) throws RelationNotFoundException;
	
	Integer UpdateDateFinMission(Long idMissiion) ;

}
