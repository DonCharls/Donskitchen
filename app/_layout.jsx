import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
        "NewAmsterdam-Regular": require("../assets/fonts/NewAmsterdam-Regular.ttf"),
        "SongMyung-Regular": require("../assets/fonts/SongMyung-Regular.ttf"),
        "Fredoka-Bold": require("../assets/fonts/Fredoka-Bold.ttf"),
        "Fredoka-Light": require("../assets/fonts/Fredoka-Light.ttf"),
        "Fredoka-Medium": require("../assets/fonts/Fredoka-Medium.ttf"),
        "Fredoka-Regular": require("../assets/fonts/Fredoka-Regular.ttf"),
        "Fredoka-SemiBold": require("../assets/fonts/Fredoka-SemiBold.ttf"),
        "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
        "Teko-Regular": require("../assets/fonts/Teko-Regular.ttf"),
        "Whisper-Regular": require("../assets/fonts/Whisper-Regular.ttf")
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      




    return (
      <>
        <Stack>
            <Stack.Screen name='index' options={{headerShown:false}}/>
            <Stack.Screen name='tac' options={{headerShown:false}}/>
            <Stack.Screen name='chicken' options={{headerShown:false}}/>
            <Stack.Screen name='(auth)' options={{headerShown:false}}/>
            <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
        </Stack>
        <StatusBar backgroundColor="#FEECC4" style="dark"/>
      </>
    )
}

export default MainLayout