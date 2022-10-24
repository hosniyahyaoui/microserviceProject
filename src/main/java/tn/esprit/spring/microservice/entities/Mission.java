package tn.esprit.spring.microservice.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
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
public class Mission implements Serializable {

	private static final long serialVersionUID = 1L; 
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	Long idMission;
	String Motif;
	@Temporal (TemporalType.DATE)
	Date DateDebut;
	@Temporal (TemporalType.DATE)
	Date DateFinPrevu;
	@Temporal (TemporalType.DATE)
	Date DateFin;
	
	
	
	public Mission (String Motif, Date DateDebut, Date DateFinPrevu){
		this.Motif = Motif;
		this.DateDebut = DateDebut;
		this.DateFinPrevu = DateFinPrevu;
	}
	public Mission (String Motif, Date DateDebut, Date DateFinPrevu, Date DateFin){
		this.Motif = Motif;
		this.DateDebut = DateDebut;
		this.DateFinPrevu = DateFinPrevu;
		this.DateFin = DateFin;
	}
	
}
