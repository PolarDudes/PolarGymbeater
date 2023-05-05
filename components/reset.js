import { useState } from "react";
import { Button, View } from "react-native";

import IntakeStorage from "../class/intakeStorage";

export default function Reset() {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={{ justifyContent: "center" }}>
      {pressed ? (
        <Button
          title="Reset"
          onPress={() => {
            IntakeStorage.clear();
            setPressed(false);
          }}
        />
      ) : (
        <Button title="" onPress={() => setPressed(true)} />
      )}
    </View>
  );
}
