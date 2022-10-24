package tn.esprit.spring.microservice.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.microservice.entities.Conges;
import tn.esprit.spring.microservice.entities.Etat;
import tn.esprit.spring.microservice.repositories.CongesRepository;

@Service
public class CongesServiceImpl implements ICongesService {

	@Autowired
	CongesRepository congesRepository;
	@Override
	public List<Conges> retrieveAllConges() {
		
		return (List<Conges>) this.congesRepository.findAll();
	}

	@Override
	public Conges addConges(Conges c) {
		//Conges existe = congesRepository.findById(c.getIdConges());
				c.setMotif(c.getMotif());
				c.setDateDebut(c.getDateDebut());
				c.setNbr_jours(c.getNbr_jours());
				c.setEtat(Etat.EnAttente);
		return this.congesRepository.save(c);
	}

	@Override
	public void deleteConges(Long id) {
		congesRepository.deleteById(id);
		
	}

	@Override
	public List<Conges> RetrieveCongesByEtatEnAttente(Etat etat) {
		List<Conges> conges = congesRepository.findCongesByEtat(Etat.EnAttente);	
		return conges;
	}

	@Override
	public Integer ValidateConges(Long idConges, Etat etat) {

		return congesRepository.updateEtat(idConges, etat);
	}


}
