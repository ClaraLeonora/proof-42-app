import { useEffect } from "react";
import { useFonts } from "expo-font";
import "react-native-url-polyfill/auto";
import { SplashScreen, Stack } from "expo-router";
import GlobalProvider from "../context/GlobalProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "WorkSans-Bold": require("../assets/fonts/WorkSans-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;