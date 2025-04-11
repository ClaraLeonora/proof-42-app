import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, Slot } from "expo-router";
import GlobalProvider from "../context/GlobalProvider";

// Import your global CSS file
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

/**
 * RootLayout component serves as the main layout for the application.
 * It includes the global provider for state management and the stack navigator.
 * It also handles font loading and splash screen management.
 */
const RootLayout = () => {
    // Load custom fonts using Expo's font loading system
    const [fontsLoaded, error] = useFonts({
        "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
        "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "WorkSans-Bold": require("../assets/fonts/WorkSans-Bold.ttf"),
        "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
  });

  // Handle the splash screen and font loading
  // This effect will hide the splash screen (launch screen) once the fonts are loaded
  // and will throw an error if there was an issue loading the fonts.
  useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) {
        SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded) {
        return null;
    }

  /**
   * RootLayout component serves as the main layout for the application.
   * It includes the global provider for state management and the stack navigator.  
   */
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

// Export the RootLayout component as the default export
export default RootLayout;
export { Slot };