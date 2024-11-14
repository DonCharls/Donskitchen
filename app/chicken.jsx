import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'

const chicken = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-primary2">
        <ScrollView>
    <View style={{display: 'flex', flexDirection: 'row', backgroundColor:"#FEECC4"}}>
        <TouchableOpacity onPress={() => navigation.navigate('foods')}>
        <Image
          source={require('../assets/icons/back.png')} 
          style={{height: 25, width: 25, marginLeft: 20, marginTop: 5, marginBottom: 10}}/>
        </TouchableOpacity>
        <Text className="font-namsterdam text-3xl" style={{left: 95}}>Chicken</Text>
    </View>
    <View className="items-center">
        <Text className="mt-5 font-teko" style={{fontSize: 50, marginBottom: 15}}>Korean Spicy Chicken</Text>
    <Image
          source={require('../assets/pictures/spicychickenbg.jpg')} 
          style={{height: 250, width: 250, borderRadius: 30, marginBottom: 40}}/>
    </View>
    <View className="bg-white items-center">
        <Text className="font-pregular font-bold mt-5 mb-3" style={{fontSize: 20}}>Product Description</Text>
        <Text className="font-pregular mb-3" style={{}}>
            6 pieces of chicken marinated in a secret{'\n'}
            blend of spices and herbs, then coated in{'\n'}
            a fiery, tangy sauce. The result is a dish{'\n'}
            that is both savory and spicy, with a{'\n'}
            perfect balance of flavors.</Text>
    
    <View style={{width: 200, bottom: 20}} classname="space-y-4">
            <TouchableOpacity 
            onPress={() => navigation.navigate('(tabs)')}
            className="py-3 bg-amber-600 rounded-xl mt-10 mb-5 items-center">
              <Text style={{fontSize: 16, fontWeight: "bold"}}>
                ORDER NOW
              </Text>
            </TouchableOpacity>
        </View>

        <View className="items-center">
            <Text className="font-pmedium text-lg" style={{opacity: 0.5}}>Nutrition Summary</Text>
        <View>
            <View style={{
                backgroundColor: "#D3D3D3", 
                borderRadius: 30, 
                height: 90, 
                width: 300, 
                height: 420,
                margin: 20,
                alignItems: 'center',
                }}>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, marginTop: 20}}>500 Calories</Text>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, bottom: 16}}>________________</Text>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, bottom: 8}}>34 Protein (grams)</Text>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, bottom: 24}}>________________</Text>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, bottom: 16}}>28 Total Fat (grams)</Text>
                <Text className="font-pregular" style={{fontSize: 10, opacity: 0.6, bottom: 16}}>0 Saturated Fat (g)</Text>
                <Text className="font-pregular" style={{fontSize: 10, opacity: 0.6, bottom: 16}}>0 Trans Fat Fat (g)</Text>
                <Text className="font-pregular" style={{fontSize: 10, opacity: 0.6, bottom: 16}}>19 Monosaturated Fat (g)</Text>
                <Text className="font-pregular" style={{fontSize: 10, opacity: 0.6, bottom: 16}}>7 Polyunsaturated Fat (g)</Text>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, bottom: 25}}>________________</Text>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, bottom: 16}}>15 Carbohydrates (grams)</Text>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, bottom: 24}}>________________</Text>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, bottom: 16}}>1427 Sodium (milligrams)</Text>
                <Text className="font-pregular" style={{fontSize: 20, opacity: 0.6, bottom: 24}}>________________</Text>
                </View>
            </View>
        </View>

        <View className="items-center" style={{marginTop: 20}}>
            <Text className="font-pmedium text-lg" style={{opacity: 0.5}}>Common Allergens</Text>
        <View>
            <View style={{
                backgroundColor: "#D3D3D3", 
                borderRadius: 30, 
                height: 90, 
                width: 300, 
                height: 70,
                margin: 20,
                alignItems: "center"
                }}>
                <Text className="font-pregular" style={{fontSize: 17, opacity: 0.6, marginTop: 20}}>
                    Gluten, Soy, Sesame, Dairy, Nuts</Text>
                </View>
            </View>
        </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default chicken

const styles = StyleSheet.create({})