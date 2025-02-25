import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';
import MyButton from '../../components/button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from "expo-router";
import FormField from '../../components/FormField';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function ForgotPassword() {
    const [form, setForm] = useState({
        email: '',
    });
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async () => {
        const { email } = form;

        // Reset the error and message state
        setMessage('');
        setErrorMessage('');

        // Send reset password email
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) {
            setErrorMessage(error.message);
        } else {
            setMessage('Password reset link sent! Check your email.');
            // Optionally, redirect to sign-in or another page
            // router.push("/sign-in");
        }
    };

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-background"> 
            <Image 
                source={require('../../assets/images/beacon.png')}
                className="pb-96 absolute left-1 bottom-96 max-w-5xl h-full z-0"
                resizeMode="s"
                key="beacon-bottom"
            />
            
            <View className="w-3/4 pb-20 z-10">
                <Text className="text-5xl text-ivory font-wsbold">
                    Forgot{"\n"}Password
                </Text>
                
                <View>
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

                {errorMessage ? <Text className="text-red-500 mt-2">{errorMessage}</Text> : null}
                {message ? <Text className="text-green-500 mt-2">{message}</Text> : null}

                <View className="py-8 flex-col"> 
                    <MyButton 
                        title="Send Link" 
                        handlePress={handleSubmit}
                    />
                </View>

                <Link href={"/"}>
                    <Text className="font-nbold text-base text-amber">
                        Back to Earth
                    </Text>
                </Link>

                <StatusBar style="auto" />
            </View>

            <Image 
                source={require('../../assets/images/beacon.png')}
                className="pt-96 absolute right-20 top-96 max-w-3xl h-full z-0"
                resizeMode="cover"
                key="beacon-top"
            />
        </SafeAreaView>        
    );
}
