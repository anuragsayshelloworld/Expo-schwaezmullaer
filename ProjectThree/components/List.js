import { View, StyleSheet, Text } from "react-native";

export default function List({ data }) {
  return (
    <>
      {data.map((meal) => {
        return (
          <View key={meal} style={styles.listContainer}>
            <Text style={styles.itemText}>{meal}</Text>
          </View>
        );
      })}
    </>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  itemText: {
    textAlign: "center",
  },
});
