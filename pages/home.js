import React from 'react'
import { ScrollView } from 'react-native'

import Enter from '../components/enter'
import HeartBeat from '../components/heartbeat'

export default function Home() {
  const [refresh, setRefresh] = React.useState(false)

  const refreshData = () => setRefresh(!refresh)

  return (
    <ScrollView style={{ backgroundColor: '#15171B', padding: 10 }}>
      <Enter onDataChange={() => refreshData()} />
      <HeartBeat />
      {/* <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          title="Reset"
          onPress={() => {
            IntakeStorage.clear()
            refreshData()
          }}
        />
      </View> */}
    </ScrollView>
  )
}
