import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignContent: "center",
    justifyContent: "center",
  },
  textStyle: { color: colors.accent500, fontSize: 36, fontWeight: "bold" },
});
