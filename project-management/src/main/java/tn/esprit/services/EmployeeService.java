package tn.esprit.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.entities.Employees;

import tn.esprit.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository employee;
	public EmployeeService() {
		// TODO Auto-generated constructor stub
	}
	public List<Employees> getEmployees()
	{
		return this.employee.findAll();
	}
	
	
	public Employees insert(Employees e)
	{
		this.employee.save(e);
		
		return e;
	}
	
	public Employees getEmployeeById(int id)
	{
		Employees emp=employee.findById(id).orElse(null);
		
		return emp;
	}
}
