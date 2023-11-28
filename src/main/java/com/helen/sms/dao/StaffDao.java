package com.helen.sms.dao;

public record StaffDao(
        String firstName,
        String lastName,
        String email,
        String course,
        double salary,
        String phoneNumber
) {
}
