package com.shialapuff.accounting.dto;

import lombok.Data;

@Data
public class AccountingRecordDto {
    private String name;
    private double volume;
    private double amount;
    private String type; // INCOME, EXPENSE
}
