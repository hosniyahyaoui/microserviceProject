package tn.esprit.spring.microservice.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import tn.esprit.spring.microservice.entities.Conges;
import tn.esprit.spring.microservice.entities.Etat;

@Repository
public interface CongesRepository extends JpaRepository<Conges, Long> {

	@Query(value = "SELECT c FROM Conges c WHERE c.etat = :etat")
	List<Conges> findCongesByEtat(@Param("etat")Etat etat);
	
	@Modifying
	@Transactional
	@Query("update Conges c set c.etat = :etat where c.idConges = :idConges")
	Integer updateEtat(@Param(value = "idConges") Long idConges, @Param(value = "etat") Etat etat);
	
	/*@Query(value = "SELECT c FROM Conges c WHERE c.etat LIKE %:word% OR c.Motif LIKE %:word%")
	List<Conges> rechercheavancée(@Param("etat")String word);*/
}
