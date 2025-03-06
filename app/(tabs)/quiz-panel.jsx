import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import MyButton from '../../components/button';
import { router } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-violet">
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 100 }}>
                {/* Star background at the top */}
                <ImageBackground 
                    source={require('../../assets/images/star-cluster.png')}
                    className="absolute w-full h-1/2 top-0"
                />

                {/* Cloud cover image */}
                <ImageBackground
                    source={require('../../assets/images/cloud-flat.png')}
                    className="absolute top-10 h-full w-full scale-150"
                    resizeMode="cover"
                />

                {/* Title at the top */}
                <Text className="absolute top-[15%] text-6xl text-ivory font-wsblack text-center">
                    Practice{"\n"}Proofs
                </Text>

                {/* Return button */}
                <View className="mt-[70%] sm:mt-[70%] w-full flex-row justify-center">
                    <MyButton 
                        title="Resume" 
                        handlePress={() => router.push("/simple-rule")}
                        height="50"
                        width="40%"
                        bgColor="bg-indigo "
                        textColor="text-ivory"
                    />
                </View>

                {/* Buttons grid */}
                <View className="w-full items-center mt-10 px-4">
                    <View className="w-3/4 justify-center gap-x-6 gap-y-6 flex-row flex-wrap">
                        {[...Array(7)].map((_, i) => (
                            <MyButton 
                                key={i} 
                                title={`Level ${i + 1} Placeholder`} 
                                handlePress={() => router.push("/level-up")}
                                height="50"
                                className="min-w-[40%] max-w-[45%]"
                                borderColor="border-plum"
                                textColor="text-amber"
                            />
                        ))}
                    </View>
                </View>

                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

