import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import MyButton from '../../components/button';
import { router, Link } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Profile component for displaying user profile information.
 * It shows the user's name, username, level progress, and points.
 * It also includes buttons for editing the user profile and logging out.
 * @returns {JSX.Element} The Profile component.
 */
export default function Profile() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            {/* Scrollable container for the profile content */}
            <ScrollView 
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingBottom: 400, // Adjust padding for scrollable content
                }}
            >
                {/* Profile image section */}
                <View className="w-full h-3/4">
                    <Image
                        source={require('../../assets/images/cat-space.png')}
                        className="w-full h-full"
                        resizeMode="contain"
                    />
                </View>

                {/* Overlay container for profile details */}
                <View className="w-full items-center -mt-20">
                    {/* User's name and username */}
                    <Text className="text-2xl text-ivory font-wsbold mt-8">
                        Lorem Ipsum
                    </Text>
                    <Text className="text-xl text-ivory font-wsbold mt-1">
                        @lorem_123
                    </Text>
                    
                    {/* Progress container */}
                    <View className="flex-row w-3/4 items-center justify-center mt-6 mb-4">
                        <Text className="text-xl text-ivory font-nbold">
                            My Level Progress {"\t\t"}
                        </Text>
                        <Text className="text-xl text-ivory font-nbold">
                            500 XP
                        </Text>
                    </View>

                    {/* Placeholder for progress bar */}
                    <Text className="text-s text-amber font-nbold m-4">
                        Implement me - progress bar
                    </Text>

                    {/* Level completion box */}
                    <View className="mt-6 w-3/4 justify-center flex-row bg-ivory border-amber border-4 rounded-full">
                        <Text className="text-center m-4 text-2xl text-background font-nbold">
                            You Completed 40 Levels!
                        </Text>
                    </View>

                    {/* Level and points summary */}
                    <View className="flex-row justify-center items-center w-3/4 mt-6">
                        {/* Level box */}
                        <View className="w-1/2 bg-amber rounded-3xl m-2 p-3">
                            <Text className="mb-2 text-center text-xl text-background font-nbold">
                                Level
                            </Text>
                            <Text className="text-center text-3xl text-background font-nblack">
                                Gold
                            </Text>
                        </View>
                        {/* Points box */}
                        <View className="w-1/2 bg-rose rounded-3xl m-2 p-3">
                            <Text className="mb-2 text-center text-xl text-background font-nbold">
                                Points
                            </Text>
                            <Text className="text-center text-3xl text-background font-nblack">
                                1000
                            </Text>
                        </View>
                    </View>

                    {/* Buttons for editing profile and logging out */}
                    <View className="w-full items-center bg-indigo rounded-3xl py-10 mt-6">
                        <View className="flex-col w-3/4">
                            {/* Edit profile button */}
                            <MyButton 
                                title="Edit User Profile" 
                                handlePress={() => router.push("/edit-profile")}
                            />
                            {/* Logout link */}
                            <Link className="pt-4" href={"/"}>
                                <Text className="text-center font-nbold text-base text-amber">
                                    Logout
                                </Text>
                            </Link>
                        </View>
                    </View>
                </View>

                {/* Status bar for blending with the app theme */}
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}
