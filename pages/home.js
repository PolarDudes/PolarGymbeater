import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import Enter from '../components/enter'

export default function Home() {
  const [boxes, setBoxes] = useState([
    { name: 'Enter calories', key: '1' },
    { name: 'Graph', key: '2' },
    { name: 'Settings', key: '3' },
  ])

  return (
    <View style={styles.container}>
      {/* <Enter /> */}
      <FlatList
        data={boxes}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#15171B',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#E41717',
    fontSize: 24,
  },
})
