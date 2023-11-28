package com.helen.sms.service;


import com.helen.sms.dao.CourseDao;
import com.helen.sms.model.Course;

import java.util.List;

public interface CourseService {
    public List<Course> findAll();
    public Course findById(Long id);
    public String deleteById(Long id);

    Course addCourse(CourseDao courseDao);

    Course updateCourse(CourseDao courseDao, Long id);
}
