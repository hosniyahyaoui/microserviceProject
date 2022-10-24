package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Order;
import com.example.demo.entities.Product;
import com.example.demo.repositories.CustomerRepository;
@Service
public class customersService {
	@Autowired
	CustomerRepository cr;
	public Customer insert(Customer c)
	{
		cr.save(c);
		return c;
	}
	public List<Customer> list()
	{
		return cr.findAll();
	}
	public List <Order> getOrders(int id)
	{
		return cr.findById(id).orElse(null).getOrders();
	}
	public Customer getCustomerbyId(int id)
	{
		return cr.findById(id).orElse(null);
	}
}
