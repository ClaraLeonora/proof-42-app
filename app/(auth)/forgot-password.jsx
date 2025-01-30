import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';
import MyButton from '../../components/button';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from "expo-router"
import FormField from '../../components/FormField';
import { useState } from 'react';

export default function ForgotPassword(){
    const[form, setForm] = useState({
        email: '',
        password: '',
    })
    
    const handleSubmit = () => {
        // Add any form validation or API call here if needed
        router.push("/sign-in");
    }

    return(

        <SafeAreaView className="flex-1 items-center justify-center bg-background"> 

            {/* Beacon image in top right corner */} 
            <Image 
                source={require('../../assets/images/beacon.png')}
                className="pb-96 absolute left-1 bottom-96 max-w-5xl h-full z-0"
                resizeMode="s"
                key="beacon-bottom"
            />
            
            <View className="w-3/4 pb-20 z-10">
                {/* Title */} 
                <Text 
                    className=" text-5xl text-ivory font-wsbold">
                    Forgot{"\n"}Password
                </Text>
                
                <View>
                    {/* Email input text */} 
                    <FormField
                        title="Email"
                        value={form.email}
                        placeholder="Email"
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-4"
                        keyboardType="email-address"
                        textColor="text-ivory"
                        backgroundColor="bg-background"
                        borderColor="border-ivory"
                    />
                </View>

                {/* Buttons for sign in and sign up. */}
                <View className="py-8 flex-col"> 
                    <MyButton 
                        title="Submit" 
                        handlePress={handleSubmit}
                    />
                </View>

                {/* Back to landing page */} 
                <Link href={"/"}>
                    <Text className="font-nbold text-base text-amber">
                        Back to Earth
                    </Text>
                </Link>

                {/* Let's blend our status bar. */}
                <StatusBar style="auto" />
            </View>

            {/* Beacon image in bottom left corner */}
            <Image 
                source={require('../../assets/images/beacon.png')}
                className="pt-96 absolute right-20 top-96 max-w-3xl h-full z-0"
                resizeMode="cover"
                key="beacon-top"
            />
        </SafeAreaView>        
    );
}
