import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: colors.primary500 }}
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
    backgroundColor: colors.primary600,
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
