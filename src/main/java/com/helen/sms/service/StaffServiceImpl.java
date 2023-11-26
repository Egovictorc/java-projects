package com.helen.sms.service;

import com.helen.sms.exception.StaffAlreadyExistException;
import com.helen.sms.exception.StaffNotFoundException;
import com.helen.sms.model.Staff;
import com.helen.sms.repository.StaffRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffServiceImpl implements StaffService{

    @Autowired
    StaffRepository staffRepository;
    @Override
    public List<Staff> findAll() {
        return staffRepository.findAll();
    }

    @Override
    public Staff findById(Long id) {
        //check if staff exists
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        if(optionalStaff.isPresent()) {
            return optionalStaff.get();
        }
         throw new StaffNotFoundException("Staff not found with the id "+ id);
    }

    @Override
    public String deleteById(Long id) {
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        if (optionalStaff.isEmpty()) {
            throw new StaffNotFoundException("No staff found with the id: "+ id);
        }
        staffRepository.deleteById(id);
        return "Staff deleted successfully";
    }

    @Override
    public Staff addStaff(Staff staff) {
        //check if staff already exists
        Optional<Staff> optionalStaff = staffRepository.findByEmailIgnoreCase(staff.getEmail());
        if (optionalStaff.isPresent()) {
            throw new StaffAlreadyExistException("Staff already exists with the email: "+ staff.getEmail());
        }
        return staffRepository.save(staff);
    }

    @Override
    public Staff updateStaff(Staff staff, Long id) {
        //check if staff already exists
        Optional<Staff> optionalStaff = staffRepository.findById(id);
        if (optionalStaff.isEmpty()) {
            throw new StaffNotFoundException("Staff not found with the id: "+ id);
        }
        Staff existingStaff = optionalStaff.get();
        BeanUtils.copyProperties(staff, optionalStaff);
        return staffRepository.save(optionalStaff.get());
    }
}
