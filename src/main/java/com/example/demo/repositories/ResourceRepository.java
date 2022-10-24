package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entities.Resource;

public interface ResourceRepository extends JpaRepository<Resource, Long>{

}
