import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {

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