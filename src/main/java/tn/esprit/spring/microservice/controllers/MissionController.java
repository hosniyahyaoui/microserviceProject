package tn.esprit.spring.microservice.controllers;

import java.util.List;

import javax.management.relation.RelationNotFoundException;

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

import tn.esprit.spring.microservice.entities.Mission;
import tn.esprit.spring.microservice.repositories.MissionRepository;
import tn.esprit.spring.microservice.services.IMissionService;



@RestController
@CrossOrigin("*")
@RequestMapping("/mission/api")
public class MissionController {

	@Autowired
	MissionRepository missionRepository;
	@Autowired
	IMissionService missionService;
	
	@GetMapping("/retrieve-all-missions")
	@ResponseBody
	public List<Mission> getClients() {
	List<Mission> listMissions =missionService.retrieveAllMissions();
	return listMissions;
}
	@PostMapping("/add-mission")
	@ResponseBody
	public Mission addAbsence(@RequestBody Mission m)
	{
	 return missionService.addMission(m);
	}
	
	@DeleteMapping("/remove-mission/{mission-id}")
	@ResponseBody
	public String removeMission(@PathVariable("mission-id") Long missionId) {
	missionService.deleteMission(missionId);
	return "mission supprimée";
	}
	
	// http://localhost:8089/mission/api/modify-mission
		@PutMapping("/modify-mission")
		@ResponseBody
		public Mission modifyClient(@RequestBody Mission mission) throws RelationNotFoundException {
		
		return missionService.updateMission(mission);
		}
		
		@PutMapping("/ValidateMission/{id-mission}")
		@ResponseBody
		public String ValidateMission(@PathVariable("id-mission") Long idMission) {
			
			return missionService.UpdateDateFinMission(idMission)+ " missions validées";
		}
	
}
