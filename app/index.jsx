import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { Link, router } from 'expo-router';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';


const index = () => {
  return (
    <SafeAreaView className="bg-primary2 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center my-10">
        <Image
          source={images.dklogo} style={{height: 170, width:170, marginTop: 110}}/>
        <Text className="text-1xl font-namsterdam">돈스 키친</Text>
        <Text className="text-4xl font-namsterdam">DON'S KITCHEN</Text>
        <Text className="text-1xl font-plight mt-2">Fulfill your comfort korean food cravings.</Text>

        <View style={{width: 250, marginTop: 80}} classname="space-y-4">
          <CustomButton
            title="Sign Up"
            handlePress={() => router.push('/signup')}
            containerStyles={{width: 250}}
          >
          </CustomButton>
        </View>
        <View className="flex-row justify-center mt-2">
          <Text className="">Already have an account? </Text>
          <Link className="font-bold" href="/login">Log In</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) 
}

export default index
