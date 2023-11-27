package com.helen.sms.controllers;

import com.helen.sms.model.Course;
import com.helen.sms.service.CourseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {

    @Autowired
    CourseService courseService;
    @GetMapping
    public ResponseEntity<List<Course>> getCourses() {
        List<Course> courses = courseService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(courses);
    }

    @PostMapping
    public ResponseEntity<Course> addCourse(@Valid @RequestBody Course course) {
    //public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        Course newCourse = courseService.addCourse(course);
        List<Course> courses = courseService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(newCourse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable Long id) {
        String message = courseService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(message);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Course> UpdateCourse(@PathVariable Long id, @Valid @RequestBody Course course) {
        Course updatedCourse = courseService.updateCourse(course, id);
        return ResponseEntity.status(HttpStatus.OK).body(updatedCourse);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Course existingCourse = courseService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(existingCourse);
    }
}
