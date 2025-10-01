import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ElaborateMealDetail from "./ElaborateMealDetail";

export default function MealItem({
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
  id,
}) {
  const navigate = useNavigation();
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={() => navigate.navigate("mealdetail", { mealId: id })}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.img} />
          <Text style={styles.title}>{title}</Text>
          <ElaborateMealDetail
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 12,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
