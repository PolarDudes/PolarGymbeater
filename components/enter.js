import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Dimensions } from 'react-native'

export default function Enter() {
  const [width, height] = [
    Dimensions.get('window').width,
    Dimensions.get('window').height,
  ]
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {expanded ? (
        <>
          <View
            onPress={() => console.log('pressed')}
            style={{
              width: width,
              height: height,
              position: 'absolute',
              // zIndex: 1,
            }}
          />
          <View>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
          </View>
        </>
      ) : (
        <TouchableOpacity onPress={() => setExpanded(true)}>
          <Text>Enter calories</Text>
        </TouchableOpacity>
      )}
    </>
  )
}
