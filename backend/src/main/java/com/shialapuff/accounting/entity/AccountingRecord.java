package com.shialapuff.accounting.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "accounting_records")
@Data
public class AccountingRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    private double volume;
    
    private double amount;
    
    @Enumerated(EnumType.STRING)
    private RecordType type; // INCOME, EXPENSE
    
    private LocalDate createdAt = LocalDate.now();

    public enum RecordType {
        INCOME, EXPENSE
    }
}
