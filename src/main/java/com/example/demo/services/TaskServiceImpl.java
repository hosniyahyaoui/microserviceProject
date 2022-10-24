package com.example.demo.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Task;

import com.example.demo.repositories.TaskRepository;


@Service
public class TaskServiceImpl implements TaskService {
	@Autowired
	private TaskRepository taskRepository;


	@Override
	public List<Task> retrieveAllTasks() {
		// TODO Auto-generated method stub
		List<Task> tasks = taskRepository.findAll();
		return tasks;
	}


	@Override
	public Task addTask(Task c) {
		// TODO Auto-generated method stub
		taskRepository.save(c);
		return c;
	}




	@Override
	public void deleteTask(Long id) {
		// TODO Auto-generated method stub
		taskRepository.deleteById(id);
	}


	@Override
	public Task updateTask(Task c) {
		// TODO Auto-generated method stub
		return taskRepository.save(c);
	}


	@Override
	public Task retrieveTask(Long id) {
		// TODO Auto-generated method stub
		Task task = taskRepository.findById(id).orElse(null);
		return task;
	}

}
