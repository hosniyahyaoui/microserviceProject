package tn.esprit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.esprit.entities.Project;
@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>{

}
