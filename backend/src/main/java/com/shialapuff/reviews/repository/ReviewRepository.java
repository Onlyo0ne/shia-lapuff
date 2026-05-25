package com.shialapuff.reviews.repository;

import com.shialapuff.reviews.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByDrinkId(Long drinkId);
}
