import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Top from '../../components/top'
import { SafeAreaView } from 'react-native-safe-area-context'
import BoxContainer from '../../components/BoxContainer'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'

const Foods = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#00000f]">
      <Top />
      <ScrollView className="bg-black">
      <View className="flex-row bg-black">
      <TouchableOpacity>
        <BoxContainer style={styles.container1}>
          <Image source={require('../../assets/pictures/bseller.jpg')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", fontWeight: "500", bottom: 15}}>Best Sellers</Text>
        </BoxContainer>
        </TouchableOpacity>

      <TouchableOpacity>
        <BoxContainer style={styles.container2}>
          <Image source={require('../../assets/pictures/nproducts.jpg')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>New Products</Text>
        </BoxContainer>
      </TouchableOpacity>
      </View>


        <View className="flex-row bg-black" style={{bottom: 25}}>
        <TouchableOpacity>
        <BoxContainer style={styles.container1}>
          <Image source={require('../../assets/pictures/bbimbap.jpg')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Bibimbap</Text>
        </BoxContainer>
        </TouchableOpacity>

        <TouchableOpacity>
        <BoxContainer style={styles.container2}>
          <Image source={require('../../assets/pictures/noodles.jpg')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Noodles</Text>
        </BoxContainer>
        </TouchableOpacity>
        </View>

        <View className="flex-row bg-black" style={{bottom: 50}}>
        <TouchableOpacity>
        <BoxContainer style={styles.container1}>
          <Image source={require('../../assets/pictures/seafoods.jpg')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Seafoods</Text>
        </BoxContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('chicken')}>
        <BoxContainer style={styles.container2}>
          <Image source={require('../../assets/pictures/chicken.jpg')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Chicken</Text>
        </BoxContainer>
        </TouchableOpacity>
        </View>

        <View className="flex-row bg-black" style={{bottom: 75}}>
        <TouchableOpacity>
        <BoxContainer style={styles.container1}>
          <Image source={require('../../assets/pictures/porkabeef.jpg')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Pork & Beef</Text>
        </BoxContainer>
        </TouchableOpacity>

        <TouchableOpacity>
        <BoxContainer style={styles.container2}>
          <Image source={require('../../assets/pictures/sidedish.png')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Sidedish</Text>
        </BoxContainer>
        </TouchableOpacity>
        </View>

        <View className="flex-row bg-black" style={{bottom: 100}}>
        <TouchableOpacity>
        <BoxContainer style={styles.container1}>
          <Image source={require('../../assets/pictures/desserts.jpeg')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Desserts</Text>
        </BoxContainer>
        </TouchableOpacity>

        <TouchableOpacity>
        <BoxContainer style={styles.container2}>
          <Image source={require('../../assets/pictures/drinks.png')} 
          style={{height: 150, width: 150, top: 11, opacity: 0.9, borderRadius: 15}}/>
            <Text className="font" 
            style={{color: "white", fontSize: 17, fontWeight: "500", bottom: 15}}>Drinks</Text>
        </BoxContainer>
        </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page:{
    flex:1,
  },

  container1:{
    borderRadius: 15,
    backgroundColor: 'black',
    height: 150,
    width: 150,
    bottom: 10, 
  },

  container2:{
    borderRadius: 15,
    backgroundColor: 'black',
    right: 20,
    height: 150,
    width: 150,
    bottom: 10, 
  },
});

export default Foods