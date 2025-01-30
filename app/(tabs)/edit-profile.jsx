import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, Linking } from 'react-native';
import MyButton from '../../components/button';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from "expo-router"
import FormField from '../../components/FormField';
import { useState } from 'react';

export default function EditProfile(){
    const[form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleContactSupport = () => {
        Linking.openURL('mailto:dgdimarc@ncsu.edu');
    };

    return(

        <SafeAreaView className="flex-1 justify-center bg-indigo"> 
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 30, paddingTop: 30}}>

            {/* Title */}
            <Text className="pb-4 font-wsblack text-3xl text-ivory">
                        Edit User Profile
            </Text>

            {/* Logout link */} 
            <Link 
                href={"../index"}
                className="pb-8 text-center">
                <Text className="font-nbold text-base text-amber">
                    Logout
                </Text>
            </Link>
            
            {/* Profile Image */}
            <View className="bg-background rounded-full">
                <Image
                    source={require('../../assets/images/cat-profile.png')}
                    className="w-40 h-40 rounded-full"
                    resizeMode="contain"
                />
            </View>

            {/* Container for components. */}
            <View className="w-3/4 "> 
                {/* Container for form fields. */}
                <View >
                    {/* Email input text */} 
                    <FormField
                        title="Change Email"
                        value={form.email}
                        placeholder="Email"
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-4"
                        keyboardType="email-address"
                        textColor="text-ivory"
                        backgroundColor="bg-indigo"
                        borderColor="border-ivory"
                    />

                    {/* Password input text */}
                    <FormField
                        title="Password"
                        value={form.password}
                        placeholder="Password"
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-4"
                        textColor="text-ivory"
                        backgroundColor="bg-indigo"
                        borderColor="border-ivory"
                    />

                    {/* Confirm Password input text */}
                    <FormField
                        title="Confirm Password"
                        value={form.confirmPassword}
                        placeholder="Password"
                        handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
                        otherStyles="mt-4"
                        textColor="text-ivory"
                        backgroundColor="bg-indigo"
                        borderColor="border-ivory"
                        isConfirmPassword={true}
                    />
                </View>

                {/* Chang theme row */}
                <View className="pt-8 flex-row justify-center">
                    <Text className="font-nbold text-2xl text-amber">
                        Change Theme {"\t"}
                    </Text> 
                    <Text className="font-nbold text-2xl text-amber">
                        "Toggle"
                    </Text> 
                </View>

                {/* Back to landing page */} 
                <Text 
                    onPress={handleContactSupport}
                    className="pt-8 text-center font-nbold text-base text-rose">
                    Contact Support
                </Text>

                {/* Buttons for sign in and sign up. */}
                <View className="pt-8 flex-row justify-evenly"> 
                    <MyButton 
                        title="Submit" 
                        handlePress={() => router.push("/profile")}
                        height = '40'
                        width = '40%'
                        bgColor = 'bg-plum'
                        textColor = 'text-amber'
                    />
                    <MyButton 
                        title="Cancel" 
                        handlePress={() => router.push("/profile")}
                        height = '40'
                        width = '40%'
                        bgColor = 'bg-ivory'
                        textColor = 'text-background'
                    />
                </View>

                {/* Let's blend our status bar. */}
                <StatusBar style="auto" />
            
            </View>
            </ScrollView>
        </SafeAreaView>        
    );
}
