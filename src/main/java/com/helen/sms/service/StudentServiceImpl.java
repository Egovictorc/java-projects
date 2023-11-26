package com.helen.sms.service;

import com.helen.sms.exception.StudentAlreadyExistException;
import com.helen.sms.exception.StudentNotFoundException;
import com.helen.sms.model.Student;
import com.helen.sms.repository.StudentRepository;
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

    @Override
    public Student findById(Long id) {
        //check if student exists
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if(optionalStudent.isPresent()) {
            return optionalStudent.get();
        }
         throw new StudentNotFoundException("Student not found with the id "+ id);
    }

    @Override
    public String deleteById(Long id) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if (optionalStudent.isEmpty()) {
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
            throw new StudentAlreadyExistException("Student already exists with the email: "+ student.getEmail());
        }
        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        //check if student already exists
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if (optionalStudent.isEmpty()) {
            throw new StudentNotFoundException("Student not found with the id: "+ id);
        }
        Student existingStudent = optionalStudent.get();
        BeanUtils.copyProperties(student, optionalStudent);
        return studentRepository.save(optionalStudent.get());
    }
}
