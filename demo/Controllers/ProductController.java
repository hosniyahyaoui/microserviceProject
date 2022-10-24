package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;
@CrossOrigin("*")
@RestController
@RequestMapping("/products")

public class ProductController {
	@Autowired
	ProductService ps;
	@PostMapping({"/save"})
	
	public Product insert(@RequestBody Product product){
		return ps.insert(product);
			}
	@PutMapping({"/edit"})
	public Product update(@RequestBody Product product){
		return ps.Update(product,product.get_id());
			}
	@GetMapping({"/list"})
	public List<Product> list()
	{
		return ps.getProducts();
	}
	@GetMapping({"/delete/{_id}"})
	public String delete(@PathVariable("_id") int _id)
	{
		 ps.deleteProduct(_id);
		 return "deleted";
	}
	

}
