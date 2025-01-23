import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';
import MyButton from '../../components/button';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from "expo-router"
import FormField from '../../components/FormField';
import { useState } from 'react';

export default function SignIn(){
    const[form, setForm] = useState({
        email: '',
        password: '',
    })
    
    return(

        <SafeAreaView className="flex-1 items-center justify-center bg-background"> 
            
            {/* Cloud image at top of screen */} 
            <ImageBackground 
                source={require('../../assets/images/orion-connect.png')}
                className="absolute w-full h-full -top-40"
                resizeMode="contain"
                key="orion-connect"
            />

            <View className="w-3/4 top-28">

                {/* Title */} 
                <Text 
                    className=" text-5xl text-ivory font-wsbold">
                    Sign In
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
                    />

                    {/* Password input text */}
                    <FormField
                        title="Password"
                        value={form.password}
                        placeholder="Password"
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-4"
                    />
                </View>


                {/* Forgot password link */} 
                <Link 
                    className="pt-8"
                    href={"/forgot-password"}>
                    <Text className=" pt-8 font-nbold text-base text-rose">
                        Forgot Password?
                    </Text>
                </Link>

                {/* Buttons for sign in and sign up. */}
                <View className="py-8 flex-col"> 
                    <MyButton 
                        title="Login" 
                        handlePress={() => router.push("/home")}
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
        </SafeAreaView>        
    );
}
