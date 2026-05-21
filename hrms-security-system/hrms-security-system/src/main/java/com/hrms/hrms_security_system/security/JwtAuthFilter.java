package com.hrms.hrms_security_system.security;

import com.hrms.hrms_security_system.service.CustomUserDetailsService;
import com.hrms.hrms_security_system.util.JwtUtil;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import lombok.RequiredArgsConstructor;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

import org.springframework.stereotype.Component;

import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor

public class JwtAuthFilter
        extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    private final CustomUserDetailsService
            userDetailsService;

    @Override
    protected void doFilterInternal(

            HttpServletRequest request,

            HttpServletResponse response,

            FilterChain filterChain

    ) throws ServletException, IOException {

        String path =
                request.getServletPath();

        System.out.println(
                "Request Path: " + path
        );

        // PUBLIC APIs + STATIC FILES

        if (path.startsWith("/api/auth")

                ||

                path.startsWith("/api/otp")

                ||

                path.startsWith("/api/documents")

                ||

                path.startsWith("/uploads")) {

            filterChain.doFilter(
                    request,
                    response
            );

            return;
        }

        // AUTH HEADER

        final String authHeader =
                request.getHeader("Authorization");

        System.out.println(
                "Authorization Header: " + authHeader
        );

        String username = null;

        String jwt = null;

        // EXTRACT JWT

        if (authHeader != null

                &&

                authHeader.startsWith("Bearer ")) {

            jwt =
                    authHeader.substring(7);

            try {

                username =
                        jwtUtil.extractUsername(jwt);

            } catch (Exception e) {

                filterChain.doFilter(
                        request,
                        response
                );

                return;
            }
        }

        // VALIDATE TOKEN

        if (username != null

                &&

                SecurityContextHolder
                        .getContext()
                        .getAuthentication() == null) {

            UserDetails userDetails =

                    userDetailsService
                            .loadUserByUsername(
                                    username
                            );

            if (jwtUtil.validateToken(

                    jwt,

                    userDetails.getUsername()
            )) {

                UsernamePasswordAuthenticationToken authToken =

                        new UsernamePasswordAuthenticationToken(

                                userDetails,

                                null,

                                userDetails.getAuthorities()
                        );

                authToken.setDetails(

                        new WebAuthenticationDetailsSource()

                                .buildDetails(request)
                );

                SecurityContextHolder

                        .getContext()

                        .setAuthentication(authToken);
            }
        }

        // CONTINUE FILTER

        filterChain.doFilter(
                request,
                response
        );
    }
}