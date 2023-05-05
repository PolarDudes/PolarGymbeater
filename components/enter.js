import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from "react-native";
import IntakeStorage from "../class/intakeStorage";

export default function Enter() {
  const [expanded, setExpanded] = useState(false);
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [data, setData] = useState(IntakeStorage.get());

  const saveData = () => {
    let currentData = IntakeStorage.get();
    currentData.push({ date: Date.now(), food: food, calories: calories });
    IntakeStorage.store(currentData);
    setData(currentData);

    setCalories("");
    setFood("");
    setExpanded(false);
  };

  return (
    <>
      {expanded ? (
        <View style={styles.main}>
          <TextInput
            autoFocus={true}
            onChangeText={(text) => setFood(text)}
            onSubmitEditing={() => this.calories.focus()}
            placeholder="What did you eat?"
            returnKeyType="next"
            style={styles.input}
            value={food}
          />
          <TextInput
            keyboardType="number-pad"
            onChangeText={(text) => setCalories(text)}
            onSubmitEditing={() => saveData()}
            placeholder="Enter calories"
            ref={(input) => (this.calories = input)}
            returnKeyType="done"
            style={styles.input}
            value={calories}
          />
          <Button title="Submit" onPress={() => saveData()} />
        </View>
      ) : (
        <TouchableOpacity style={styles.main} onPress={() => setExpanded(true)}>
          <Text style={{ fontSize: 40 }}>Enter calories</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBEEF0",
    borderRadius: 10,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    fontSize: 20,
    alignItems: "center",
  },
});
