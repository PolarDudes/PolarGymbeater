import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native'
import IntakeStorage from '../class/intakeStorage'

export default function Enter() {
  const [expanded, setExpanded] = useState(false)
  const [Food, setFood] = useState('')
  const [Calories, setCalories] = useState('')
  const [Data, setData] = useState([])

  React.useEffect(() => {
    let didCancel = false

    if (!didCancel) {
      IntakeStorage.get()
        .then((data) => {
          if (data != null) {
            setData(data)
          }
        })
        .catch((e) => console.error(e))
    }

    return () => (didCancel = true)
  }, [])

  const saveData = () => {
    let currentData = Data
    currentData.push({ Date: Date.now(), Food: Food, Calories: Calories })
    IntakeStorage.store(currentData)
    setData(currentData)
    setCalories('')
    setFood('')
    setExpanded(false)
    console.log(Data)
  }

  return (
    <>
      {expanded ? (
        <View style={styles.main}>
          <TextInput
            placeholder="What did you eat?"
            style={styles.input}
            onChangeText={(text) => setFood(text)}
            value={Food}
            autoFocus={true}
          />
          <TextInput
            placeholder="Enter calories"
            style={styles.input}
            onChangeText={(text) => setCalories(text)}
            value={Calories}
            keyboardType="numeric"
          />
          <Button title="Submit" onPress={() => saveData()} />
        </View>
      ) : (
        <TouchableOpacity style={styles.main} onPress={() => setExpanded(true)}>
          <Text style={{ fontSize: 40 }}>Enter calories</Text>
        </TouchableOpacity>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF0',
    borderRadius: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    fontSize: 20,
    alignItems: 'center',
  },
})
