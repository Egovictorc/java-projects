package com.helen.sms.service;

import com.helen.sms.exception.CourseAlreadyExistException;
import com.helen.sms.exception.CourseNotFoundException;
import com.helen.sms.model.Course;
import com.helen.sms.repository.CourseRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    CourseRepository courseRepository;
    @Override
    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    @Override
    public Course findById(Long id) {
        //check if course exists
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if(optionalCourse.isPresent()) {
            return optionalCourse.get();
        }
         throw new CourseNotFoundException("Course not found with the id "+ id);
    }

    @Override
    public String deleteById(Long id) {
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if (optionalCourse.isEmpty()) {
            throw new CourseNotFoundException("No course found with the id: "+ id);
        }
        courseRepository.deleteById(id);
        return "Course deleted successfully";
    }

    @Override
    public Course addCourse(Course course) {
        //check if course already exists
        Optional<Course> optionalCourse = courseRepository.findByCodeIgnoreCase(course.getCode());
        if (optionalCourse.isPresent()) {
            throw new CourseAlreadyExistException("Course already exists with the email: "+ course.getCode());
        }
        return courseRepository.save(course);
    }

    @Override
    public Course updateCourse(Course course, Long id) {
        //check if course already exists
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if (optionalCourse.isEmpty()) {
            throw new CourseNotFoundException("Course not found with the id: "+ id);
        }
        Course existingCourse = optionalCourse.get();
        BeanUtils.copyProperties(course, existingCourse);
        return courseRepository.save(existingCourse);
    }
}
