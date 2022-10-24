package tn.esprit.spring.microservice.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Conges implements Serializable {

private static final long serialVersionUID = 1L; 
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	Long idConges;
	String Motif;
	@Temporal (TemporalType.DATE)
	Date DateDebut;
	int Nbr_jours;
	@Enumerated(EnumType.STRING)
	Etat etat;
	

	public Conges(String Motif, Date DateDebut, int Nbr_jours){
		this.Motif = Motif;
		this.DateDebut = DateDebut;
		this.Nbr_jours = Nbr_jours;
		
	}
	public Conges(String Motif, Date DateDebut, int Nbr_jours,Etat etat){
		this.Motif = Motif;
		this.DateDebut = DateDebut;
		this.Nbr_jours = Nbr_jours;
		this.etat = etat;
		
	}
}
