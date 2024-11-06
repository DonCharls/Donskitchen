import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Top from '../../components/top'

const Location = () => {
  return (
    <SafeAreaView className="bg-white">
      <Top />
      <ScrollView>
      <View className="items-center">
          <Text className="font-namsterdam text-9xl">LOCATION</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Location

const styles = StyleSheet.create({})