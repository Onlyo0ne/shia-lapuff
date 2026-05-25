package com.shialapuff.process.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "process_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProcessItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String type; // BARREL, JAR

    private LocalDate startDate;

    private Integer progress = 0; // 0-100%

    private Double finalVolume;

    @Column(columnDefinition = "TEXT")
    private String ingredients;

    private LocalDateTime createdAt = LocalDateTime.now();
}
