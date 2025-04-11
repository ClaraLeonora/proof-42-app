import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import FormField from '../../components/FormField';
import MyButton from '../../components/button';
import { supabase } from '../../lib/supabase';

/**
 * SignIn component
 * This component renders the sign-in screen for the application.
 * It includes form fields for email and password, a login button,
 * and a link to reset the password.
 * It uses Supabase for authentication.
 * @returns {JSX.Element} The SignIn component.
 */
export default function SignIn() {
    // State for form inputs and error messages
    const [form, setForm] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    // Handles user login
    const handleLogin = async () => {
        const { email, password } = form;

        // Validate email and password
        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                setErrorMessage(error.message); // Display error message
            } else {
                router.push('home'); // Redirect to home page on success
            }
        } catch (err) {
            setErrorMessage('An unexpected error occurred. Please try again.'); // Handle unexpected errors
        }
    };

    // Render the sign-in screen
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-background">
            {/* Main container */}
            <View className="w-3/4 top-28">
                {/* Page title */}
                <Text className="text-5xl text-ivory font-wsbold">Sign In</Text>

                {/* Form fields for Email and Password */}
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
                </View>

                {/* Error message */}
                {errorMessage ? <Text className="text-red-500 mt-2">{errorMessage}</Text> : null}

                {/* Forgot password link */}
                <Link className="pt-8" href="/forgot-password">
                    <Text className="pt-8 font-nbold text-base text-rose">Forgot Password?</Text>
                </Link>

                {/* Login button */}
                <View className="py-8 flex-col">
                    <MyButton title="Login" handlePress={handleLogin} />
                </View>

                {/* Back to Earth link */}
                <Link href="/">
                    <Text className="font-nbold text-base text-amber">Back to Earth</Text>
                </Link>

                {/* Status bar */}
                <StatusBar style="auto" />
            </View>

            {/* Background image */}
            <ImageBackground
                source={require('../../assets/images/orion-connect.png')}
                className="absolute w-full h-1/2 top-0"
                resizeMode="cover"
                key="orion-connect"
            />
        </SafeAreaView>
    );
}
