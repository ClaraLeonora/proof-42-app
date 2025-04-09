import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home"/>
        <Stack.Screen name="profile"/>
        <Stack.Screen name="edit-profile"/>
        <Stack.Screen name="quiz-panel"/>
      </Stack>

      <StatusBar backgroundColor="#5706F7" />
    </>
  );
};

export default TabsLayout;