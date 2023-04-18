import * as React from 'react'
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const images = [
  { id: 1, uri: require('../assets/img5.jpg') },
  { id: 2, uri: require('../assets/img6.jpg') },
  { id: 3, uri: require('../assets/img7.png') },
]

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {images.map((image) => (
          <TouchableOpacity key={image.id}>
            <View style={{ height: 300, margin: 20, marginLeft: 10 }}>
              <Image
                source={image.uri}
                style={{ flex: 1, width: 370, borderRadius: 10 }}
              />
            </View>
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
})
