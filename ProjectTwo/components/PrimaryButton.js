import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressed, // fallback for iOS
        ]}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // this ensures ripple stays inside rounded corners
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 60,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 11,
  },
  pressed: {
    opacity: 0.75, // iOS fallback (since ripple is Android-only)
  },
});
