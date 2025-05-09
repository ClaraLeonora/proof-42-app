import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import HomeButton from '../../components/home-button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from "expo-router";

/**
 * Home component for the main screen of the app.
 * It displays a greeting, a progress bar, and buttons for navigation.
 * The component is styled using Tailwind CSS classes.
 * @returns {JSX.Element} The Home component.
 */
export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView 
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'start',
                    alignItems: 'center'
                }}
            >
                {/* Cloud image at the top of the screen */}
                <Image
                    source={require('../../assets/images/saturn-beacon.png')}
                    className="absolute w-full h-1/3 top-36"
                    resizeMode="contain"
                    key="orion-connect"
                />

                {/* Progress bar section */}
                <View className="w-full flex-row h-1/8 bg-plum justify-center items-center">
                    {/* Profile Image */}
                    <View className="bg-background rounded-full p-2 ml-4">
                        <Image
                            source={require('../../assets/images/cat-profile.png')}
                            className="w-20 h-20 rounded-full"
                            resizeMode="contain"
                        />
                    </View>

                    {/* Progress Text and Placeholder */}
                    <View className="flex-1 flex-col ml-4 mb-8">
                        <Text className="text-xl text-ivory font-nbold mt-10">
                            My Level Progress
                        </Text>
                        <Text className="text-s text-amber font-nbold">
                            Implement me - progress bar
                        </Text>
                    </View>

                    {/* XP and Star Icon */}
                    <View className="flex-col justify-center items-center mr-12">
                        <Image
                            source={require('../../assets/images/star.png')}
                            className="w-16 h-16 rounded-full"
                            resizeMode="contain"
                        />
                        <Text className="text-base text-ivory font-nbold">
                            500 XP
                        </Text>
                    </View>
                </View>

                {/* Main content section */}
                <View className="w-11/12 mt-64">
                    {/* Personal Greeting */}
                    <View className="flex-row">
                        <Text className="text-3xl text-ivory font-nregular mb-5">
                            Hi,{" "}
                        </Text>
                        <Text className="text-3xl text-ivory font-nbold mb-5">
                            Lorem
                        </Text>
                    </View>

                    {/* Title */}
                    <Text className="text-5xl text-ivory font-wsblack mb-6">
                        Don't Panic!
                    </Text>

                    {/* Quiz Box */}
                    <View className="bg-indigo rounded-3xl flex-col mb-10">
                        {/* Quiz Box Header */}
                        <View className="justify-center flex-row bg-indigo rounded-3xl">
                            <Text className="text-center m-4 text-2xl text-ivory font-nbold">
                                Practice proofs to discover the ultimate answer...
                            </Text>
                        </View>

                        {/* Quiz Box Footer */}
                        <View className="justify-center items-center flex-row bg-plum rounded-3xl">
                            <View className="w-2/5 py-8">
                                <HomeButton
                                    title="Let's Go!"
                                    handlePress={() => router.push("/quiz-panel")}
                                />
                            </View>
                            <Text className="w-2/5 m-4 text-xl text-ivory font-nbold">
                                or at least become a pro at proofs!
                            </Text>
                        </View>
                    </View>

                    {/* Profile Box */}
                    <View className="bg-indigo rounded-3xl flex-row items-center justify-between px-4">
                        <Image
                            source={require('../../assets/images/rocket-tilt.png')}
                            className="w-1/2 h-full"
                            resizeMode="contain"
                        />
                        <View className="w-2/5 py-8">
                            <HomeButton
                                title="My Profile"
                                handlePress={() => router.push("/profile")}
                            />
                        </View>
                    </View>

                    {/* Status Bar */}
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
