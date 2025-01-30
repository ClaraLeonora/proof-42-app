import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import MyButton from '../../components/button';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from "expo-router"
import FormField from '../../components/FormField';
import { useState } from 'react';

export default function SignUp(){
    const[form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })
    
    return(
        <SafeAreaView className="flex-1 bg-background"> 
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* Cloud image at top of screen */} 
                <ImageBackground 
                    source={require('../../assets/images/orion-disconnect.png')}
                    className="absolute w-full h-1/3 top-0"
                    resizeMode="cover"
                    key="orion-disconnect"
                />

                <View className="w-3/4 mt-40">
                    {/* Title */} 
                    <Text className="text-4xl text-ivory font-wsbold">
                        Sign Up
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
                            borderColor="border-plum"
                        />

                        {/* Password input text */}
                        <FormField
                            title="Password"
                            value={form.password}
                            placeholder="Password"
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            otherStyles="mt-4"
                            textColor="text-ivory"
                            backgroundColor="bg-background"
                            borderColor="border-plum"
                        />

                        {/* Confirm Password input text */}
                        <FormField
                            title="Confirm Password"
                            value={form.confirmPassword}
                            placeholder="Password"
                            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
                            otherStyles="mt-4"
                            textColor="text-ivory"
                            backgroundColor="bg-background"
                            borderColor="border-plum"
                            isConfirmPassword={true}
                        />
                    </View>

                    {/* Buttons for sign in and sign up. */}
                    <View className="pt-8 flex-col"> 
                        <MyButton 
                            title="Login" 
                            handlePress={() => router.push("/home")}
                        />
                    </View>

                    {/* Back to landing page */} 
                    <Link 
                        href={"/"}
                        className="pt-8">
                        <Text className="font-nbold text-base text-amber">
                            Back to Earth
                        </Text>
                    </Link>

                    {/* Let's blend our status bar. */}
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </SafeAreaView>        
    );
}
