package tn.esprit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.entities.Employees;
@Repository
public interface EmployeeRepository extends JpaRepository<Employees, Integer> {

}
