package com.example.demo.services;




import java.util.List;

import com.example.demo.entities.Resource;


public interface ResourceService {
	List<Resource> retrieveAllResources();

		Resource addResource(Resource c);

		void deleteResource(Long id);

	Resource updateResource(Resource c);

	Resource retrieveResource(Long id);
	
}
