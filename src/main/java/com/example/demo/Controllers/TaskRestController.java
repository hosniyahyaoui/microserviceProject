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

import com.example.demo.entities.Task;

import com.example.demo.services.TaskService;



@RestController


public class TaskRestController {

	@Autowired

	TaskService taskService;
	
	

	// http://localhost:8088/SpringMVC/servlet/retrieve-all-tasks
	@CrossOrigin("*")

	@GetMapping("/retrieve-all-tasks")

	@ResponseBody

	public List<Task> getTasks() {

		List<Task> listTasks = taskService.retrieveAllTasks();

		return listTasks;

	}


	//http://localhost:8088/SpringMVC/servlet/retrieve-task/111
	@CrossOrigin("*")

	@GetMapping("/retrieve-task/{task-id}")
	@ResponseBody
	public Task retrieveTask(@PathVariable("task-id") Long idTask) {
		return taskService.retrieveTask(idTask);
	}
	
	// http://localhost:8088/SpringMVC/servlet/add-task
	@CrossOrigin("*")

	@PostMapping("/add-task")

	@ResponseBody

	public Task addTask(@RequestBody Task c)

	{

		Task task = taskService.addTask(c);

		return task;

	}


	// http://localhost:8088/SpringMVC/servlet/remove-task/{task-id}
	@CrossOrigin("*")

	@DeleteMapping("/remove-task/{task-id}")

	@ResponseBody

	public void removeTask(@PathVariable("task-id") Long idTask) {

		taskService.deleteTask(idTask);

	}

	// http://localhost:8088/SpringMVC/servlet/modify-client
	@CrossOrigin("*")

	@PutMapping("/modify-task")

	@ResponseBody

	public Task modifyTask(@RequestBody Task task) {

		return taskService.updateTask(task);

	}


}
