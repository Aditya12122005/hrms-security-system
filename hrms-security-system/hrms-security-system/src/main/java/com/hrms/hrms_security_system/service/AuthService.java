package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.dto.RegisterRequest;
import com.hrms.hrms_security_system.entity.User;
import com.hrms.hrms_security_system.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    public String register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already exists";
        }

        if (userRepository.existsByUsername(request.getUsername())) {
            return "Username already exists";
        }

        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();

        userRepository.save(user);

        return "User Registered Successfully";
    }
}