package tn.esprit.spring.microservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.microservice.entities.Absence;
import tn.esprit.spring.microservice.repositories.AbsenceRepository;
import tn.esprit.spring.microservice.services.IAbsenceService;



@RestController
@CrossOrigin("*")
@RequestMapping("/absence/api")
public class AbsenceController {

	@Autowired
	AbsenceRepository absenceRepository;
	@Autowired
	IAbsenceService absenceService;
	
	@GetMapping("/retrieve-all-absences")
	@ResponseBody
	public List<Absence> getAbsences() {
	List<Absence> listAbsences =absenceService.retrieveAllAbsences();
	return listAbsences;
}
	@PostMapping("/add-absence")
	@ResponseBody
	public Absence addAbsence(@RequestBody Absence a)
	{
	 return absenceService.addAbsence(a);
	}
	
	@DeleteMapping("/remove-absence/{id-absence}")
	@ResponseBody
	public String removeAbsence(@PathVariable("id-absence") Long AbsenceId) {
	absenceService.deleteAbsence(AbsenceId);
	return "Absence supprimé";
	}
}
