package com.helen.sms.repository;

import com.helen.sms.model.Staff;
import com.helen.sms.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {
    Optional<Staff> findByEmailIgnoreCase(String email);
}
