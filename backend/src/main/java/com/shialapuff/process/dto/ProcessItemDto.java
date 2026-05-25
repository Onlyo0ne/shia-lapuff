package com.shialapuff.process.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class ProcessItemDto {
    private String name;
    private String type; // BARREL, JAR
    private int progress;
    private LocalDate startDate;
}
