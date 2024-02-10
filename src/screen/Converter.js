import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Form from '../components/Form'

const Converter = () => {
  const { header, headerText, headerDescription } = styles
  return (
    <>
      <View style={header}>
        <Text style={headerText}> Currency Converter</Text>
        <Text style={headerDescription}>Check live foreign exchage rates</Text>
      </View>

      <Form />
    </>
  )
}

export default Converter

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1746A2',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
  },
  headerDescription: {
    color: '#fff',
    fontSize: 15,
    paddingTop: 5,
  },
})
