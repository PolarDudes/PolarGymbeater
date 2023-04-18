import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Dimensions } from 'react-native'

export default function Enter() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {expanded ? (
        <>
          <View onPress={() => console.log('pressed')} />
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
