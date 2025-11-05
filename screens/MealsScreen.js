import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => {
        return category.id === categoryId;
      }).title,
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  return <MealsList items={displayedMeals} />;
}
