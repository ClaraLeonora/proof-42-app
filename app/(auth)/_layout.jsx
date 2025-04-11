import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

/**
 * Wraps the auth screens in a stack navigator.
 * This layout is used for all the authentication-related screens.
 * It is used to keep the authentication flow separate from the main app flow.
 */
const AuthLayout = () => {

    // Set headerShown to true if you'd like to see headers (debugging purposes).
    return (
        <>
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="sign-in"/>
            <Stack.Screen name="sign-up"/>
            <Stack.Screen name="home"/>
            <Stack.Screen name="forgot-password"/>
            <Stack.Screen name="reset-password"/>
        </Stack>

        <StatusBar backgroundColor="auto" />
        </>
    );
};

export default AuthLayout;