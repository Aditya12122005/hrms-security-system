package com.hrms.hrms_security_system.config;

import com.hrms.hrms_security_system.security.JwtAuthFilter;

import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.web.cors.CorsConfiguration;

import org.springframework.web.cors.CorsConfigurationSource;

import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@RequiredArgsConstructor

public class SecurityConfig {

    private final JwtAuthFilter
            jwtAuthFilter;

    @Bean
    public SecurityFilterChain
    securityFilterChain(

            HttpSecurity http

    ) throws Exception {

        http

                // ENABLE CORS

                .cors(cors -> cors.configurationSource(
                        corsConfigurationSource()
                ))

                // DISABLE CSRF

                .csrf(csrf -> csrf.disable())

                // ROUTE AUTHORIZATION

                .authorizeHttpRequests(auth -> auth

                        // PUBLIC APIs

                        .requestMatchers(

                                "/api/auth/**",

                                "/api/otp/**",

                                "/api/documents/**",

                                "/uploads/**"

                        ).permitAll()

                        // ALL OTHER APIs

                        .anyRequest()

                        .authenticated()
                )

                // JWT STATELESS SESSION

                .sessionManagement(session ->

                        session.sessionCreationPolicy(

                                SessionCreationPolicy.STATELESS
                        )
                )

                // JWT FILTER

                .addFilterBefore(

                        jwtAuthFilter,

                        UsernamePasswordAuthenticationFilter.class
                );

        return http.build();
    }

    // PASSWORD ENCODER

    @Bean
    public PasswordEncoder
    passwordEncoder() {

        return new BCryptPasswordEncoder();
    }

    // AUTHENTICATION MANAGER

    @Bean
    public AuthenticationManager
    authenticationManager(

            AuthenticationConfiguration config

    ) throws Exception {

        return config
                .getAuthenticationManager();
    }

    // CORS CONFIGURATION

    @Bean
    public CorsConfigurationSource
    corsConfigurationSource() {

        CorsConfiguration configuration =
                new CorsConfiguration();

        configuration.setAllowedOrigins(

                List.of(
                        "http://localhost:5173"
                )
        );

        configuration.setAllowedMethods(

                List.of(
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE",
                        "OPTIONS"
                )
        );

        configuration.setAllowedHeaders(
                List.of("*")
        );

        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration(
                "/**",
                configuration
        );

        return source;
    }
}