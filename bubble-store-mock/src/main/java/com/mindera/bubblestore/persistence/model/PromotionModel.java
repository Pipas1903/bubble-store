package com.mindera.bubblestore.persistence.model;

import com.mindera.bubblestore.enumerators.WiremockPromotionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@AllArgsConstructor
@Data
@Builder
public class PromotionModel {
    private String id;
    private WiremockPromotionType type;
    private Integer requiredQty;
    private BigDecimal price;
    private Integer freeQty;
    private Integer amount;
    private boolean freeShipping;
}
