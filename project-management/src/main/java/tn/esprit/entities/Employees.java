package tn.esprit.entities;



import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.ManyToOne;

import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="employees")
public class Employees {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
public int id;	
public String firstname;
public String lastname;
public String job_title;
public String email;
public String password;
public Double salary;
public Date hiring_date;	

@ManyToOne
@JsonIgnore
public Project project;
	public Employees() {
		// TODO Auto-generated constructor stub
		super();
	}
	public Employees(int id, String firstname, String lastname, String job_title, String email, String password,
			Double salary, Date hiring_date) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.job_title = job_title;
		this.email = email;
		this.password = password;
		this.salary = salary;
		this.hiring_date = hiring_date;
	}
	
	

	public Employees(int id, String firstname, String lastname, String job_title, String email, String password,
			Double salary, Date hiring_date, Project project) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.job_title = job_title;
		this.email = email;
		this.password = password;
		this.salary = salary;
		this.hiring_date = hiring_date;
		this.project = project;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getJob_title() {
		return job_title;
	}
	public void setJob_title(String job_title) {
		this.job_title = job_title;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Double getSalary() {
		return salary;
	}
	public void setSalary(Double salary) {
		this.salary = salary;
	}
	public Date getHiring_date() {
		return hiring_date;
	}
	public void setHiring_date(Date hiring_date) {
		this.hiring_date = hiring_date;
	}
	
	public Project getProject() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	}



}
