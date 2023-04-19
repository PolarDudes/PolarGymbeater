import React from "react";
import { LineChart } from "react-native-chart-kit";
import { useContext } from "react";
import { PolarContext } from "../context/polarContext.js";
import { Text, StyleSheet, Dimensions } from "react-native";

const Graph = () => {
  const { exerciseData } = useContext(PolarContext);
  datas = exerciseData[0]["calories"] + exerciseData[1]["calories"];

  return (
    <>
      <Text style={styles.header}>Total calories </Text>
      <LineChart
        data={{
          //labels: ["days:"],

          datasets: [
            {
              data: [0, -datas],
              color: (opacity = 255) => `rgba(51, 255, 255, ${opacity})`,
            },
            {
              data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
              color: (opacity = 255) => `rgba(255, 255, 255, ${opacity})`,
              withDots: false,
            },
          ],
        }}
        withShadow={false}
        withDots={true}
        width={Dimensions.get("window").width - 16}
        height={250}
        yAxisLabel={""}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#000000",
          backgroundGradientTo: "#E41717",
          decimalPlaces: 2,
          color: (opacity = 255) => `rgba(255, 255, 255, ${opacity})`,

          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 10,
          marginHorizontal: 7,
          borderRadius: 16,
        }}
      />
    </>
  );
};

export default Graph;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
