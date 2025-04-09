import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const QuizLayout = () => {

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="simple-rule"/>
        <Stack.Screen name="level-up"/>
      </Stack>

      <StatusBar backgroundColor="auto" />
    </>
  );
};

export default QuizLayout;