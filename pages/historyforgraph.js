// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState } from 'react'
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native'

import IntakeStorage from '../class/intakeStorage'

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [card, setCard] = useState(0)
  const [layoutHeight, setLayoutHeight] = useState(0)

  useEffect(() => {
    if (item.isExpanded) {
      setCard(0)
      setLayoutHeight(null)
    } else {
      setLayoutHeight(0)
      setCard(1)
    }
  }, [item.isExpanded])

  var arrayimg = [
    require('../assets/32213.png'),
    require('../assets/32214.png'),
  ]

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}
      >
        <View style={styles.row}>
          <Text style={styles.headerText}>{item.category_name} : </Text>
          <Text style={styles.caloriesText}>{item.total}</Text>
          <Text style={styles.clrText}> cal</Text>
          <Image
            style={{
              width: 20,
              height: 20,
              flex: 1,
              alignSelf: 'flex-end',
            }}
            resizeMode="contain"
            source={arrayimg[card]}
          />
        </View>

        <View
          style={{
            height: layoutHeight,
            overflow: 'hidden',
          }}
        >
          {/*Content under the header of the Expandable List Item*/}
          {item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.content}
              onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}
            >
              <Text style={styles.text}>
                {key}. {item.id}: {item.val}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  )
}

const App = (props) => {
  const [listDataSource, setListDataSource] = useState([])
  const [multiSelect, setMultiSelect] = useState(false)

  useEffect(() => {
    let total = 0
    let subcategory = []
    IntakeStorage.get().forEach((element) => {
      console.log(element)
      console.log(typeof Number(element.calories))
      total += Number(element.calories)
      subcategory.push({ id: element.food, val: element.calories })
    })

    console.log('Subcategory', subcategory)

    setListDataSource([
      {
        isExpanded: false,
        category_name: 'Breakfast',
        total: total,
        subcategory: subcategory,
      },
    ])

    console.log('ListDataSource', listDataSource)
  }, [props.onDataChange])

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    //sssss
    const array = [...listDataSource]
    console.log(array)

    // If single select is enabled
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        : (array[placeindex]['isExpanded'] = false)
    )

    setListDataSource(array)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', padding: 10 }}></View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key)
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8D97B9',
    flex: 1,
  },
  titleText: {
    flex: 1,
    borderRadius: 30,
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginHorizontal: 25,
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  caloriesText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  clrText: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 5,
  },
  text: {
    height: null,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#8D97B9',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
})

export default App
