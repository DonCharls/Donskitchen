import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

const signup = () => {
  const navigation = useNavigation();
  const [isChecked, setCheck] = useState(false);
  return (
    <SafeAreaView className="bg-primary2 h-full">
    <ScrollView>
    <View>
        <Text className="text-3xl font-namsterdam ml-6 mt-8">Sign Up</Text>
    </View>
      <View className="flex mx-8 my-5">

      <Text className="text-1xl font-bold font-pregular">Full Name</Text>
      <TextInput
        backgroundColor='white'
        placeholder='Enter your full name'
        placeholderTextColor={'gray'}
        className={`rounded-md pl-[14px] h-10`}
                      />

      <Text className="text-1xl font-bold font-pregular mt-6">Birthdate</Text>
      <TextInput
        backgroundColor='white'
        placeholder='Enter your birthdate'
        placeholderTextColor={'gray'}
        className={`rounded-md pl-[14px] h-10`}
                      />

      <Text className="text-1xl font-bold font-pregular mt-6">Email</Text>
      <TextInput
        backgroundColor='white'
        placeholder='Enter your email address'
        placeholderTextColor={'gray'}
        className={`rounded-md pl-[14px] h-10`}
                      />

      <Text className="text-1xl font-bold font-pregular mt-6">Password</Text>
      <TextInput
        backgroundColor='white'
        secureTextEntry
        placeholder='Enter your password'
        placeholderTextColor={'gray'}
        className={`rounded-md pl-[14px] h-10`}
                      />

      <Text className="text-1xl font-bold font-pregular mt-6">Confirm Password</Text>
      <TextInput
        backgroundColor='white'
        secureTextEntry
        placeholder='Re-enter your password'
        placeholderTextColor={'gray'}
        className={`rounded-md pl-[14px] h-10 shadow-lg`}
                      />
                      
      <View className="flex-row mt-3">
      <Checkbox value={isChecked} color={isChecked? "#D9753B":undefined} onValueChange={setCheck}  />
      <Text> I agree to the </Text>
      <Link className="text-1xl text-blue-700" href="/tac">Terms and Conditions</Link>
      </View>

      </View>
      <View style={{width: 300, left: 30, bottom: 20}} classname="space-y-4">
            <TouchableOpacity 
            onPress={() => navigation.navigate('(tabs)')}
            className="py-3 bg-amber-600 rounded-xl mt-5">
              <Text style={{fontSize: 16, fontWeight: "bold", marginLeft: 125}}>
                Log In
              </Text>
            </TouchableOpacity>
        </View>

        <View className="flex-row justify-center bottom-2">
          <Text className="font-plight">or</Text>
        </View>

        <View style={{ display: 'flex', justifyContent: 'center', width: 300, left: 30, height: 150, bottom: 25}}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('home')}
            className="py-3 flex-row justify-center bg-white rounded-xl bottom-7">
      <Image
          source={require('../../assets/pictures/google.png')} style={{height: 20, width:20}}/>
              <Text style={{fontSize: 16, fontWeight: "bold", marginLeft: 10}}>
                Continue with Google
              </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default signup

const styles = StyleSheet.create({})