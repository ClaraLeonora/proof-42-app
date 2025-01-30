import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';
import HomeButton from '../../components/home-button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            {/* Cloud image at top of screen */}
            <ImageBackground
                source={require('../../assets/images/saturn-beacon.png')}
                className="absolute w-1/2 h-1/2 top-10"
                resizeMode="contain"
                key="orion-connect"
            />

            {/* Progress bar - These are placeholders before supabase setup */}
            <View className="w-full flex-row h-1/8 bg-plum justify-center items-center">
                {/* Profile Image */}
                <View className="bg-background rounded-full p-2 ml-4">
                    <Image
                        source={require('../../assets/images/cat-profile.png')}
                        className="w-20 h-20 rounded-full"
                        resizeMode="contain"
                    />
                </View>

                <View className="flex-1 flex-col ml-4 mb-8">
                    {/* Progress Text */}
                        <Text className="text-xl text-ivory font-nbold mt-10">
                            My Level Progress
                        </Text>
                    {/* Progress Bar */}
                        <Text className="text-s text-amber font-nbold">
                            Implemente me - progress bar
                        </Text>
                </View>

                <View className="flex-col justify-center items-center mr-12">
                    {/* Star */}
                        <Image
                            source={require('../../assets/images/star.png')}
                            className="w-16 h-16 rounded-full"
                            resizeMode="contain"
                        />

                    {/* Placeholder XP */}
                    <Text className="text-base text-ivory font-nbold ">
                            500 XP
                    </Text>
                </View>
            </View>

            {/* Box of fun stuff */}
            <View className="w-3/4 mt-safe-offset-44 mb-safe-offset-12">
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

                {/* Quiz box */}
                <View className="bg-indigo rounded-3xl flex-col mb-10">
                    {/* First half of box */}
                    <View className="justify-center flex-row bg-indigo rounded-3xl">
                        <Text className="text-center m-4 text-2xl text-ivory font-nbold">
                            Practice proofs to discover the ultimate answer...
                        </Text>
                    </View>

                    {/* Second half of box */}
                    <View className="justify-center items-center flex-row bg-plum rounded-3xl">
                        <View className="w-2/5 py-8">
                            <HomeButton
                                title="Let's Go!"
                                handlePress={() => router.push("/profile")}
                            />
                        </View>
                        <Text className="w-2/5 m-4 text-xl text-ivory font-nbold">
                            or at least become a pro at proofs!
                        </Text>
                    </View>
                </View>

                {/* Profile box */}
                <View className="bg-indigo rounded-3xl flex-row justify-center items-center">
                    <Image
                        source={require('../../assets/images/rocket-tilt.png')}
                        className="w-full h-full -ml-36"
                        resizeMode="contain"
                    />
                    <View className="w-2/5 py-8 -ml-24">
                        <HomeButton
                            title="My Profile"
                            handlePress={() => router.push("/profile")}
                        />
                    </View>
                </View>

                {/* Let's blend our status bar. */}
                <StatusBar style="auto" />
            </View>
        </View>
    );
}
