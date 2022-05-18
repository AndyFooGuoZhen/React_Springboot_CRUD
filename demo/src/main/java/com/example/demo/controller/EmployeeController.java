package com.example.demo.controller;

import com.example.demo.enitity.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
