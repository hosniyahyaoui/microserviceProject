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

import com.example.demo.entities.Resource;

import com.example.demo.services.ResourceService;



@RestController


public class ResourceRestController {

	@Autowired

	ResourceService ResourceService;
	
	

	// http://localhost:8088/SpringMVC/servlet/retrieve-all-Resources
	@CrossOrigin("*")

	@GetMapping("/retrieve-all-Resources")

	@ResponseBody

	public List<Resource> getResources() {

		List<Resource> listResources = ResourceService.retrieveAllResources();

		return listResources;

	}


	//http://localhost:8088/SpringMVC/servlet/retrieve-Resource/111
	@CrossOrigin("*")

	@GetMapping("/retrieve-Resource/{Resource-id}")
	@ResponseBody
	public Resource retrieveResource(@PathVariable("Resource-id") Long idResource) {
		return ResourceService.retrieveResource(idResource);
	}
	
	// http://localhost:8088/SpringMVC/servlet/add-client
	@CrossOrigin("*")

	@PostMapping("/add-Resource")

	@ResponseBody

	public Resource addResource(@RequestBody Resource c)

	{

		Resource Resource = ResourceService.addResource(c);

		return Resource;

	}


	// http://localhost:8088/SpringMVC/servlet/remove-Resource/{Resource-id}
	@CrossOrigin("*")

	@DeleteMapping("/remove-Resource/{Resource-id}")

	@ResponseBody

	public void removeResource(@PathVariable("Resource-id") Long idResource) {

		ResourceService.deleteResource(idResource);

	}

	// http://localhost:8088/SpringMVC/servlet/modify-client
	@CrossOrigin("*")

	@PutMapping("/modify-Resource")

	@ResponseBody

	public Resource modifyResource(@RequestBody Resource Resource) {

		return ResourceService.updateResource(Resource);

	}


}
