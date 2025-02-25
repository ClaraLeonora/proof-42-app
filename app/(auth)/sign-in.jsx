import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import FormField from '../../components/FormField';
import MyButton from '../../components/button';
import { supabase } from '../../lib/supabase';

export default function SignIn() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        const { email, password } = form;
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            setErrorMessage(error.message);
        } else {
            router.push('/home'); // Redirect to home page
        }
    };

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-background">
            <View className="w-3/4 top-28">
                <Text className="text-5xl text-ivory font-wsbold">Sign In</Text>

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

                {errorMessage ? <Text className="text-red-500 mt-2">{errorMessage}</Text> : null}

                <Link className="pt-8" href="/forgot-password">
                    <Text className="pt-8 font-nbold text-base text-rose">Forgot Password?</Text>
                </Link>

                <View className="py-8 flex-col">
                    <MyButton title="Login" handlePress={handleLogin} />
                </View>

                <Link href="/">
                    <Text className="font-nbold text-base text-amber">Back to Earth</Text>
                </Link>

                <StatusBar style="auto" />
            </View>

            <ImageBackground
                source={require('../../assets/images/orion-connect.png')}
                className="absolute w-full h-1/2 top-0"
                resizeMode="cover"
                key="orion-connect"
            />
        </SafeAreaView>
    );
}
