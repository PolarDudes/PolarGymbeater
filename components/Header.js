import * as React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function Header() {
  {
    return (
      <View style={styles.header}>
        <Image
          resizeMode="cover"
          style={{
            width: 150,
            height: 90,
            marginTop: 35,
            left: 125,
            alignSelf: "baseline",
          }}
          source={require("../assets/logo.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "10%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
