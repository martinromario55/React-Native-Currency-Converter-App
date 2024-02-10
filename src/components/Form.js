import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import currencies from '../utilities/CommonCurrency'
const Form = () => {
  // countries
  let countriesOptions = []

  // Format CommonCurrency.js data
  Object.keys(currencies).map((currency, index) => {
    countriesOptions.push({
      value: currencies[currency].code,
      label: `${currencies[currency].code} - ${currencies[currency].name}`,
      name: currencies[currency].name,
      symbol: currencies[currency].symbol,
      index: index,
    })
  })
  console.log(countriesOptions[0])

  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState(
    countriesOptions[0]
  )
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState(
    countriesOptions[55]
  )

  const {
    formView,
    formStyle,
    amountText,
    input,
    resultView,
    resultText,
    resultDesc,
    swapIcon,
    infoText,
  } = styles
  return (
    <View style={formView}>
      <View style={formStyle}>
        <Text style={amountText}>Amount</Text>
        <TextInput value={1} placeholder="Enter amount" style={input} />
      </View>

      <View style={formStyle}>
        <Text style={amountText}>From</Text>
        <TextInput
          value={`${selectedCurrencyFrom}`}
          placeholder="USD - US Dollar"
          style={input}
        />
      </View>

      <View style={formStyle}>
        <Text style={amountText}>To</Text>
        <TextInput
          value={`${selectedCurrencyTo}`}
          placeholder="KES - Kenyan Shilling"
          style={input}
        />
      </View>

      <View style={swapIcon}>
        <MaterialIcons
          name="swap-horizontal-circle"
          size={40}
          color="#1746A2"
        />
      </View>

      <View style={formStyle}>
        <Button title="CONVERT" />
      </View>

      <View style={formStyle}>
        <Text style={resultText}>1 US Dollar = 160.24 Kenya Shillings</Text>
        <Text style={resultDesc}>1USD = 160.24 KES</Text>
      </View>

      <View
        style={[
          formStyle,
          {
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 5,
            backgroundColor: '#F2F7FE',
          },
        ]}
      >
        <Entypo name="info-with-circle" size={24} color="grey" />
        <Text style={infoText}>
          We use third party resources & the mid-market rate for our Converter.
          This is for informational purporses only. We do not claim this is the
          exact exchange rate.
        </Text>
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  formView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  formStyle: {
    marginVertical: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 25,
  },
  input: {
    height: 40,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#1746A2',
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
  },
  resultDesc: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  infoText: {
    fontSize: 10,
  },
})
