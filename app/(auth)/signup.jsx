import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const signup = () => {
  const [isChecked, setCheck] = useState(false);
  const [form, setForm]=useState({
    fname:'',
    lname:'',
    email: '',
    password:'',
    confirmpassword:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{ router.push('/login') }
  return (
    <SafeAreaView className="bg-primary2 h-full">
    <ScrollView>
    <View>
        <Text className="text-3xl font-namsterdam ml-6 mt-8">Sign Up</Text>
    </View>
      <View className="flex mx-8 my-5">

      <FormField
        title="First name"
        value={form.fname}
        placeholder='   Enter your full name'
        handleChangeText={(e) => setForm({ ...form, firstname: e })}
      />

      <View className="mt-5"> </View>
      <FormField
        title="Last Name"
        value={form.lname}
        placeholder='   Enter your last name'
        handleChangeText={(e) => setForm({ ...form, lastname: e })}
      />

      <View className="mt-5"></View>
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

      <View className="mt-5"></View>
      <FormField
        title="Confirm Password"
        value={form.confirmpassword}
        placeholder='   Enter your password'
        handleChangeText={(e) => setForm({ ...form, confirmpassword: e })}
      />
                      
      <View className="flex-row mt-3">
      <Checkbox value={isChecked} color={isChecked? "#D9753B":undefined} onValueChange={setCheck}  />
      <Text> I agree to the </Text>
      <Link className="text-1xl text-blue-700" href="/tac">Terms and Conditions</Link>
      </View>

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
            handlePress={() => router.push('/(tabs)')}
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