import { Stack, Redirect, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

const QuizLayout = () => {

  return (
    <>
      <Stack>
        <Stack.Screen name="full-proof" options={{ headerShown: false }} />
        <Stack.Screen name="level-up" options={{ headerShown: false }} />
        <Stack.Screen name="match-rules" options={{ headerShown: false }} />
        <Stack.Screen name="select-exp" options={{ headerShown: false }} />
        <Stack.Screen name="simple-rule" options={{ headerShown: false }} />
        <Stack.Screen name="SO-acronym-assist" options={{ headerShown: false }} />
        <Stack.Screen name="SO-fill-proof" options={{ headerShown: false }} />
        <Stack.Screen name="SO-only-acronym" options={{ headerShown: false }} />
        <Stack.Screen name="SO-rule-app" options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor="#5706F7" />
    </>
  );
};

export default QuizLayout;