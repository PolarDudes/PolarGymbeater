import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, View, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';



const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [textAge, onChangeAge] = React.useState('');
  const [textHeight, onChangeHeight] = React.useState('');
  const [textWeight, onChangeWeight] = React.useState('');
  const [selectedLanguage, setSelectedLanguage] = React.useState();



  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={textAge}
        placeholder="How old are you?"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeHeight}
        value={textHeight}
        placeholder="How tall are you (cm)? " 
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeWeight}
        value={textWeight}
        placeholder="How much you weight? (Kg)"
        keyboardType="numeric"
      />
      <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Male" value="male" />
  <Picker.Item label="Female" value="female" />
</Picker>
<Button
          title="Save"
          onPress={() => Alert.alert('Button pressed')}
        />
    </SafeAreaView>
    
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    margin: 8,
  },
  buttLay: {
    flexDirection: 'row',
    left: 100,

  },
});

export default TextInputExample;