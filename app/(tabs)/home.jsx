import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Top from '../../components/top'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useNavigation } from 'expo-router'
import Menu from '../../components/Menu'
import Promos from '../../components/Promos'

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#00000f]">
      <Top />
      <ScrollView>
      <StatusBar barStyle="light-content" />
        <View className="bg-[#00000f]">
          <Text className="font-smregular text-2xl ml-3 color-white">Your Korean food adventure</Text>
          <Text className="font-smregular text-2xl ml-3 color-white">starts here.</Text>
          <Image
          source={require('../../assets/pictures/bibimbap.png')} 
          style={{height: 120, width: 250, marginLeft: 130}}/>

        <View style={{width: 120, left: 14, bottom: 80}} classname="space-y-4 ">
            <TouchableOpacity 
            onPress={() => navigation.navigate('foods')}
            className="py-3" style={{backgroundColor: "#D1A23B", borderRadius: 200}}>
              <Text style={{fontSize: 16, fontWeight: "bold", left: 13}}>
                ORDER NOW
              </Text>
            </TouchableOpacity>
        </View>
        </View>
       
        <View className="bg-black bottom-12" style={{borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
          <Text className="font-fsemibold text-2xl ml-5 mt-3 color-white">Menu</Text>
          <Menu />
          <Link className="font-bold underline underline-offset-1 left-72 color-white" style={{bottom: 182}} 
          href="/foods">View All</Link>
        
        <View className="bg-[#1B1212]">
        <ImageBackground
          source={require('../../assets/pictures/firebg.jpg')} 
          style={{height: 220, width: 360, opacity: 0.8}}>
        <Text className="font-namsterdam color-white text-2xl ml-3 top-3">New Product</Text>
        <Text className="font-pacifico color-white ml-3" style={{fontSize: 37}}>Korean Spicy Chicken</Text>
        <Text className="font-fregular color-white left-6 bottom-3" style={{fontSize: 14}}>Fire in Every Bite</Text>
        <View style={{width: 100, left: 14, top: 20}} classname="space-y-4 ">
            <TouchableOpacity 
            onPress={() => navigation.navigate('chicken')}
            className="py-3" style={{backgroundColor: "#F23005", borderRadius: 200}}>
              <Text style={{fontSize: 16, fontWeight: "bold", left: 18, color: "white"}}>
                Buy Now
              </Text>
            </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/pictures/spicychicken.png')} 
          style={{height: 200, width: 250, left: 100, bottom: 120}}/>
          </ImageBackground>
        </View>
        
        <View className="bg-orange-300" >
        <ImageBackground
          source={require('../../assets/pictures/party.png')} 
          style={{ width: 360}}>
        <Text className="font-fbold text-2xl ml-3 top-3">Promos</Text>
        <Text className="font-fsemibold ml-3 mt-3 top-1" style={{fontSize: 12}}>
          We're committed to providing you with the best value.{'\n'}
          Use your promos to save more!</Text>
        <Promos />
        <Link className="font-bold underline underline-offset-1 left-72" style={{bottom: 215}} 
          href="/promo">View All</Link>
          </ImageBackground>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home