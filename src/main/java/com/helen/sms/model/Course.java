package com.helen.sms.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@Table
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @NotBlank
    private String title;

    @Min(value = 1, message = "Course credit unit must not be less than 1")
    private int creditUnit;

    @NotNull
    @NotBlank
    private String description;

    @CreationTimestamp
    private LocalDate createdAt;
}
