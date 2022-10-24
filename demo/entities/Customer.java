package com.example.demo.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Customers")
public class Customer {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
public int _id;
public String full_name;
public String gender;
public String Email;
public String password;
public int get_id() {
	return _id;
}
public void set_id(int _id) {
	this._id = _id;
}
public String getFull_name() {
	return full_name;
}
public void setFull_name(String full_name) {
	this.full_name = full_name;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getEmail() {
	return Email;
}
public void setEmail(String email) {
	Email = email;
}

public List<Order> getOrders() {
	return Orders;
}
public void setOrders(List<Order> orders) {
	Orders = orders;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}

@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "customer")
public List<Order>Orders;
}
