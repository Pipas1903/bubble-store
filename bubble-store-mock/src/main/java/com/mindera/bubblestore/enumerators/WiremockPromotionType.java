package com.mindera.bubblestore.enumerators;

import com.mindera.bubblestore.persistence.model.PromotionModel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
public enum WiremockPromotionType {
    GET_2_FOR_1(Arrays.asList("034", "002", "004", "023", "029", "001"), 2, null, 1, null, false),
    GET_50PERCENT_OFF_ON_SECOND_UNIT(Arrays.asList("003", "005", "010", "014", "016"), 2, new BigDecimal("0.5"), null, null, false),
    GET_20PERCENT_OFF(Arrays.asList("009", "008", "007"), null, new BigDecimal("0.2"), null, null, false),
    FREE_SHIPPING(Arrays.asList("001", "002", "034",
            "014", "010", "016",
            "023", "031", "032",
            "030", "020", "015",
            "026", "025", "029"), null, null, null, null, true);

    private List<String> products;

    private Integer requiredQty;
    private BigDecimal price;
    private Integer freeQty;
    private Integer amount;
    private boolean freeShipping;

    public static List<PromotionModel> getByProductId(String productId) {
        return Arrays.stream(WiremockPromotionType.values())
                .filter(mock -> mock.getProducts().contains(productId))
                .map(mock -> PromotionModel.builder()
                        .amount(mock.getAmount())
                        .freeQty(mock.getFreeQty())
                        .type(mock)
                        .price(mock.getPrice())
                        .freeShipping(mock.isFreeShipping())
                        .id(productId)
                        .requiredQty(mock.getRequiredQty())
                        .build())
                .collect(Collectors.toList());
    }
}
