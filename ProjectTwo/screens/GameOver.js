import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import { colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({ rounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    overflow: "hidden",
    borderColor: colors.primary600,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryText: {
    fontFamily: "openSansRegular",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "openSansBold",
    color: colors.primary500,
  },
});
