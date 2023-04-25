import React from 'react'
import { PolarContext } from '../context/polarContext'
import IntakeStorage from '../class/intakeStorage'

export default function getCalories() {
  const { burned } = React.useContext(PolarContext)
  const eaten = IntakeStorage.get()

  const timeOffSet = 10800000

  let total = 0
  let data = []
  let subData = []

  console.log('eaten', eaten)

  if (eaten.length > 0) {
    const sorted = eaten.sort((a, b) => b.date - a.date)
    sorted.forEach((food) => {
      total += Number(food.calories)

      subData.push({
        id: food.food,
        val: food.calories,
        date: new Date(food.date + timeOffSet),
      })
    })
  }

  console.log('subData', subData)
}
