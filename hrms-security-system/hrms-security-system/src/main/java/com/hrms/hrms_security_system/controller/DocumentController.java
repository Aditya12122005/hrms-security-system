package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.entity.Document;
import com.hrms.hrms_security_system.entity.Employee;

import com.hrms.hrms_security_system.service.DocumentService;

import lombok.RequiredArgsConstructor;

import org.springframework.core.io.Resource;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.util.List;

@RestController

@RequestMapping("/api/documents")

@RequiredArgsConstructor

@CrossOrigin(origins =
        "http://localhost:5173")

public class DocumentController {

    private final DocumentService
            documentService;

    // UPLOAD DOCUMENT

    @PostMapping("/upload/{employeeId}")

    public Document uploadDocument(

            @PathVariable Long employeeId,

            @RequestParam("file")
            MultipartFile file

    ) throws IOException {

        return documentService
                .uploadDocument(
                        employeeId,
                        file
                );
    }

    // UPLOAD PROFILE IMAGE

    @PostMapping("/profile-image/{employeeId}")

    public Employee uploadProfileImage(

            @PathVariable Long employeeId,

            @RequestParam("file")
            MultipartFile file

    ) throws IOException {

        return documentService
                .uploadProfileImage(
                        employeeId,
                        file
                );
    }

    // GET EMPLOYEE DOCUMENTS

    @GetMapping("/employee/{employeeId}")

    public List<Document>
    getEmployeeDocuments(

            @PathVariable Long employeeId
    ) {

        return documentService
                .getEmployeeDocuments(
                        employeeId
                );
    }

    // DOWNLOAD DOCUMENT

    @GetMapping("/download/{documentId}")

    public ResponseEntity<Resource>
    downloadDocument(

            @PathVariable Long documentId

    ) throws Exception {

        Resource resource =

                documentService
                        .downloadDocument(
                                documentId
                        );

        return ResponseEntity.ok()

                .header(

                        HttpHeaders.CONTENT_DISPOSITION,

                        "attachment; filename=\""

                                +

                                resource.getFilename()

                                +

                                "\""
                )

                .body(resource);
    }

    // VIEW DOCUMENT

    @GetMapping("/view/{documentId}")

    public ResponseEntity<Resource>
    viewDocument(

            @PathVariable Long documentId

    ) throws Exception {

        Resource resource =

                documentService
                        .downloadDocument(
                                documentId
                        );

        return ResponseEntity.ok()

                .contentType(
                        MediaType.APPLICATION_OCTET_STREAM
                )

                .body(resource);
    }
}