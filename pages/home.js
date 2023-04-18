import * as React from 'react'
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Enter from '../components/enter'

const images = [
  { id: 1, uri: require('../assets/img5.jpg') },
  { id: 2, uri: require('../assets/img6.jpg') },
  { id: 3, uri: require('../assets/img7.png') },
]

export default function Home() {
  return (
    <ScrollView>
      <Enter />
      <View style={styles.container}>
        {images.map((image) => (
          <TouchableOpacity key={image.id}>
            <Image source={image.uri} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  image: {
    margin: 10,
    height: 300,
    width: '100%',
  },
})
