import React from 'react'
import { ScrollView, View, Button } from 'react-native'

import IntakeStorage from '../class/intakeStorage.js'

import Enter from '../components/enter'
import Graph from './graph'
import History from './historyforgraph.js'

export default function Home() {
  const [refresh, setRefresh] = React.useState(false)

  const refreshData = () => setRefresh(!refresh)

  return (
    <ScrollView style={{ backgroundColor: '#15171B', padding: 10 }}>
      <Enter onDataChange={() => refreshData()} />
      <Graph onDataChange={refresh} />
      <History onDataChange={refresh} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          title="Reset"
          onPress={() => {
            IntakeStorage.clear()
            refreshData()
          }}
        />
      </View>
    </ScrollView>
  )
}
