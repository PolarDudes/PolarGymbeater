import React, { useState } from 'react'
import { TextInput, View, SafeAreaView, Text } from 'react-native'

export default function Enter() {
  const [food, setFood] = useState('')
  const [calories, setCalories] = useState('')

  const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', margin: '5%' }}>
      <Text>At {date}</Text>
      <TextInput
        style={{
          height: '10%',
          borderWidth: 1,
          width: '100%',
        }}
        placeholder="What did you ate?"
        onChangeText={setFood}
        value={food}
      />
      <TextInput
        style={{ height: '10%', borderWidth: 1, flex: 1 }}
        placeholder="How many calories?"
        onChangeText={setCalories}
        value={calories}
      />
    </SafeAreaView>
  )
}
