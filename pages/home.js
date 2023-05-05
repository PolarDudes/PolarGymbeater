import React from "react";
import { ScrollView, View } from "react-native";

import Enter from "../components/enter";
import HeartBeat from "../components/heartbeats";
import Reset from "../components/reset";

export default function Home() {
  const [refresh, setRefresh] = React.useState(false);

  const refreshData = () => setRefresh(!refresh);

  return (
    <ScrollView style={{ backgroundColor: "#15171B", padding: 10 }}>
      <View style={{ gap: 10 }}>
        <Enter onDataChange={() => refreshData()} />
        <HeartBeat />
        <Reset />
      </View>
    </ScrollView>
  );
}
