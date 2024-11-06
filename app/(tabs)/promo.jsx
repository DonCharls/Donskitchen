import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Top from '../../components/top'
import { SafeAreaView } from 'react-native-safe-area-context'
import BoxContainer from '../../components/BoxContainer'

const Promo = () => {
  return (
    <SafeAreaView className="bg-[#00000f]">
      <Top />
      <ScrollView>
        <View className="bg-black">
        <TouchableOpacity>
          <BoxContainer style={styles.container1}>
          <Image source={require('../../assets/pictures/info.png')}
          style={{height: 15, width: 15, left: 300, top: 5, position: "absolute", tintColor: "white", opacity: 0.1}}/>
          <Image source={require('../../assets/pictures/bibimbap.jpeg')} 
          style={{height: 100, width:100, left: 110, top: 42, opacity:0.85, borderBottomRightRadius: 10, borderTopRightRadius: 10}}/>
            <Text className="font-fsemibold" 
            style={{color: "white", fontSize: 17, bottom: 55, right: 99}}>Free Bibimbap</Text>
            <Text className="font-flight" 
            style={{color: "white", fontSize: 10, bottom: 54, right: 82}}>Get your FREE Bibimbap with {"\n"}
            a minimum order of PHP 300.00</Text>
            <TouchableOpacity className="py-3 rounded-full"
              style={{bottom: 37, right: 100, height: 10, width: 100, backgroundColor: "#F2BC1B"}}>
            </TouchableOpacity>
            <Text style={{fontSize: 10, bottom: 57, width: 100, right: 86, fontWeight: 700}}>
                Expires in 5 days
              </Text>
          </BoxContainer>
          </TouchableOpacity>

          <TouchableOpacity>
          <BoxContainer style={styles.container2}>
          <Image source={require('../../assets/pictures/info.png')}
          style={{height: 15, width: 15, left: 300, top: 5, position: "absolute", tintColor: "white", opacity: 0.1}}/>
          <Image source={require('../../assets/pictures/kchicken.jpg')} 
          style={{height: 100, width:100, left: 110, top: 42, opacity:0.85, borderBottomRightRadius: 10, borderTopRightRadius: 10}}/>
            <Text className="font-fsemibold" 
            style={{color: "white", fontSize: 17, bottom: 55, right: 76}}>Free Korean Chicken</Text>
            <Text className="font-flight" 
            style={{color: "white", fontSize: 10, bottom: 54, right: 68}}>Get your FREE 6 Korean Chicken with {"\n"}
            a minimum order of PHP 800.00</Text>
            <TouchableOpacity className="py-3 rounded-full"
              style={{bottom: 37, right: 100, height: 10, width: 100, backgroundColor: "#F2BC1B"}}>
            </TouchableOpacity>
            <Text style={{fontSize: 10, bottom: 57, width: 100, right: 86, fontWeight: 700}}>
                Expires in 5 days
              </Text>
          </BoxContainer>
          </TouchableOpacity>

          <TouchableOpacity>
          <BoxContainer style={styles.container3}>
          <Image source={require('../../assets/pictures/info.png')}
          style={{height: 15, width: 15, left: 300, top: 5, position: "absolute", tintColor: "white", opacity: 0.1}}/>
          <Image source={require('../../assets/pictures/slemonade.jpg')} 
          style={{height: 100, width:100, left: 110, top: 42, opacity:0.85, borderBottomRightRadius: 10, borderTopRightRadius: 10}}/>
            <Text className="font-fsemibold" 
            style={{ color: "white", fontSize: 17, bottom: 55, right: 84}}>Free Pitcher Drink</Text>
            <Text className="font-flight" 
            style={{color: "white", fontSize: 10, bottom: 54, right: 65}}>Get your FREE Fruit Pitcher Drink with {"\n"}
            a minimum order of PHP 350.00</Text>
            <TouchableOpacity className="py-3 rounded-full"
              style={{bottom: 37, right: 100, height: 10, width: 100, backgroundColor: "#F2BC1B"}}>
            </TouchableOpacity>
            <Text style={{fontSize: 10, bottom: 57, width: 100, right: 86, fontWeight: 700}}>
                Expires in 5 days
              </Text>
          </BoxContainer>
          </TouchableOpacity>

          <TouchableOpacity>
          <BoxContainer style={styles.container4}>
          <Image source={require('../../assets/pictures/info.png')}
          style={{height: 15, width: 15, left: 300, top: 5, position: "absolute", tintColor: "white", opacity: 0.1}}/>
          <Image source={require('../../assets/pictures/mfloat.jpg')} 
         style={{height: 100, width:100, left: 110, top: 42, opacity:0.85, borderBottomRightRadius: 10, borderTopRightRadius: 10}}/>
            <Text className="font-fsemibold" 
            style={{color: "white", fontSize: 17, bottom: 55, right: 85}}>Free Mango Float</Text>
            <Text className="font-flight" 
            style={{color: "white", fontSize: 10, bottom: 54, right: 77}}>Get your FREE Mango Float with {"\n"}
            a minimum order of PHP 300.00</Text>
            <TouchableOpacity className="py-3 rounded-full"
              style={{bottom: 37, right: 100, height: 10, width: 100, backgroundColor: "#F2BC1B"}}>
            </TouchableOpacity>
            <Text style={{fontSize: 10, bottom: 57, width: 100, right: 86, fontWeight: 700}}>
                Expires in 5 days
              </Text>
          </BoxContainer>
          </TouchableOpacity>

          <TouchableOpacity>
          <BoxContainer style={styles.container5}>
          <Image source={require('../../assets/pictures/info.png')}
          style={{height: 15, width: 15, left: 300, top: 5, position: "absolute", tintColor: "white"}}/>
          <Image source={require('../../assets/pictures/fdelivery.png')} 
          style={{height: 100, width:100, left: 110, top: 42}}/>
            <Text className="font-fsemibold" 
            style={{color: "white", fontSize: 17, bottom: 55, right: 102}}>Free Delivery</Text>
            <Text className="font-flight" 
            style={{color: "white", fontSize: 10, bottom: 54, right: 82}}>Get your FREE Delivery with {"\n"}
            a minimum order of PHP 225.00</Text>
            <TouchableOpacity className="py-3 rounded-full"
              style={{bottom: 37, right: 100, height: 10, width: 100, backgroundColor: "#F2BC1B"}}>
            </TouchableOpacity>
            <Text style={{fontSize: 10, bottom: 57, width: 100, right: 86, fontWeight: 700}}>
                Expires in 2 days
              </Text>
          </BoxContainer>
          </TouchableOpacity>

          <TouchableOpacity>
          <BoxContainer style={styles.container6}>
          <Image source={require('../../assets/pictures/info.png')}
          style={{height: 15, width: 15, left: 300, top: 5, position: "absolute", tintColor: "white"}}/>
          <Image source={require('../../assets/pictures/fdelivery.png')} 
          style={{height: 100, width:100, left: 110, top: 42}}/>
            <Text className="font-fsemibold" 
            style={{color: "white", fontSize: 17, bottom: 55, right: 102}}>Free Delivery</Text>
            <Text className="font-flight" 
            style={{color: "white", fontSize: 10, bottom: 54, right: 82}}>Get your FREE Delivery with {"\n"}
            a minimum order of PHP 200.00</Text>
            <TouchableOpacity className="py-3 rounded-full"
              style={{bottom: 37, right: 100, height: 10, width: 100, backgroundColor: "#F2BC1B"}}>
            </TouchableOpacity>
            <Text style={{fontSize: 10, bottom: 57, width: 100, right: 86, fontWeight: 700}}>
                Expires in 1 day
              </Text>
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
      borderRadius: 10,
      backgroundColor: '#730202',
      height: 100,
      bottom: 5, 
    },

    container2:{
      borderRadius: 10,
      backgroundColor: '#F28705',
      height: 100,
      bottom: 30
    },

    container3:{
      borderRadius: 10,
      backgroundColor: 'tomato',
      height: 100,
      bottom: 50
    },

    container4:{
      borderRadius: 10,
      backgroundColor: '#B15F15',
      height: 100,
      bottom: 70
    },

    container5:{
      borderRadius: 10,
      backgroundColor: '#B9BF04',
      height: 100,
      bottom: 90
    },

    container6:{
      borderRadius: 10,
      backgroundColor: '#B9BF04',
      height: 100,
      bottom: 110
    },

  });

export default Promo