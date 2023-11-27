package com.helen.sms.service;


import com.helen.sms.model.Staff;

import java.util.List;

public interface StaffService {
    public List<Staff> findAll();
    public Staff findById(Long id);
    public String deleteById(Long id);

    Staff addStaff(Staff staff);

    Staff updateStaff(Staff staff, Long id);
}
