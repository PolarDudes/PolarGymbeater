import { ScrollView } from 'react-native'

import Graph from './graph'
import HistoryForGraph from './historyforgraph'

export default function History() {
  return (
    <ScrollView>
      <Graph />
      <HistoryForGraph />
    </ScrollView>
  )
}
