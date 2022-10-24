package com.example.demo.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Resource;

import com.example.demo.repositories.ResourceRepository;


@Service
public class ResourceServiceImpl implements ResourceService {
	@Autowired
	private ResourceRepository resourceRepository;


	@Override
	public List<Resource> retrieveAllResources() {
		// TODO Auto-generated method stub
		List<Resource> resources = resourceRepository.findAll();
		return resources;
	}


	@Override
	public Resource addResource(Resource c) {
		// TODO Auto-generated method stub
		resourceRepository.save(c);
		return c;
	}




	@Override
	public void deleteResource(Long id) {
		// TODO Auto-generated method stub
		resourceRepository.deleteById(id);
	}


	@Override
	public Resource updateResource(Resource c) {
		// TODO Auto-generated method stub
		return resourceRepository.save(c);
	}


	@Override
	public Resource retrieveResource(Long id) {
		// TODO Auto-generated method stub
		Resource resource = resourceRepository.findById(id).orElse(null);
		return resource;
	}

}
