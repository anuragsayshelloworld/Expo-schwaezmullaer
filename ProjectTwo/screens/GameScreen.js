import { View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/instructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ incomingNumber, setIsGameOver, setGuessRounds }) {
  const initialNumber = generateRandomNumber(
    minBoundary,
    maxBoundary,
    incomingNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialNumber);
  const [guessNumber, setGuessNumber] = useState([initialNumber]);

  function nextGuessHandler(direction) {
    setGuessRounds((previous) => previous + 1);
    if (
      (direction === "lower" && currentGuess < incomingNumber) ||
      (direction === "higher" && currentGuess > incomingNumber)
    ) {
      Alert.alert("Do not lie", "You know that this is wrong..", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessNumber((prev) => [...prev, newRandomNumber]);
  }
  useEffect(() => {
    if (currentGuess === incomingNumber) {
      setIsGameOver(true);
    }
  }, [currentGuess, incomingNumber, setIsGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View style={styles.controls}>
          <InstructionText>Higher or Lower</InstructionText>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={24} />
            </PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={styles.logRounds}>
        <FlatList
          data={guessNumber}
          renderItem={(itemData) => (
            <GuessLogItem number={itemData.index + 1} text={itemData.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: "center", // center all children horizontally
  },
  controls: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 0, // React Native doesn't support 'gap'
  },
  logRounds: {
    marginTop: 20,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
});
