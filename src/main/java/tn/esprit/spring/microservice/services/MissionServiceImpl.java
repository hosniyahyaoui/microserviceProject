package tn.esprit.spring.microservice.services;

import java.util.List;

import javax.management.relation.RelationNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.microservice.entities.Mission;
import tn.esprit.spring.microservice.repositories.*;

@Service
public class MissionServiceImpl implements IMissionService {

	@Autowired
	MissionRepository missionRepository;
	@Override
	public List<Mission> retrieveAllMissions() {
		
		return (List<Mission>) this.missionRepository.findAll();
	}

	@Override
	public Mission addMission(Mission m) {
		
		return this.missionRepository.save(m);
	}

	@Override
	public void deleteMission(Long id) {
		
		missionRepository.deleteById(id);	
	}

	@Override
	public Mission updateMission(Mission m) throws RelationNotFoundException {
		Mission existe = this.missionRepository.findById(m.getIdMission())
				.orElseThrow(()->new RelationNotFoundException("Mission not found with id :"+m.getIdMission()));
				existe.setMotif(m.getMotif());
				existe.setDateDebut(m.getDateDebut());
				existe.setDateFinPrevu(m.getDateFinPrevu());
				
				return this.missionRepository.save(existe);
	}

	@Override
	public Integer UpdateDateFinMission(Long idMission) {
		return missionRepository.updateDateFin(idMission);
	}

}
