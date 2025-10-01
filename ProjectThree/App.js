import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourite from "./screens/FavouriteScreen";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  <Drawer.Navigator>
    <Drawer.Screen name="Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Favourites" component={Favourite} />
  </Drawer.Navigator>;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{ title: "All Categories", headerShown: false }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
          <Stack.Screen name="mealdetail" component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
