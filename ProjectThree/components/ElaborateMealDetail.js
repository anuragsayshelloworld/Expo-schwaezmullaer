import { StyleSheet, Text, View } from "react-native";

export default function ElaborateMealDetail({
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsItems}>{duration} minutes</Text>
      <Text style={styles.detailsItems}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailsItems}>{affordability.toUpperCase()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItems: {
    marginHorizontal: 6,
    fontSize: 13,
    color: "#444",
  },
});
