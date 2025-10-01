import { StyleSheet, Text } from "react-native";

export default function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}
const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
    padding: 6,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    marginVertical: 4,
    marginHorizontal: 24,
  },
});
