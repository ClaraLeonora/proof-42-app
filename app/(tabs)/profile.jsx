import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import MyButton from '../../components/button';
import { router, Link } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App(){
    return(
        // Flex box to contain the title, text, rocket and buttons. 
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', paddingBottom: '400' }}>
                {/* Cat in Space logo image */}
                <View className="w-full h-3/4">
                    <Image
                        source={require('../../assets/images/cat-space.png')}
                        className="w-full h-full"
                        resizeMode="contain"
                    />
                </View>

                {/* Overlay container */}
                <View className="w-full items-center -mt-20">
                    {/* Name and username */} 
                    <Text className="text-2xl text-ivory font-wsbold mt-8">
                        Lorem Ipsum
                    </Text>
                    <Text className="text-xl text-ivory font-wsbold mt-1">
                        @lorem_123
                    </Text>
                    
                    {/* Progress Container */} 
                    <View className="flex-row w-3/4 items-center justify-center mt-6 mb-4">
                        {/* Progress Text */}
                        <Text className="text-xl text-ivory font-nbold">
                            My Level Progress {"\t\t"}
                        </Text>
                        <Text className="text-xl text-ivory font-nbold">
                            500 XP
                        </Text>
                    </View>

                    {/* Progress Bar */}
                    <Text className="text-s text-amber font-nbold m-4">
                        Implemente me - progress bar
                    </Text>

                    {/* Level box */}
                    <View className="mt-6 w-3/4 justify-center flex-row bg-ivory border-amber border-4 rounded-full">
                        <Text className="text-center m-4 text-2xl text-background font-nbold">
                            You Completed 40 Levels!
                        </Text>
                    </View>

                    {/* Level and Points boxes */}
                    <View className="flex-row justify-center items-center w-3/4 mt-6">
                        <View className="w-1/2 bg-amber rounded-3xl m-2 p-3">
                            <Text className="mb-2 text-center text-xl text-background font-nbold">
                                Level 
                            </Text>
                            <Text className="text-center text-3xl text-background font-nblack">
                                Gold
                            </Text>
                        </View>
                        <View className="w-1/2 bg-rose rounded-3xl m-2 p-3">
                            <Text className="mb-2 text-center text-xl text-background font-nbold">
                                Points
                            </Text>
                            <Text className="text-center text-3xl text-background font-nblack">
                                1000
                            </Text>
                        </View>
                    </View>

                    {/* Box buttons for edit profile and logout link */}
                    <View className="w-full items-center bg-indigo rounded-3xl py-10 mt-6">
                        <View className=" flex-col w-3/4"> 
                            <MyButton 
                                title="Edit User Profile" 
                                handlePress={() => router.push("/edit-profile")}
                            />

                            {/* Logout button */} 
                            <Link className="pt-4" href={"/"}>
                                <Text className="text-center font-nbold text-base text-amber">
                                    Logout
                                </Text>
                            </Link>
                        </View>
                    </View>
                </View>
                {/* Let's blend our status bar. */}
                <StatusBar style="auto" />
            
            </ScrollView>
        </SafeAreaView>     
    );
}
