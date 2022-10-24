package com.example.demo.entities;

import java.io.Serializable;
import java.util.Date;



import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@SuppressWarnings("serial")
@Entity

public class Resource implements Serializable {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY) 
	@Column(name="idResource")
	private Long idResource; // Clé primaire
	private String name; 
	private String history; 
	private String owner;
	public Long getIdResource() {
		return idResource;
	}
	public void setIdResource(Long idResource) {
		this.idResource = idResource;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHistory() {
		return history;
	}
	public void setHistory(String history) {
		this.history = history;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	
    

}
