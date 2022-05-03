package com.mindera.bubblestore.persistence.repository;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mindera.bubblestore.persistence.model.ProductModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@AllArgsConstructor
@Component
public class Repository {
    private final String productsFilePath = "src/main/resources/products.json";

    private String readJson() throws IOException {
        Path fileName = Path.of(productsFilePath);
        return Files.readString(fileName);
    }

    public final List<ProductModel> transformJsonToList() {
        List<ProductModel> productList = new ArrayList<>();
        try {
            String jsonContent = readJson();
            ObjectMapper objectMapper = new ObjectMapper();
            productList = objectMapper.readValue(jsonContent, new TypeReference<List<ProductModel>>() {});
        } catch (Exception e) {
            e.printStackTrace();
        }
        return productList;
    }
}
