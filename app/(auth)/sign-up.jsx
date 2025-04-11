import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import FormField from '../../components/FormField';
import MyButton from '../../components/button';
import { supabase } from '../../lib/supabase';

/**
 * SignUp component for user registration.
 * It allows users to create an account by providing their email and password.
 * It also includes a confirmation password field to ensure the user enters the same password twice.
 * Upon successful sign-up, the user is redirected to the sign-in page.
 * If there are any errors during the sign-up process, an error message is displayed.
 * @returns {JSX.Element} The SignUp component.
 */
export default function SignUp() {
    // State to manage form inputs and error messages
    const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle user sign-up
    const handleSignUp = async () => {
        // Validate password and confirm password match
        if (form.password !== form.confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        const { email, password } = form;

        try {
            // Sign up the user with Supabase Auth
            const { error: signUpError } = await supabase.auth.signUp({ email, password });
            if (signUpError) throw new Error(signUpError.message);

            // Insert the user email into the 'Users' table
            const { error: insertError } = await supabase.from("Users").insert([{ email }]);
            if (insertError) throw new Error(insertError.message);

            // Redirect to the sign-in page after successful sign-up
            router.push('/sign-in');
        } catch (error) {
            // Set error message for display
            setErrorMessage(error.message);
        }
    };

    /**
     * Render the SignUp component.
     */
    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* Background Image */}
                <ImageBackground
                    source={require('../../assets/images/orion-disconnect.png')}
                    className="absolute w-full h-1/3 top-0"
                    resizeMode="cover"
                    key="orion-disconnect"
                />

                <View className="w-3/4 mt-40">
                    {/* Page Title */}
                    <Text className="text-4xl text-ivory font-wsbold">Sign Up</Text>

                    {/* Form Fields */}
                    <View>
                        {/* Email Field */}
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

                        {/* Password Field */}
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

                        {/* Confirm Password Field */}
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

                    {/* Error Message */}
                    {errorMessage ? <Text className="text-red-500 mt-2">{errorMessage}</Text> : null}

                    {/* Sign-Up Button */}
                    <View className="pt-8 flex-col">
                        <MyButton title="Sign Up" handlePress={handleSignUp} />
                    </View>

                    {/* Navigation Link */}
                    <Link href="/" className="pt-8">
                        <Text className="font-nbold text-base text-amber">Back to Earth</Text>
                    </Link>

                    {/* Status Bar */}
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}