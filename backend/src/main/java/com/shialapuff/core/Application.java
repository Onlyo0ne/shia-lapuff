package com.shialapuff.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = {
    "com.shialapuff.user.entity",
    "com.shialapuff.catalog.entity",
    "com.shialapuff.reviews.entity",
    "com.shialapuff.process.entity",
    "com.shialapuff.accounting.entity"
})
@EnableJpaRepositories(basePackages = {
    "com.shialapuff.user.repository",
    "com.shialapuff.catalog.repository",
    "com.shialapuff.reviews.repository",
    "com.shialapuff.process.repository",
    "com.shialapuff.admin.repository",
    "com.shialapuff.accounting.repository"
})
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
