import {SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import ErrorBoundary from './src/Component/ErrorBoundary'
export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ErrorBoundary>
          <Text>App</Text>jhk
        </ErrorBoundary>
        
      </SafeAreaView>
    )
  }
}