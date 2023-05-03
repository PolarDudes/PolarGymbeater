import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function HeartBeat() {
  return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
      <View style={styles.components}>
        <Ionicons name="pulse-outline" />
        <Text>HeartBeat</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  components: {
    flex: 1,
  },
})
