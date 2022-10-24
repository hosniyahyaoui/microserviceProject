package com.example.demo.services;




import java.util.List;

import com.example.demo.entities.Person;


public interface PersonService {
	List<Person> retrieveAllPersons();

		Person addPerson(Person c);

		void deletePerson(Long id);

	Person updatePerson(Person c);

	Person retrievePerson(Long id);
	
}
