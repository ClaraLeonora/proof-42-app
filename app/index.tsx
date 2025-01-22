import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';
import MyButton from '../components/button';

export default function App(){
    return(
        // Flex box to contain the title, text, rocket and buttons. 
        <View className="flex-1 items-center justify-center bg-background space-y-4"> {/* Reduced space between children */}
            
            {/* Cloud image at top of screen */} 
            <ImageBackground 
                source={require('../assets/images/cloud-top.png')}
                className="absolute w-full h-full -top-20"
                key="cloud-top"
            />

            {/* Rocket logo image */}
            <Image
                source={require('../assets/images/rocket.png')}
                className="pt-60 w-1/2 h-1/2 mt-[-20]"
                resizeMode="contain"
            />

            {/* Title */} 
            <Text 
                className="pb-8 text-6xl text-ivory font-wsblack">
                Proof 42
            </Text>
            
            {/* Summary Text */} 
            <Text 
                className="w-3/4 pb-8 text-ivory text-center font-nbold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Text>

            {/* Buttons for sign in and sign up. */}
            <View className="w-3/4 flex-col justify-center"> 
                <MyButton label="Sign In" />
                <MyButton label="Create an Account" />
            </View>

            {/* Let's blend our status bar. */}
            <StatusBar style="auto" />
        </View>        
    );
}
