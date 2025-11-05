import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const screenStyle = {
  headerStyle: { backgroundColor: "#837c5aff" },
  headerTintColor: "white",
  contentStyle: { backgroundColor: "#827f6eff" },
};

const drawerStyle = {
  headerStyle: { backgroundColor: "#837c5aff" },
  headerTintColor: "white",
  sceneStyle: { backgroundColor: "#827f6eff" },
  drawerContentStyle: { backgroundColor: "#837c5aff" },
  drawerInactiveTintColor: "white",
  drawerActiveTintColor: "#ede9d3ff",
  drawerActiveBackgroundColor: "#52470aff",
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={drawerStyle}>
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="fast-food" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenStyle}>
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                title: "Meal Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals" component={MealsScreen} />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailsScreen}
              options={{
                title: "About the meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
