import {
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./constants/colors";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen
        incomingNumber={userNumber}
        setIsGameOver={setIsGameOver}
        setGuessRounds={setGuessRounds}
      />
    );
  }
  if (isGameOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        onStartNewGame={handleNewStart}
        rounds={guessRounds}
      />
    );
  }
  const [fontsLoaded] = useFonts({
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    openSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  function handleNewStart() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  return (
    <SafeAreaProvider>
      <LinearGradient
        style={styles.rootScreen}
        colors={[colors.primary700, colors.accent500]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
