import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsScreen from "./screens/MealsScreen";

const Stack = createNativeStackNavigator();

const screenStyle = {
  headerStyle: { backgroundColor: "#837c5aff" },
  headerTintColor: "white",
  contentStyle: { backgroundColor: "#827f6eff" },
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenStyle}>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
