import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";

export default function MealDetailsScreen() {
  const route = useRoute();
  const { mealId } = route.params;
  return <Text>This is {mealId}</Text>;
}
