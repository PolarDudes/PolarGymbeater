import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')
const boxDiv = 2.5,
  iconDiv = 4

export default function Beat(props) {
  console.log('Dimension', width)

  return (
    <View style={styles.box}>
      <View>
        <Ionicons name="heart" style={styles.heartIcon} />
        <Ionicons name="pulse-outline" style={styles.pulseIcon} />
      </View>
      <Text style={{ color: '#E41717', fontSize: width / (iconDiv + 15) }}>
        {props.title} {props.value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    borderColor: '#E41717',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / boxDiv,
    height: width / boxDiv,
    backgroundColor: '#15171B',
  },
  heartIcon: {
    color: '#E41717',
    fontSize: width / iconDiv,
  },
  pulseIcon: {
    ...StyleSheet.absoluteFillObject,
    fontSize: width / (iconDiv + 3),
    color: '#fff',
    top: width / (iconDiv + 14),
    left: width / (iconDiv + 14),
  },
})
