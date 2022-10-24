package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Order;

import com.example.demo.services.OrdersService;

@CrossOrigin("*")
@RestController
@RequestMapping("/orders")
public class OrderController 
{
	@Autowired
	OrdersService os;
	@PostMapping({"/save/{customer_id}"})
	
	public boolean insert(@RequestBody Order o,@PathVariable("customer_id") int cust_id){
		return os.insert(o,cust_id);
			}
	@PostMapping({"/orderProducts/{order_id}/{product_id}"})
	
	public Order orderproduct(@PathVariable("order_id") int o,@PathVariable("product_id") int p){
		return os.orderProduct(o,p);
			}
    @PutMapping({"/updateorder/{order_id}"})
	public Order updateproduct(@PathVariable("order_id") int id,@RequestBody Order o){
		return os.UpdateOrderStatus(id, o);
			}
   @GetMapping({"/list"})
   public List<Order> Orders()
   {
	   return os.listorders();
   }
}
