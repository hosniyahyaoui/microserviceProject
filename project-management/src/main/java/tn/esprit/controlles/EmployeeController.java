package tn.esprit.controlles;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.entities.Employees;

import tn.esprit.services.EmployeeService;


@CrossOrigin
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	EmployeeService Eps;
	public EmployeeController() {
		// TODO Auto-generated constructor stub
	}
	@RequestMapping(value = "/listemployees", method = RequestMethod.GET)
	public List<Employees> list()
	{
		return Eps.getEmployees();
	}
	
	
	@PostMapping({"/insert"})
	public Employees insert(@RequestBody Employees e){
		return Eps.insert(e);
			}
	
	
	@RequestMapping(value = "/{id_emp}", method = RequestMethod.GET)
	public Employees getEmpById(@PathVariable("id_emp") int id)
	{
		return Eps.getEmployeeById(id);
	}
}
