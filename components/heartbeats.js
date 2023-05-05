import { useContext } from "react";
import { View } from "react-native";
import { PolarContext } from "../context/polarContext";
import Beat from "./heart";

export default function HeartBeat() {
  const { exerciseData } = useContext(PolarContext);

  const average =
    exerciseData.map((i) => i.heart_rate.average).reduce((a, b) => a + b) /
    exerciseData.length;
  const max = Math.max(exerciseData.map((i) => i.heart_rate.maximum));

  return (
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}
    >
      <Beat title={"Avg"} value={average} />
      <Beat title={"Max"} value={max} />
    </View>
  );
}
