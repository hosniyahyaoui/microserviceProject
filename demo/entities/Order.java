package com.example.demo.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Orders")
public class Order {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int order_id;

@ManyToOne(fetch = FetchType.EAGER)
@JsonIgnore
private Customer customer;
private Date order_date;
private String order_location;
private boolean order_status;
public int getOrder_id() {
	return order_id;
}
public void setOrder_id(int order_id) {
	this.order_id = order_id;
}
public boolean isOrder_status() {
	return order_status;
}
public void setOrder_status(boolean order_status) {
	this.order_status = order_status;
}
public Date getOrder_date() {
	return order_date;
}
public void setOrder_date(Date order_date) {
	this.order_date = order_date;
}
public String getOrder_location() {
	return order_location;
}
public void setOrder_location(String order_location) {
	this.order_location = order_location;
}
@ManyToMany(fetch = FetchType.EAGER,
cascade = {
    CascadeType.PERSIST,
    CascadeType.MERGE
})
public List<Product> products;

public List<Product> getProducts() {
	return products;
}
public void setProducts(List<Product> products) {
	this.products = products;
}
public int get_id() {
	return order_id;
}
public void set_id(int _id) {
	this.order_id = _id;
}
public Customer getCustomer() {
	return customer;
}
public void setCustomer(Customer customer) {
	this.customer = customer;
}

}
