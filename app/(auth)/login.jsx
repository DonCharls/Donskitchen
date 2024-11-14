import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import { Link, router } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { images } from '../../constants';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';

const login = () => {
  const [isChecked, setCheck] = useState(false);
  const [form, setForm]=useState({
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{ router.push('../(tabs)/home') }
  return (
    <SafeAreaView className="bg-primary2">

      <View>
      <Image
          source={images.imagebg} style={{height: 170, width:360, opacity: 0.9}}/>
      </View>

      <View className="ml-10">
        <Text className="text-3xl font-namsterdam ml-6 mt-8" >Log In to your Account</Text>
      </View>

        <View className="flex mx-8 my-10">
        <FormField
        title="Email"
        value={form.email}
        placeholder='   Enter your email adress'
        handleChangeText={(e) => setForm({ ...form, email: e })}
      />

      <View className="mt-5"></View>
      <FormField
        title="Password"
        value={form.password}
        placeholder='   Enter your password'
        handleChangeText={(e) => setForm({ ...form, password: e })}
      />
      </View>
      <View className="ml-8 flex-row" style={{bottom:34}}>
      <Checkbox value={isChecked} color={isChecked? "#D9753B":undefined} onValueChange={setCheck}  />
          <Text className="ml-1" style={{fontSize: 12}}>
            Remember Me
          </Text>
          <Text className="text-blue-700" style={{fontSize: 12, left: 96}}>
            Forgot Password?
          </Text>
      </View>

      <View style={{width: 300, left: 30, bottom: 20, marginTop: 20}} classname="space-y-4">
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={{width: 300}}
          >
          </CustomButton>
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

      <View className="flex-row justify-center" style={{bottom: 65}}>
        <Text>Don't have an account? </Text>
        <Link className="font-bold" href="/signup">Sign Up</Link>
      </View>
        
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})