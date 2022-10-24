package tn.esprit.controlles;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import tn.esprit.entities.Project;
import tn.esprit.services.ProjectService;
@CrossOrigin
@RestController
@RequestMapping("/project")
public class ProjectController {

	public ProjectController() {
		// TODO Auto-generated constructor stub
	}
	
	
	@Autowired
	ProjectService ps;
	
	
	//@PostMapping({"/save"})
	@RequestMapping(value = {"/save"}, method = RequestMethod.POST)
	public Project insert(@RequestBody Project project){
		return ps.insert(project);
			}
	@RequestMapping(value = "/edit", method = RequestMethod.PUT)
	public Project update(@RequestBody Project project){
		return ps.Update(project,project.get_id());
			}
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public List<Project> list()
	{
		return ps.getProjects();
	}
	
	
	@RequestMapping(value = "/users/{id_project}", method = RequestMethod.GET)
	public Project getProjetById(@PathVariable("id_project") int id)
	{
		return ps.getProjectById(id);
	}
	//@RequestMapping(value = "/affect/{id_project}/{id_employee}", method = RequestMethod.PUT)
	
	//@PutMapping({"/affect/{id_project}/{id_employee"})
	
	//dire 
	
	@RequestMapping(value ="/affect/{id_project}/{id_employee}", method =RequestMethod.PUT)
	public void affect(@PathVariable("id_project") int id_proj, @PathVariable("id_employee") int id_emp){
		
		try {
			 ps.affectEmployeeToProject(id_proj,id_emp);
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("error"+e);
		}
	 
			}
	
	
	
	//@PutMapping({"/affect/{id_project}/{id_employee"})
		@RequestMapping(value = "/affectmultiple/{id_project}/{ids_employee}", method = RequestMethod.PUT)
		public void affectMultiple(@PathVariable("id_project") int id_proj, @PathVariable("ids_employee") List<String> ids_emp){
		ids_emp.forEach(d->{
			if(ps.existById(Integer.parseInt(d))) {
			
			ps.affectEmployeeToProject(id_proj, Integer.parseInt(d));
			}
			
		});
				}
		
	 @DeleteMapping(value = "/list/{id}")
	    public ResponseEntity<Integer> deleteProject(@PathVariable("id") Integer id) {

	        Boolean isRemoved = ps.Delete(id);

	        if (!isRemoved) {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }

	        return new ResponseEntity<>(id, HttpStatus.OK);
	    }
	


}
