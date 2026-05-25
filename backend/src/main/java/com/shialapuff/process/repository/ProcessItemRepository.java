package com.shialapuff.process.repository;

import com.shialapuff.process.entity.ProcessItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProcessItemRepository extends JpaRepository<ProcessItem, Long> {
    List<ProcessItem> findByType(String type);
}
