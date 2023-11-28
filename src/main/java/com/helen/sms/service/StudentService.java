package com.helen.sms.service;


import com.helen.sms.dao.StudentDao;
import com.helen.sms.model.Student;

import java.util.List;
import java.util.Optional;

public interface StudentService {
    public List<Student> findAll();
    public Student findById(Long id);
    public Student findByEmailIgnoreCase(String email);
    public String deleteById(Long id);

    Student addStudent(StudentDao studentDao);

    Student updateStudent(StudentDao studentDao, Long id);
}
