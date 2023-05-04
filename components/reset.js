import { Button, View } from 'react-native'

export default function Reset() {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Button
        title="Reset"
        onPress={() => {
          IntakeStorage.clear()
          refreshData()
        }}
      />
    </View>
  )
}
