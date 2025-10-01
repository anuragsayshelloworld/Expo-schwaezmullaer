import { Text } from "react-native";

export default function MealDetail({ route }) {
  const mealId = route.params.mealId;
  return <Text>Hellow {mealId}</Text>;
}
