package com.shialapuff.catalog.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "drinks")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Drink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Double abv; // alcohol by volume

    @Enumerated(EnumType.STRING)
    private DrinkStatus status = DrinkStatus.FERMENTING;

    private LocalDateTime createdAt = LocalDateTime.now();

    private String imageUrl;
}
