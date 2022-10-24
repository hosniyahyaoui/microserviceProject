package tn.esprit.spring.microservice.repositories;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import tn.esprit.spring.microservice.entities.Mission;

@Repository
public interface MissionRepository extends JpaRepository<Mission, Long> {

	@Modifying
	@Transactional
	@Query("update Mission m set m.DateFin = ?#{T(java.sql.Date).valueOf(T(java.time.LocalDate).now() )} where m.idMission = :idMission")
	Integer updateDateFin(@Param(value = "idMission") Long idMission);
}
