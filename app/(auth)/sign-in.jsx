import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';
import MyButton from '../../components/button';

export default function App(){
    return(
        // Flex box to contain the title, text, rocket and buttons. 
        <View className="flex-1 items-center justify-center bg-background space-y-4"> {/* Reduced space between children */}
            
            {/* Cloud image at top of screen */} 
            <ImageBackground 
                source={require('../../assets/images/orion-connect.png')}
                className="absolute w-full h-full -top-20"
                key="orion-connect"
            />

            {/* Title */} 
            <Text 
                className="pb-8 text-5xl text-ivory font-wsblack">
                Sign In
            </Text>
            
            {/* Email input text */} 

            {/* Password input text */}

            {/* Forgot password link */} 


            {/* Buttons for sign in and sign up. */}
            <View className="w-3/4 flex-col justify-center"> 
                <MyButton label="Login" navigateTo="home" />
            </View>

            {/* Let's blend our status bar. */}
            <StatusBar style="auto" />
        </View>        
    );
}
