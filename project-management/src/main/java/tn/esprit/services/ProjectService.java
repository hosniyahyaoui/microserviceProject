package tn.esprit.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.entities.Employees;
import tn.esprit.entities.Project;
import tn.esprit.repository.EmployeeRepository;
import tn.esprit.repository.ProjectRepository;

@Service
public class ProjectService {

	public ProjectService() {
		// TODO Auto-generated constructor stub
	}
	
	
	@Autowired
	ProjectRepository projectRepo;
	@Autowired
	EmployeeRepository employeeRepo;
	
	public Project insert(Project p)
	{
		this.projectRepo.save(p);
		
		return p;
	}
	public Project Update(Project pr,int id)
	{
		Project projectt=this.projectRepo.findById(id).orElse(null);
		projectt=pr;
		this.projectRepo.save(projectt);
		return pr;
	}
	public List<Project> getProjects()
	{
		return this.projectRepo.findAll();
	}
	
	
	public Project getProjectById(int id)
	{
		Project pro=projectRepo.findById(id).orElse(null);
		
		return pro;
	}
	
	public Boolean Delete(int id) {
		
		
	
		try {
			this.projectRepo.deleteById(id);
			
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("error in delete"+e);
		}
		return true;
	}
	
	
	public void affectEmployeeToProject(int id_proj,int id_Employee){
		
		Project projectt=projectRepo.findById(id_proj).orElse(null);
		
		Employees employeee=employeeRepo.findById(id_Employee).orElse(null);
		projectt.getEmployees().add(employeee);
		
		
		projectRepo.save(projectt);
		
		 
	}
	
	
	public Boolean existById(Integer id) {
		
		return employeeRepo.existsById(id);
	}

}
