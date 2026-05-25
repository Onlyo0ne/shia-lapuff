package com.shialapuff.reviews.controller;

import com.shialapuff.reviews.entity.Review;
import com.shialapuff.reviews.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drinks/{drinkId}/reviews")
@CrossOrigin(origins = "*")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping
    public List<Review> getReviewsByDrinkId(@PathVariable Long drinkId) {
        return reviewRepository.findByDrinkId(drinkId);
    }

    @PostMapping
    public Review createReview(@PathVariable Long drinkId, @RequestBody Review review) {
        review.setDrinkId(drinkId);
        return reviewRepository.save(review);
    }
}
