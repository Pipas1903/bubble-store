package com.mindera.bubblestore.controller;

import com.mindera.bubblestore.persistence.model.ProductModel;
import com.mindera.bubblestore.service.WiremockService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@AllArgsConstructor
public class WiremockController {

    private final WiremockService service;

    @GetMapping("/products")
    public ResponseEntity<List<ProductModel>> getAllProducts() {
        return ResponseEntity.ok(service.getAllProducts());
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<ProductModel> getProductById(@PathVariable String productId) {
        return ResponseEntity.ok(service.getProductById(productId));
    }
}
