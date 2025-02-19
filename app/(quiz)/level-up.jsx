import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';
import MyButton from '../../components/button';
import { router } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App(){
    return(
    <SafeAreaView className="flex-1 bg-violet">
        <View className="items-center justify-center bg-violet"> {/* Reduced space between children */}
            
            {/* Cloud image at bottom of screen */} 
            <ImageBackground 
                source={require('../../assets/images/cloud-tilt.png')}
                className="absolute w-full h-full -bottom-[10%]"
                key="cloud-bottom"
            />
            
            {/* Star image */}
            <ImageBackground
                source={require('../../assets/images/star-cluster.png')}
                className="absolute w-full h-full" // Ensure stars are behind other elements
                resizeMode="contain"
            />

            {/* Flex container for text */}
            <View className="absolute top-[%20] items-center"> {/* Position text at the top */}
                {/* Application Summary Text */} 
                <Text 
                    className="text-6xl text-amber text-center font-wsblack">
                    Level Up!
                </Text>

                {/* Application Summary Text */} 
                <Text 
                    className="text-4xl text-ivory text-center font-nbold">
                    Level <Text className="font-nblack text-amber">Two</Text>!
                </Text>
            </View>

            {/* Cat rocket image */}
            <Image
                source={require('../../assets/images/cat-rocket.png')}
                className="w-full h-full mb-[%20]" // Set a specific height for the image
                resizeMode="contain"
            />

            {/* Return button */}
            <View className="bottom-[%100] w-full items-center flex-row justify-evenly">
                <MyButton 
                    title="Back" 
                    handlePress={() => router.push("/quiz-panel")}
                    height="50"
                    width="30%"
                    bgColor="bg-indigo"
                    textColor="text-rose"
                />

                <MyButton 
                    title="Next" 
                    handlePress={() => router.push("/")}
                    height="50"
                    width="30%"
                    bgColor="bg-indigo"
                    textColor="text-rose"
                />
            </View>

            {/* Let's blend our status bar. */}
            <StatusBar style="light" />
        </View> 
    </SafeAreaView>      
    );
}
