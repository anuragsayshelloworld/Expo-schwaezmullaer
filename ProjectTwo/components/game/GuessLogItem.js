import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

function GuessLogItem({ number, text }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{number}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {text}</Text>
    </View>
  );
}
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    borderColor: colors.primary700,
    marginVertical: 8,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "openSansRegular",
  },
});
