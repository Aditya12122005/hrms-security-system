package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.entity.Document;
import com.hrms.hrms_security_system.entity.Employee;

import com.hrms.hrms_security_system.repository.DocumentRepository;
import com.hrms.hrms_security_system.repository.EmployeeRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;

import org.springframework.stereotype.Service;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

import java.net.MalformedURLException;

import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.List;

@Service
@RequiredArgsConstructor

public class DocumentService {

    private final DocumentRepository
            documentRepository;

    private final EmployeeRepository
            employeeRepository;

    private static final String
            UPLOAD_DIR =
            "C:/Users/Aditya/Desktop/Projects/hrms-security-system/hrms-security-system/hrms-security-system/uploads/";

    // UPLOAD DOCUMENT

    public Document uploadDocument(

            Long employeeId,

            MultipartFile file

    ) throws IOException {

        Employee employee =

                employeeRepository
                        .findById(employeeId)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Employee not found"
                                )
                        );

        // CREATE uploads DIRECTORY

        File uploadDir =
                new File(UPLOAD_DIR);

        if (!uploadDir.exists()) {

            uploadDir.mkdirs();
        }

        // SAFE FILE NAME

        String fileName =

                System.currentTimeMillis()

                        + "_"

                        + file.getOriginalFilename()
                        .replace(" ", "_")
                        .replace("[", "")
                        .replace("]", "");

        // FILE PATH

        String filePath =

                UPLOAD_DIR +

                        fileName;

        // SAVE FILE

        File destinationFile =
                new File(filePath);

        file.transferTo(destinationFile);

        // SAVE DB RECORD

        Document document =

                Document.builder()

                        .fileName(
                                fileName
                        )

                        .fileType(
                                file.getContentType()
                        )

                        .filePath(
                                filePath
                        )

                        .employee(employee)

                        .build();

        return documentRepository
                .save(document);
    }

    // GET EMPLOYEE DOCUMENTS

    public List<Document>
    getEmployeeDocuments(
            Long employeeId
    ) {

        return documentRepository
                .findByEmployeeId(
                        employeeId
                );
    }

    // DOWNLOAD DOCUMENT

    public Resource downloadDocument(

            Long documentId

    ) throws MalformedURLException {

        Document document =

                documentRepository
                        .findById(documentId)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Document not found"
                                )
                        );

        Path path =

                Paths.get(
                        document.getFilePath()
                );

        return new UrlResource(
                path.toUri()
        );
    }

    // UPLOAD PROFILE IMAGE

    public Employee uploadProfileImage(

            Long employeeId,

            MultipartFile file

    ) throws IOException {

        Employee employee =

                employeeRepository
                        .findById(employeeId)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Employee not found"
                                )
                        );

        // CREATE uploads DIRECTORY

        File uploadDir =
                new File(UPLOAD_DIR);

        if (!uploadDir.exists()) {

            uploadDir.mkdirs();
        }

        // SAFE FILE NAME

        String fileName =

                System.currentTimeMillis()

                        + "_"

                        + file.getOriginalFilename()
                        .replace(" ", "_")
                        .replace("[", "")
                        .replace("]", "");

        // FILE PATH

        String filePath =

                UPLOAD_DIR +

                        fileName;

        // SAVE FILE

        File destinationFile =
                new File(filePath);

        file.transferTo(destinationFile);

        // SAVE IMAGE PATH

        employee.setProfileImage(
                fileName
        );

        return employeeRepository
                .save(employee);
    }
}