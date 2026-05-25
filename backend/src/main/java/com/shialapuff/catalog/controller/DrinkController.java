package com.shialapuff.catalog.controller;

import com.shialapuff.catalog.entity.Drink;
import com.shialapuff.catalog.repository.DrinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drinks")
@CrossOrigin(origins = "*")
public class DrinkController {

    @Autowired
    private DrinkRepository drinkRepository;

    @GetMapping
    public List<Drink> getAllDrinks() {
        return drinkRepository.findAll();
    }

    @GetMapping("/{id}")
    public Drink getDrinkById(@PathVariable Long id) {
        return drinkRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Drink not found with id: " + id));
    }

    @PostMapping
    public Drink createDrink(@RequestBody Drink drink) {
        return drinkRepository.save(drink);
    }
}
