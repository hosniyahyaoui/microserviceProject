package com.example.demo.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Order;
import com.example.demo.entities.Product;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.OrdersRepository;
import com.example.demo.repositories.ProductRepository;

@Service
public class OrdersService {
	@Autowired
	OrdersRepository or;
	@Autowired
	CustomerRepository cr;
	@Autowired
	ProductRepository pr;
	public boolean insert(Order o,int customer_id)
	{
		Customer customer=cr.findById(customer_id).orElse(null);
		if(customer==null)
		{
			return false;
		}
		else {
		System.out.print(customer);
		o.setCustomer(customer);
		customer.getOrders().add(o);
		o.setOrder_status(false);
		cr.save(customer);
		or.save(o);
		
		return true;
		}
	}
	public Order orderProduct(int order_id,int product_id)
	{
		Product p=pr.findById(product_id).orElse(null);
		Order o =or.findById(order_id).orElse(null);
		o.getProducts().add(p);
		or.save(o);
		return  o;	
	}
	public Order UpdateOrderStatus(int order_id,Order order)
	{
		Order o = or.findById(order_id).orElse(null);
		o.setOrder_location(order.getOrder_location());
		o.setOrder_date(order.getOrder_date());
		o.setOrder_status(order.isOrder_status());
		return or.findById(order_id).orElse(null);
	}
	public List<Order> listorders()
	{
		return or.findAll();
	}
	
}
