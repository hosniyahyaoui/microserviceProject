package tn.esprit.spring.microservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.microservice.entities.Absence;
import tn.esprit.spring.microservice.repositories.AbsenceRepository;


@Service
public class AbsenceServiceImpl implements IAbsenceService {

	@Autowired
	AbsenceRepository absenceRepository;
	@Override
	public List<Absence> retrieveAllAbsences() {
		
		return (List<Absence>) this.absenceRepository.findAll();
	}

	@Override
	public Absence addAbsence(Absence a) {
		
		return this.absenceRepository.save(a);
	}

	@Override
	public void deleteAbsence(Long id) {
		absenceRepository.deleteById(id);
		
	}

}
