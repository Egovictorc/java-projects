package com.helen.sms.service;


import com.helen.sms.model.Course;

import java.util.List;

public interface CourseService {
    public List<Course> findAll();
    public Course findById(Long id);
    public String deleteById(Long id);

    Course addCourse(Course course);

    Course updateCourse(Course course, Long id);
}
