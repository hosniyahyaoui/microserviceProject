package com.example.demo.Controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Person;

import com.example.demo.services.PersonService;



@RestController


public class PersonRestController {

	@Autowired

	PersonService personService;
	
	

	// http://localhost:8088/SpringMVC/servlet/retrieve-all-persons
	@CrossOrigin("*")

	@GetMapping("/retrieve-all-persons")

	@ResponseBody

	public List<Person> getPersons() {

		List<Person> listPersons = personService.retrieveAllPersons();

		return listPersons;

	}


	//http://localhost:8088/SpringMVC/servlet/retrieve-person/111
	@CrossOrigin("*")

	@GetMapping("/retrieve-person/{Person-id}")
	@ResponseBody
	public Person retrievePerson(@PathVariable("person-id") Long idPerson) {
		return personService.retrievePerson(idPerson);
	}
	
	// http://localhost:8088/SpringMVC/servlet/add-person
	@CrossOrigin("*")

	@PostMapping("/add-person")

	@ResponseBody

	public Person addPerson(@RequestBody Person c)

	{

		Person person = personService.addPerson(c);

		return person;

	}


	// http://localhost:8088/SpringMVC/servlet/remove-person/{person-id}
	@CrossOrigin("*")

	@DeleteMapping("/remove-person/{person-id}")

	@ResponseBody

	public void removePerson(@PathVariable("person-id") Long idPerson) {

		personService.deletePerson(idPerson);

	}

	// http://localhost:8088/SpringMVC/servlet/modify-client
	@CrossOrigin("*")

	@PutMapping("/modify-Person")

	@ResponseBody

	public Person modifyPerson(@RequestBody Person Person) {

		return personService.updatePerson(Person);

	}


}
