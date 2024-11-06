import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Top from '../../components/top'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView className="bg-[#00000f]">
      <View className="bg-[#00000f] items-center mt-6" style={{height: 630}}>
      <Image source={require('../../assets/icons/menu.png')} 
          style={{height: 35, width: 35, borderRadius: 100, right: 138, tintColor: "white"}}/>
      <Image source={require('../../assets/pictures/profile.jpg')} 
          style={{height: 100, width: 100, borderRadius: 100, shadowColor: "black", marginTop: 20}}/>
      <Image source={require('../../assets/icons/edit.png')} 
          style={{height: 38, width: 38, borderRadius: 10, left: 138, bottom: 150, tintColor: "white"}}/>
      <Text className="font-pregular" style={{fontSize: 20, bottom: 25, color: "white"}}>Don Charls Bibat</Text>
      <Text className="font-pregular" style={{fontSize: 12, bottom: 30, opacity: 0.5, color: "white"}}>Web Developer</Text>
      
      <View className="flex-row mt-11">
        <TouchableOpacity>
          <Image source={require('../../assets/icons/user.png')} 
          style={{height: 23, width: 23, right: 70, tintColor: "white"}}/>
          <Text className="font-plight" style={{fontSize: 18, bottom: 25, right: 10, color: "white"}}>Personal details</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row mt-1">
        <TouchableOpacity>
          <Image source={require('../../assets/icons/lock.png')} 
          style={{height: 23, width: 23, right: 50, tintColor: "white"}}/>
          <Text className="font-plight" style={{fontSize: 18, bottom: 25, left: 9, color: "white"}}>Password & Security</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row mt-1">
        <TouchableOpacity>
          <Image source={require('../../assets/icons/receipt.png')} 
          style={{height: 23, width: 23, right: 81, tintColor: "white"}}/>
          <Text className="font-plight" style={{fontSize: 18, bottom: 25, right: 23, color: "white"}}>Order history</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row mt-1">
        <TouchableOpacity>
          <Image source={require('../../assets/icons/delete.png')} 
          style={{height: 23, width: 23, right: 72, tintColor: "white"}}/>
          <Text className="font-plight" style={{fontSize: 18, bottom: 25, right: 12, color: "white"}}>Delete account</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row mt-1">
        <TouchableOpacity>
          <Image source={require('../../assets/icons/logout.png')} 
          style={{height: 23, width: 23, right: 103, opacity: 0.7, tintColor: "white"}}/>
          <Text className="font-plight" style={{fontSize: 18, bottom: 25, right: 48, color: "white"}}>Log out</Text>
        </TouchableOpacity>
      </View>
      
      <View className="flex-row mt-1" style={{left: 130, bottom: 167, opacity: 0}}>
        <View style={{backgroundColor: "red", borderRadius: 20, height: 23, width: 23}}>
          <Text className="" style={{fontSize: 14, color: "white", fontWeight: "400", left: 7, top: 1}}>2</Text>
        </View>
      </View>

      </View>
    </SafeAreaView>
  )
}

export default Profile