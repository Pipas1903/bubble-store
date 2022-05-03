package com.mindera.bubblestore.service;

import com.mindera.bubblestore.enumerators.WiremockPromotionType;
import com.mindera.bubblestore.persistence.model.ProductModel;
import com.mindera.bubblestore.persistence.repository.Repository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class WiremockService {
    private final Repository repository;

    public final List<ProductModel> getAllProducts() {
        return repository.transformJsonToList();
    }

    public final ProductModel getProductById(String id) {
        final var list = repository.transformJsonToList();

        ProductModel product = list.stream()
                .filter(productModel -> id.equals(productModel.getId()))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);

        product.setPromotionList(WiremockPromotionType.getByProductId(id));
        return product;
    }

}
