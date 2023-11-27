package com.helen.sms.controllers;

import com.helen.sms.model.Student;
import com.helen.sms.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/students")
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping
    public ResponseEntity<List<Student>> getStudents(@RequestParam(name = "email", required = false) String email) {
        if (email != null) {
            Student s = studentService.findByEmailIgnoreCase(email);
            return ResponseEntity.status(HttpStatus.OK).body(Collections.singletonList(s));
        }
        List<Student> students = studentService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(students);
    }

    @PostMapping
    public ResponseEntity<Student> addStudent(@Valid @RequestBody Student student) {
        //public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student newStudent = studentService.addStudent(student);
        List<Student> students = studentService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(newStudent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        String message = studentService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(message);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> UpdateStudent(@PathVariable Long id, @Valid @RequestBody Student student) {
        Student updatedStudent = studentService.updateStudent(student, id);
        return ResponseEntity.status(HttpStatus.OK).body(updatedStudent);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student existingStudent = studentService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(existingStudent);
    }
}
