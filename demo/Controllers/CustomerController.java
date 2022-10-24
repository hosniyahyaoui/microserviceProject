package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Order;
import com.example.demo.services.customersService;;
@CrossOrigin("*")
@RestController
@RequestMapping("/customers")
public class CustomerController {
	@Autowired
	customersService os;
	@PostMapping({"/save"})
	public Customer insert(@RequestBody Customer o){
		return os.insert(o);
			}
	@GetMapping({"/list"})
	public List<Customer> list ()
	{
		return os.list();
	}
	@GetMapping({"/list/{id}"})
	public List<Order> orders (@PathVariable("id") int id)
	{
		return os.getOrders(id);
	}
	@GetMapping({"/msg"})
	public String r()
	{
		return "sdqdsqd";
	}
	@GetMapping({"/details/{id}"})
	public Customer getcustomer (@PathVariable("id") int id)
	{
		return os.getCustomerbyId(id);
	}

}
