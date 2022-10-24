package tn.esprit.spring.microservice.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.microservice.entities.Conges;
import tn.esprit.spring.microservice.entities.Etat;
import tn.esprit.spring.microservice.repositories.CongesRepository;
import tn.esprit.spring.microservice.services.ICongesService;




@RestController
@CrossOrigin("*")
@RequestMapping("/conges/api")
public class CongesController {

	@Autowired
	CongesRepository congesRepository;
	@Autowired
	ICongesService congesService;
	
	// http://localhost:8082/conges/api/retrieve-all-conges
	@GetMapping("/retrieve-all-conges")
	@ResponseBody
	public List<Conges> getConges() {
	List<Conges> listconges =congesService.retrieveAllConges();
	return listconges;
}
	@PostMapping("/add-conges")
	@ResponseBody
	public Conges ajoutConges(@RequestBody Conges c)
	{
	 return congesService.addConges(c);
	}
	
	@DeleteMapping("/remove-conges/{id-conges}")
	@ResponseBody
	public String removeConges(@PathVariable("id-conges") Long congesId) {
	congesService.deleteConges(congesId);
	return "Conges supprimé";
	}
	
	// http://localhost:8082/conges/api/retrieve-conges-etat/EnAttente
	@GetMapping("/retrieve-conges-etat/{etat}")
	@ResponseBody
	public List<Conges> getCongesByEtatEnAttente(@PathVariable("etat") Etat etat){
		List<Conges> listCongesbyetat = congesService.RetrieveCongesByEtatEnAttente(Etat.EnAttente);
		return listCongesbyetat;
	}
	
	@PutMapping("/ValidateConges/{id-conges}/{etat}")
	@ResponseBody
	public String ValidateConges(@PathVariable("id-conges") Long idConges,@PathVariable("etat") Etat etat) {
		
		return congesService.ValidateConges(idConges, etat)+ " congés validés";
	}
}
