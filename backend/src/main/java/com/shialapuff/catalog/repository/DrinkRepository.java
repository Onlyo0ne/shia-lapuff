package com.shialapuff.catalog.repository;

import com.shialapuff.catalog.entity.Drink;
import com.shialapuff.catalog.entity.DrinkStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DrinkRepository extends JpaRepository<Drink, Long> {
    List<Drink> findByStatus(DrinkStatus status);
}
