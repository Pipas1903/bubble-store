package com.mindera.bubblestore.persistence.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductModel {
    private String id;
    private String name;
    private BigDecimal price;
    private String description;
    private String ingredients;
    private BigInteger weight;
    private List<String> img;
    private Map<String, String> category;

    private List<PromotionModel> promotionList;

}
