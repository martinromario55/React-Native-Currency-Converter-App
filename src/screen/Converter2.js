import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { FontAwesome } from '@expo/vector-icons'

const Converter2 = () => {
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchateRate] = useState(0)
  const [currencies, setCurrencies] = useState([])

  const convertCurrency = () => {
    let result = (amount * exchangeRate).toFixed(2)
    return result
  }

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          'https://v6.exchangerate-api.com/v6/ed39da325537ca660facdf4d/latest/USD'
        )
        const data = await response.json()
        setCurrencies(Object.keys(data.conversion_rates))
        setExchateRate(data.conversion_rates[toCurrency])
      } catch (error) {
        console.log(error)
      }
    }
    fetchCurrencies()
  }, [toCurrency])

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/ed39da325537ca660facdf4d/latest/${fromCurrency}`
        )
        const data = await response.json()
        setExchateRate(data.conversion_rates[toCurrency])
      } catch (error) {
        console.log(error)
      }
    }
    fetchExchangeRates()
  }, [fromCurrency, toCurrency])

  return (
    <View style={styles.conatiner} onPress={Keyboard.dismiss}>
      <Image source={require('../../assets/money.png')} style={styles.image} />
      <Text style={styles.title}>Currency Converter</Text>

      <TextInput
        style={styles.input}
        value={amount.toString()}
        onChangeText={text => setAmount(parseFloat(text || 0))}
        keyboardType="numeric"
      />
      <View style={styles.resultView}>
        <Text style={styles.result}>
          {amount} {fromCurrency}{' '}
          <FontAwesome name="exchange" size={20} color="grey" />{' '}
          {convertCurrency()} {toCurrency}
        </Text>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={fromCurrency}
          onValueChange={itemValue => setFromCurrency(itemValue)}
        >
          {currencies.map((currency, index) => (
            <Picker.Item key={index} label={currency} value={currency} />
          ))}
        </Picker>

        <Picker
          style={styles.picker}
          selectedValue={toCurrency}
          onValueChange={itemValue => setToCurrency(itemValue)}
        >
          {currencies.map((currency, index) => (
            <Picker.Item key={index} label={currency} value={currency} />
          ))}
        </Picker>
      </View>
    </View>
  )
}

export default Converter2

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dff8e6',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 28,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  picker: {
    flex: 1,
    height: 50,
    marginHorizontal: 10,
  },
  resultView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1d3627',
  },
})
