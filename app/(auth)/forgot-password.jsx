import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, SafeAreaView } from 'react-native';
import MyButton from '../../components/button';
import { Link } from "expo-router";
import FormField from '../../components/FormField';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

/**
 * The ForgotPassword component allows users to reset their password.
 * It includes an email input field and a button to send a reset link.
 * On submission, it validates the email and sends a reset password link.
 * It also displays success or error messages based on the response.
 */
export default function ForgotPassword() {
    // State to manage form input
    const [form, setForm] = useState({ email: '' });
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = async () => {
        const { email } = form;

        // Reset the error and message state
        setMessage('');
        setErrorMessage('');

        // Validate email input
        if (!email) {
            setErrorMessage('Please enter your email.');
            return;
        }

        // Send reset password email
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) {
            setErrorMessage(error.message);
        } else {
            setMessage('Password reset link sent! Check your email.');
        }
    };

    /**
     * Renders the ForgotPassword component.
     * It includes a background image, a title, an email input field,
     * a submit button, and a navigation link back to the home page.
     * It also displays success or error messages based on the submission result.
     */
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-background">
            {/* Background Image - Bottom */}
            <Image 
                source={require('../../assets/images/beacon.png')}
                className="pb-96 absolute left-1 bottom-96 max-w-5xl h-full z-0"
                resizeMode="cover"
                key="beacon-bottom"
            />

            {/* Main Content */}
            <View className="w-3/4 pb-20 z-10">
                
                {/* Page Title */}
                <Text className="text-5xl text-ivory font-wsbold">
                    Forgot{"\n"}Password
                </Text>

                {/* Email Input Field */}
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

                {/* Error and Success Messages */}
                {errorMessage ? <Text className="text-red-500 mt-2">{errorMessage}</Text> : null}
                {message ? <Text className="text-green-500 mt-2">{message}</Text> : null}

                {/* Submit Button */}
                <View className="py-8 flex-col">
                    <MyButton 
                        title="Send Link"
                        borderColor="border-plum" 
                        handlePress={handleSubmit}
                    />
                </View>

                {/* Navigation Link */}
                <Link href={"/"}>
                    <Text className="font-nbold text-base text-amber">
                        Back to Earth
                    </Text>
                </Link>

                <StatusBar style="auto" />
            </View>

            {/* Background Image - Top */}
            <Image 
                source={require('../../assets/images/beacon.png')}
                className="pt-96 absolute right-20 top-96 max-w-3xl h-full z-0"
                resizeMode="cover"
                key="beacon-top"
            />
        </SafeAreaView>
    );
}
