package com.helen.sms.service;

import com.helen.sms.exception.StudentAlreadyExistException;
import com.helen.sms.exception.StudentNotFoundException;
import com.helen.sms.model.Student;
import com.helen.sms.repository.StudentRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository studentRepository;
    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    Logger LOGGER = LoggerFactory.getLogger(StudentServiceImpl.class);

    @Override
    public Student findById(Long id) {
        //check if student exists
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if(optionalStudent.isPresent()) {
            return optionalStudent.get();
        }
        LOGGER.info("Student not found with the id: {}", id);
         throw new StudentNotFoundException("Student not found with the id "+ id);
    }

    @Override
    public Student findByEmailIgnoreCase(String email) {
        //check if student exists
        Optional<Student> optionalStudent = studentRepository.findByEmailIgnoreCase(email);
        if(optionalStudent.isPresent()) {
            return optionalStudent.get();
        }
        LOGGER.info("Student not found with the email: {}", email);
        throw new StudentNotFoundException("Student not found with the email "+ email);
    }

    @Override
    public String deleteById(Long id) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if (optionalStudent.isEmpty()) {
            LOGGER.info("Student not found with the id: {}", id);
            throw new StudentNotFoundException("No student found with the id: "+ id);
        }
        studentRepository.deleteById(id);
        return "Student deleted successfully";
    }

    @Override
    public Student addStudent(Student student) {
        //check if student already exists
        Optional<Student> optionalStudent = studentRepository.findByEmailIgnoreCase(student.getEmail());
        if (optionalStudent.isPresent()) {
            LOGGER.info("Student already exist with the email: {}", student.getEmail());
            throw new StudentAlreadyExistException("Student already exists with the email: "+ student.getEmail());
        }
        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        //check if student already exists
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if (optionalStudent.isEmpty()) {
            LOGGER.info("Student not found with the id: {}", id);
            throw new StudentNotFoundException("Student not found with the id: "+ id);
        }
        Student existingStudent = optionalStudent.get();
        existingStudent.setEmail(student.getEmail());
        existingStudent.setLastName(student.getLastName());
        existingStudent.setFirstName(student.getFirstName());
        existingStudent.setCourse(student.getCourse());
        return studentRepository.save(existingStudent);
    }
}
