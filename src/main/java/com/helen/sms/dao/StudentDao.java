package com.helen.sms.dao;

import lombok.Data;

public record StudentDao(
        String firstName,
        String lastName,
        String email,
        String course
) {
}
