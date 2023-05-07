import React from 'react'
import { LineChart } from 'react-native-chart-kit' //You will need to install and import this to make the graph work, npm install react-native-chart-kit
import { useContext } from 'react'
import { PolarContext } from '../context/polarContext.js'
import { Dimensions } from 'react-native'
import IntakeStorage from '../class/intakeStorage.js'


const Graph = (props) => {
  const { exerciseData } = useContext(PolarContext) //fetching the data we need from the polarcontext
  const [calorieData, setCalorieData] = React.useState([])  

  React.useEffect(() => {
    const data = []
    exerciseData.forEach((exercise) => {
      data.push({
        date: Date.parse(exercise['start_time']),
        calories: -exercise['calories'],  //Making the graph show lost calories in negative numbers
      })
    })

    if (IntakeStorage.get().length > 0) {
      IntakeStorage.get().forEach((intake) => {
        data.push({
          date: intake['date'],
          calories: intake['calories'], //getting date and calories from storage
        })
      })
    }
    console.log('Graph', data)

    data.sort((a, b) => a['date'] - b['date'])

    let currentCalories = [0]
    data.forEach((x) => {
      currentCalories.push(
        currentCalories[currentCalories.length - 1] + Number(x['calories'])
      )
    })
    setCalorieData(currentCalories)
    console.log('CalorieData', calorieData)
  }, [props.onDataChange])

  return (
    <>
      <LineChart //the type of the graph from react native chart kit
        data={{

          datasets: [
            {
              data: [0, ...calorieData],
              color: (opacity = 255) => `rgba(51, 255, 255, ${opacity})`,
            },
            {
              data: [2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500], //Calorie target, hard coded for now
              color: (opacity = 255) => `rgba(102, 240, 0, ${opacity})`,
              withDots: true,
            },
          ],
        }}
        withShadow={false}
        withDots={true}
        width={Dimensions.get('window').width - 16}
        height={250}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#000000',
          backgroundGradientTo: '#E41717',
          decimalPlaces: 2,
          color: (opacity = 255) => `rgba(255, 255, 255, ${opacity})`,

          style: {
            borderRadius: 16,
          },
        }}
        bezier //Graph type to make the corners smooth
        style={{
          marginVertical: 10,
          marginHorizontal: 7,
          borderRadius: 16,
        }}
      />
    </>
  )
}

export default Graph
