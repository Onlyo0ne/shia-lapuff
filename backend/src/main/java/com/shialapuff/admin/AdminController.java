package com.shialapuff.admin;

import com.shialapuff.catalog.entity.Drink;
import com.shialapuff.catalog.repository.DrinkRepository;
import com.shialapuff.process.dto.ProcessItemDto;
import com.shialapuff.process.dto.RecipeDto;
import com.shialapuff.process.entity.ProcessItem;
import com.shialapuff.process.entity.Recipe;
import com.shialapuff.process.repository.ProcessItemRepository;
import com.shialapuff.process.repository.RecipeRepository;
import com.shialapuff.accounting.dto.AccountingRecordDto;
import com.shialapuff.accounting.entity.AccountingRecord;
import com.shialapuff.accounting.repository.AccountingRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private DrinkRepository drinkRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private ProcessItemRepository processItemRepository;

    @Autowired
    private AccountingRecordRepository accountingRecordRepository;

    // --- Recipes ---
    @PostMapping("/recipes")
    public ResponseEntity<Recipe> saveRecipe(@RequestBody RecipeDto dto) {
        Recipe recipe = new Recipe();
        recipe.setName(dto.getName());
        recipe.setDescription(dto.getDescription());
        // В реальном проекте здесь нужно сохранить ингредиенты
        return ResponseEntity.ok(recipeRepository.save(recipe));
    }

    @GetMapping("/recipes")
    public ResponseEntity<List<Recipe>> getAllRecipes() {
        return ResponseEntity.ok(recipeRepository.findAll());
    }

    @DeleteMapping("/recipes/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id) {
        recipeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    // --- Process ---
    @PostMapping("/process")
    public ResponseEntity<ProcessItem> saveProcessItem(@RequestBody ProcessItemDto dto) {
        ProcessItem item = new ProcessItem();
        item.setName(dto.getName());
        item.setType(dto.getType());
        item.setProgress(dto.getProgress());
        item.setStartDate(dto.getStartDate());
        return ResponseEntity.ok(processItemRepository.save(item));
    }

    @GetMapping("/process")
    public ResponseEntity<List<ProcessItem>> getAllProcessItems() {
        return ResponseEntity.ok(processItemRepository.findAll());
    }

    @PutMapping("/process/{id}")
    public ResponseEntity<ProcessItem> updateProcessItem(@PathVariable Long id, @RequestBody ProcessItemDto dto) {
        ProcessItem item = processItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Process item not found"));
        item.setProgress(dto.getProgress());
        if (dto.getProgress() == 100) {
            item.setStatus("COMPLETED");
        }
        return ResponseEntity.ok(processItemRepository.save(item));
    }

    // --- Accounting ---
    @PostMapping("/accounting")
    public ResponseEntity<AccountingRecord> saveAccountingRecord(@RequestBody AccountingRecordDto dto) {
        AccountingRecord record = new AccountingRecord();
        record.setName(dto.getName());
        record.setVolume(dto.getVolume());
        record.setAmount(dto.getAmount());
        record.setType(dto.getType()); // INCOME, EXPENSE
        return ResponseEntity.ok(accountingRecordRepository.save(record));
    }

    @GetMapping("/accounting")
    public ResponseEntity<List<AccountingRecord>> getAllAccountingRecords() {
        return ResponseEntity.ok(accountingRecordRepository.findAll());
    }

    @GetMapping("/stats")
    public ResponseEntity<AccountingStats> getStats() {
        List<AccountingRecord> records = accountingRecordRepository.findAll();
        double income = records.stream()
                .filter(r -> r.getType() == AccountingRecord.RecordType.INCOME)
                .mapToDouble(AccountingRecord::getAmount)
                .sum();
        double expense = records.stream()
                .filter(r -> r.getType() == AccountingRecord.RecordType.EXPENSE)
                .mapToDouble(AccountingRecord::getAmount)
                .sum();
        return ResponseEntity.ok(new AccountingStats(income, expense, income - expense));
    }

    public static class AccountingStats {
        public double income;
        public double expense;
        public double balance;

        public AccountingStats(double income, double expense, double balance) {
            this.income = income;
            this.expense = expense;
            this.balance = balance;
        }
    }
}
