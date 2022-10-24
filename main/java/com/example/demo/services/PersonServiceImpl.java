package com.example.demo.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Person;

import com.example.demo.repositories.PersonRepository;


@Service
public class PersonServiceImpl implements PersonService {
	@Autowired
	private PersonRepository personRepository;


	@Override
	public List<Person> retrieveAllPersons() {
		// TODO Auto-generated method stub
		List<Person> persons = personRepository.findAll();
		return persons;
	}


	@Override
	public Person addPerson(Person c) {
		// TODO Auto-generated method stub
		personRepository.save(c);
		return c;
	}




	@Override
	public void deletePerson(Long id) {
		// TODO Auto-generated method stub
		personRepository.deleteById(id);
	}


	@Override
	public Person updatePerson(Person c) {
		// TODO Auto-generated method stub
		return personRepository.save(c);
	}


	@Override
	public Person retrievePerson(Long id) {
		// TODO Auto-generated method stub
		Person person = personRepository.findById(id).orElse(null);
		return person;
	}

}
