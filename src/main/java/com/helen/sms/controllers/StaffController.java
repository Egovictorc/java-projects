package com.helen.sms.controllers;

import com.helen.sms.model.Staff;
import com.helen.sms.service.StaffService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/staff")
public class StaffController {

    @Autowired
    StaffService staffService;
    @GetMapping
    public ResponseEntity<List<Staff>> getStaffs() {
        List<Staff> staffs = staffService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(staffs);
    }

    @PostMapping
    public ResponseEntity<Staff> addStaff(@Valid @RequestBody Staff staff) {
    //public ResponseEntity<Staff> addStaff(@RequestBody Staff staff) {
        Staff newStaff = staffService.addStaff(staff);
        List<Staff> staffs = staffService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(newStaff);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStaff(@PathVariable Long id) {
        String message = staffService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(message);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Staff> UpdateStaff(@PathVariable Long id, @Valid @RequestBody Staff staff) {
        Staff updatedStaff = staffService.updateStaff(staff, id);
        return ResponseEntity.status(HttpStatus.OK).body(updatedStaff);
    }
}
