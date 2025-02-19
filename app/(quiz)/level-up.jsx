import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';

export default function App(){
    return(
        // Flex box to contain the title, text, rocket and buttons. 
        <View className="flex-1 items-center justify-center bg-violet space-y-4"> {/* Reduced space between children */}
            
            {/* Cloud image at bottom of screen */} 
            <ImageBackground 
                source={require('../../assets/images/cloud-tilt.png')}
                className="absolute w-full h-full -bottom-20"
                key="cloud-bottom"
            />
            
            {/* Star image */}
            <ImageBackground
                source={require('../../assets/images/star-cluster.png')}
                className="absolute w-full h-full" // Ensure stars are behind other elements
                resizeMode="contain"
            />

            {/* Flex container for text */}
            <View className="absolute top-24 items-center"> {/* Position text at the top */}
                {/* Application Summary Text */} 
                <Text 
                    className="text-6xl text-amber text-center font-wsblack">
                    Level Up!
                </Text>

                {/* Application Summary Text */} 
                <Text 
                    className="text-4xl text-ivory text-center font-nbold">
                    Level <Text className="font-nblack">Two</Text>!
                </Text>
            </View>

            {/* Cat rocket image */}
            <Image
                source={require('../../assets/images/cat-rocket.png')}
                className="w-full h-full mb-20"
                resizeMode="contain"
            />

            {/* Let's blend our status bar. */}
            <StatusBar style="auto" />
        </View>        
    );
}
