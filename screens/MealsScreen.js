import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

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

  function renderMealItem(itemData) {
    return <MealItem meal={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
