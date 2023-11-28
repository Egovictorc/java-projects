package com.helen.sms.service;


import com.helen.sms.dao.StaffDao;
import com.helen.sms.model.Staff;

import java.util.List;

public interface StaffService {
    public List<Staff> findAll();
    public Staff findById(Long id);
    public String deleteById(Long id);

    Staff addStaff(StaffDao staffDao);

    Staff updateStaff(StaffDao staffDao, Long id);
}
