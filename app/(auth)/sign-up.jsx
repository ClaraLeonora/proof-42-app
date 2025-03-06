import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import FormField from '../../components/FormField';
import MyButton from '../../components/button';
import { supabase } from '../../lib/supabase';

export default function SignUp() {
    const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async () => {
        if (form.password !== form.confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
    
        // Sign up the user with supabase auth. 
        const { email, password } = form;
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
    
        // Check for sign up error. 
        if (signUpError) {
            setErrorMessage(signUpError.message);
            return;
        }
    
        // Insert the user email into the 'users' table
        const { error: insertError } = await supabase.from("Users").insert([{ email }]);
    
        // Check for supabase table insert error. 
        if (insertError) {
            setErrorMessage(insertError.message);
            return;
        }

        console.error("Sign-up Error:", signUpError);
        console.error("Insert Error:", insertError);
    
        // Redirect to home page after successful sign-up
        router.push('/sign-in');
    };

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground
                    source={require('../../assets/images/orion-disconnect.png')}
                    className="absolute w-full h-1/3 top-0"
                    resizeMode="cover"
                    key="orion-disconnect"
                />

                <View className="w-3/4 mt-40">
                    <Text className="text-4xl text-ivory font-wsbold">Sign Up</Text>

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
                            borderColor="border-plum"
                        />

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

                        <FormField
                            title="Confirm Password"
                            value={form.confirmPassword}
                            placeholder="Confirm Password"
                            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
                            otherStyles="mt-4"
                            textColor="text-ivory"
                            backgroundColor="bg-background"
                            borderColor="border-plum"
                            isConfirmPassword={true}
                        />
                    </View>

                    {errorMessage ? <Text className="text-red-500 mt-2">{errorMessage}</Text> : null}

                    <View className="pt-8 flex-col">
                        <MyButton title="Sign Up" handlePress={handleSignUp} />
                    </View>

                    <Link href="/" className="pt-8">
                        <Text className="font-nbold text-base text-amber">Back to Earth</Text>
                    </Link>

                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}