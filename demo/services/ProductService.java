package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;

import com.example.demo.repositories.ProductRepository;
@Service
public class ProductService {
	@Autowired
	ProductRepository pr;
	
	public Product insert(Product p)
	{
		pr.save(p);
		
		return p;
	}
	public Product Update(Product p,int id)
	{
		Product product=pr.findById(id).orElse(null);
		product=p;
		pr.save(product);
		return p;
	}
	public List<Product> getProducts()
	{
		return pr.findAll();
	}
	public void deleteProduct(int id)
	{
		 pr.deleteById(id);
	}

}
