package com.shialapuff.core;

import com.shialapuff.user.entity.User;
import com.shialapuff.user.entity.UserRole;
import com.shialapuff.user.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            // Create admin user if not exists
            if (userRepository.findByEmail("admin@shialapuff.com").isEmpty()) {
                User admin = new User();
                admin.setEmail("admin@shialapuff.com");
                admin.setDisplayName("Admin");
                admin.setPassword(passwordEncoder.encode("admin"));
                admin.setRole(UserRole.ADMIN);
                userRepository.save(admin);
                System.out.println("Created admin user: admin@shialapuff.com / admin");
            }

            // Create regular user if not exists
            if (userRepository.findByEmail("user@shialapuff.com").isEmpty()) {
                User user = new User();
                user.setEmail("user@shialapuff.com");
                user.setDisplayName("User");
                user.setPassword(passwordEncoder.encode("user"));
                user.setRole(UserRole.USER);
                userRepository.save(user);
                System.out.println("Created regular user: user@shialapuff.com / user");
            }
        };
    }
}
