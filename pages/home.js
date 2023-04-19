import * as React from 'react'
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import Enter from '../components/enter'
import Graph from '../pages/graph'

export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: '#15171B', padding: 10 }}>
      <Enter />
      <Graph />
    </ScrollView>
  )
}
