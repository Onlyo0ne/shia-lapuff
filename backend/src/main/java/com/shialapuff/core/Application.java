package com.shialapuff.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {
    "com.shialapuff.user.repository",
    "com.shialapuff.catalog.repository",
    "com.shialapuff.reviews.repository",
    "com.shialapuff.process.repository",
    "com.shialapuff.admin.repository"
})
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
