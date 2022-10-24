package com.example.demo.services;




import java.util.List;

import com.example.demo.entities.Task;


public interface TaskService {
	List<Task> retrieveAllTasks();

		Task addTask(Task c);

		void deleteTask(Long id);

	Task updateTask(Task c);

	Task retrieveTask(Long id);
	
}
