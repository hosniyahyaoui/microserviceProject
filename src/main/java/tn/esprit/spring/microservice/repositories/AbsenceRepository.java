package tn.esprit.spring.microservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.spring.microservice.entities.Absence;

@Repository
public interface AbsenceRepository extends JpaRepository<Absence, Long> {

}
