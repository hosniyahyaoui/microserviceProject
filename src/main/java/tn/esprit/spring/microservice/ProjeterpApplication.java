package tn.esprit.spring.microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ProjeterpApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjeterpApplication.class, args);
	}

}
