import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import ElaborateMealDetail from "../components/ElaborateMealDetail";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
export default function MealDetail({ route, navigation }) {
  const mealId = route.params.mealId;
  const requiredMeal = MEALS.find((item) => item.id === mealId);
  function handleHeaderButtonOnPressFunction() {
    console.log("Button Pressed!");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button title="Tap Me!" onPress={handleHeaderButtonOnPressFunction} />
        );
      },
    });
  }, [navigation, handleHeaderButtonOnPressFunction]);
  return (
    <View>
      <Image source={{ uri: requiredMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{requiredMeal.title}</Text>
      <View>
        <ElaborateMealDetail
          duration={requiredMeal.duration}
          complexity={requiredMeal.complexity}
          affordability={requiredMeal.affordability}
        />
      </View>

      <ScrollView style={{ height: 320 }}>
        <Subtitle>Ingredients</Subtitle>
        <List data={requiredMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={requiredMeal.steps} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
});
