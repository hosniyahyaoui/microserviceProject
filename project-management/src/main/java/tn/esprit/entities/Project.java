package tn.esprit.entities;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name="project")
public class Project {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
public int _id;
	
public String nom;
public String duration;
public String topic;
public String status;
//@OneToMany(mappedBy="project", fetch=FetchType.EAGER, cascade=CascadeType.REMOVE)
//@JsonIgnore
@OneToMany
public List<Employees> employees;

	public Project() {
		// TODO Auto-generated constructor stub
	}

	public Project(int _id, String nom, String duration, String topic, String status) {
		super();
		this._id = _id;
		this.nom = nom;
		this.duration = duration;
		this.topic = topic;
		this.status = status;
	}
	
	


	public Project(int _id, String nom, String duration, String topic, String status, List<Employees> employees) {
		super();
		this._id = _id;
		this.nom = nom;
		this.duration = duration;
		this.topic = topic;
		this.status = status;
		this.employees = employees;
	}

	public int get_id() {
		return _id;
	}

	public void set_id(int _id) {
		this._id = _id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<Employees> getEmployees() {
		return employees;
	}

	public void setEmployees(List<Employees> employees) {
		this.employees = employees;
	}



	

}
