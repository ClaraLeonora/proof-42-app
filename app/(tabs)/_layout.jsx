import { Stack, Redirect, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {

  return (
    <>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor="#5706F7" />
    </>
  );
};

export default TabsLayout;