import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useNavigation } from 'expo-router';
import React from 'react'
import { TouchableOpacity } from 'react-native';

const tac = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-primary h-full">
    <ScrollView>
      <View className="flex mx-3">
        <Text className="text-2xl italic">Terms and Conditions</Text>

        <Text className="italic">Welcome to the Don's Kitchen mobile app! These Terms and Conditions govern your use of our app, including placing orders, making reservations, and accessing other services. By using the app, you agree to these terms. If you do not agree, please do not use the app.</Text>

        <Text className="font-bold italic">1. Account Registration and Security</Text>
        <Text className="italic">      1.1. To use certain features of the app, you may</Text>
        <Text className="italic">              need to register for an account. You agree to</Text>
        <Text className="italic">              provide accurate, current, and complete </Text>
        <Text className="italic">              information during registration and to update  </Text>
        <Text className="italic">              such information to keep it accurate, current, </Text>
        <Text className="italic">              and complete.</Text>
        <Text className="italic">      1.2. You are responsible for safeguarding your</Text>
        <Text className="italic">              account login information and for all</Text>
        <Text className="italic">              activities that occur under your account.</Text>
        <Text className="italic">              Notify us immediately of any unauthorized </Text>
        <Text className="italic">              use of your account.</Text>
        
        <Text className="font-bold italic">2. Ordering and Reservations</Text>
        <Text className="italic">      2.1. Orders placed through the app are subject to </Text>
        <Text className="italic">              availability and acceptance by Don's Kitchen. </Text>
        <Text className="italic">              We reserve the right to refuse or cancel any </Text>
        <Text className="italic">              order for reasons including, but not limited </Text>
        <Text className="italic">              to, product availability and inaccuracies in </Text>
        <Text className="italic">              the order.</Text>
        <Text className="italic">      2.2. When placing an order, please ensure that all </Text>
        <Text className="italic">              details are correct. We are not responsible </Text>
        <Text className="italic">              for any errors or  issues arising from </Text>
        <Text className="italic">              incorrect information provided.</Text>
        <Text className="italic">      2.3. For reservations, the app will show available </Text>
        <Text className="italic">              time slots. Please arrive promptly for your </Text>
        <Text className="italic">              reservation. Late arrivals may affect your </Text>
        <Text className="italic">              reservation status.</Text>

        <Text className="font-bold italic">3. Payment</Text>
        <Text className="italic">      3.1. Payments for orders can be made through the</Text>
        <Text className="italic">              app using the available payment methods. </Text>
        <Text className="italic">              Ensure that your payment details are accurate</Text>
        <Text className="italic">              and up-to-date.</Text>
        
        <Text className="italic">      3.2. All charges are final once processed. If you </Text>
        <Text className="italic">              encounter any issues with your payment, </Text>
        <Text className="italic">              please contact our support team </Text>
        <Text className="italic">              immediately.</Text>

        <Text className="font-bold italic">4. Promotions and Discounts</Text>
        <Text className="italic">      4.1. Promotions and discounts available through</Text>
        <Text className="italic">              the app are subject to specific terms and </Text>
        <Text className="italic">              conditions. These offers cannot be</Text>
        <Text className="italic">              combined with other promotions unless</Text>
        <Text className="italic">              explicitly stated.</Text>
        <Text className="italic">      4.2. We reserve the right to modify or cancel</Text>
        <Text className="italic">              promotions at our discretion without</Text>
        <Text className="italic">              prior notice.</Text>

        <Text className="font-bold italic">5. Delivery and Pickup</Text>
        <Text className="italic">      5.1. Delivery and pickup times are estimated </Text>
        <Text className="italic">              and may vary based on factors such as </Text>
        <Text className="italic">              order volume and traffic conditions. We </Text>
        <Text className="italic">              are not responsible for delays beyond our </Text>
        <Text className="italic">              control.</Text>
        <Text className="italic">      5.2. Ensure that someone is available to receive</Text>
        <Text className="italic">              the order at the delivery address provided. </Text>
        <Text className="italic">              Failed deliveries due to incorrect addresses </Text>
        <Text className="italic">              or unavailability of recipients may result in </Text>
        <Text className="italic">              additional charges or cancellation of the </Text>
        <Text className="italic">              order.</Text>
        
        <Text className="font-bold italic">6. User Conduct</Text>   
        <Text className="italic">      6.1. You agree to use the app in accordance </Text>
        <Text className="italic">              with all applicable laws and regulations. </Text>
        <Text className="italic">              You must not use the app for any unlawful or</Text>
        <Text className="italic">              fraudulent purposes.</Text>
        <Text className="italic">      6.2. We reserve the right to suspend or terminate</Text>
        <Text className="italic">              your access to the app if you violate these</Text>
        <Text className="italic">              Terms and Conditions or engage in</Text>
        <Text className="italic">              inappropriate behavior.</Text>
        
        <Text className="font-bold italic">7. Privacy and Data Security</Text>
        <Text className="italic">      7.1. Your use of the app is subject to our</Text>
        <Text className="italic">              Privacy Policy, which outlines how we collect,</Text>
        <Text className="italic">              use, and protect your personal information.</Text>
        <Text className="italic">      7.2. We implement reasonable measures to </Text>
        <Text className="italic">              protect your data, but we cannot guarantee</Text>
        <Text className="italic">              absolute security.</Text>
        
        <Text className="font-bold italic">8. Intellectual Property</Text>
        <Text className="italic">      8.1. All content within the app, including </Text>
        <Text className="italic">              but not limited to text, images, logos, and </Text>
        <Text className="italic">              software, is the property of Don's Kitchen or </Text>
        <Text className="italic">              its licensors and is protected by intellectual</Text>
        <Text className="italic">              property laws.</Text>
        <Text className="italic">      8.2. You may not reproduce, distribute, or </Text>
        <Text className="italic">              create derivative works from any content in</Text>
        <Text className="italic">              the app without our explicit permission.</Text>

        <Text className="font-bold italic">9. Limitation of Liability</Text>
        <Text className="italic">      9.1. To the maximum extent permitted by law,</Text>
        <Text className="italic">              Don's Kitchen is not liable for any indirect,</Text>
        <Text className="italic">              incidental, or consequential damages arising </Text>
        <Text className="italic">              from your use of the app or services.</Text>
        <Text className="italic">      9.2. Our liability is limited to the maximum </Text>
        <Text className="italic">              extent allowed by applicable law and does </Text>
        <Text className="italic">              not exceed the amount paid by you for the </Text>
        <Text className="italic">              specific service or order giving rise to </Text>
        <Text className="italic">              the claim.</Text>
        
        <Text className="font-bold italic">10. Modifications</Text>
        <Text className="italic">      10.1. We may update these Terms and Conditions</Text>
        <Text className="italic">              from time to time. The updated terms will </Text>
        <Text className="italic">              be effective upon posting in the app. Your </Text>
        <Text className="italic">              continued use of the app after any changes </Text>
        <Text className="italic">              indicates your acceptance of the revised </Text>
        <Text className="italic">              terms.</Text>
        
        <Text className="font-bold italic">11. Contact Us</Text>
        <Text className="italic">      11.1. If you have any questions or concerns</Text>
        <Text className="italic">              about these Terms and Conditions, please </Text>
        <Text className="italic">              contact us at 0998 261 9973.</Text>
        <Text className="italic"></Text>
        <Text className="italic">Thank you for using the Don's Kitchen mobile app. </Text>
        <Text className="italic">We hope you enjoy your dining experience!</Text>

        <View style={{width: 300, left: 18, marginBottom: 10}} classname="space-y-4">
            <TouchableOpacity 
            onPress={() => navigation.navigate('signup')}
            className="py-3 border rounded-xl mt-5">
              <Text style={{fontSize: 16, fontWeight: "bold", marginLeft: 125}}>
                I agree
              </Text>
            </TouchableOpacity>
        </View>
</View>
    </ScrollView>
  </SafeAreaView>
        
  )
}

export default tac

const styles = StyleSheet.create({})