import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';
import MyButton from '../../components/button';
import { router } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Level Up component for the quiz completion screen.
 * Displays a congratulatory message, a themed background, 
 * a cat rocket image, and navigation buttons.
 * @returns {JSX.Element} The Level Up component.
 */
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-violet">
            <View className="items-center justify-center bg-violet">
                {/* Background cloud image at the bottom */}
                <ImageBackground 
                    source={require('../../assets/images/cloud-tilt.png')}
                    className="absolute w-full h-full -bottom-[10%]"
                    key="cloud-bottom"
                />

                {/* Star cluster background image */}
                <ImageBackground
                    source={require('../../assets/images/star-cluster.png')}
                    className="absolute w-full h-full"
                    resizeMode="contain"
                />

                {/* Text container positioned at the top */}
                <View className="absolute top-[20%] items-center">
                    {/* Main congratulatory text */}
                    <Text className="text-6xl text-amber text-center font-wsblack">
                        Level Up!
                    </Text>

                    {/* Subheading with level information */}
                    <Text className="text-4xl text-ivory text-center font-nbold">
                        Level <Text className="font-nblack text-amber">Two</Text>!
                    </Text>
                </View>

                {/* Cat rocket image */}
                <Image
                    source={require('../../assets/images/cat-rocket.png')}
                    className="w-full h-full mb-[20%]"
                    resizeMode="contain"
                />

                {/* Navigation buttons container */}
                <View className="absolute bottom-0 w-full flex-row justify-evenly items-center">
                    {/* Back button */}
                    <MyButton 
                        title="Back" 
                        handlePress={() => router.push("/quiz-panel")}
                        height="50"
                        width="30%"
                        bgColor="bg-indigo"
                        textColor="text-rose"
                    />

                    {/* Next button */}
                    <MyButton 
                        title="Next" 
                        handlePress={() => router.push("/")}
                        height="50"
                        width="30%"
                        bgColor="bg-indigo"
                        textColor="text-rose"
                    />
                </View>

                {/* Status bar with light style */}
                <StatusBar style="light" />
            </View>
        </SafeAreaView>
    );
}
