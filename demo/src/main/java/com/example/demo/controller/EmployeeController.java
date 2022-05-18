package com.example.demo.controller;

import com.example.demo.enitity.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*") //allows any request, fixes cors policy
public class EmployeeController {

    @Autowired
    private EmployeeRepository eRepo;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return eRepo.findAll();
    }

    @PostMapping("/employees")
    public Employee saveEmployeeDetails(@RequestBody Employee employee){
        return eRepo.save(employee);
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id ){
        return eRepo.findById(id).get();
    }

    @PutMapping("/employees")
    public Employee updateEmployeeDetails(@RequestBody Employee employee){
        return eRepo.save(employee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<HttpStatus> deleteEmployeeById(@PathVariable Long id){
        eRepo.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
}
