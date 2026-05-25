package com.shialapuff.process.dto;

import lombok.Data;
import java.time.LocalDate;
import java.util.List;

@Data
public class RecipeDto {
    private String name;
    private String description;
    private List<IngredientDto> ingredients;
}
