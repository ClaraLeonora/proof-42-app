import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

/**
 * QuizLayout component for the quiz section of the app.
 * It defines the navigation stack for the quiz screens.
 * The component is styled using Tailwind CSS classes.
 */
const QuizLayout = () => {

    // Set headerShown to true if you'd like to see headers (debugging purposes).
    return (
        <>
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="full-proof"/>
            <Stack.Screen name="level-up"/>
            <Stack.Screen name="match-rules"/>
            <Stack.Screen name="select-exp"/>
            <Stack.Screen name="simple-rule"/>
        </Stack>

        <StatusBar backgroundColor="auto" />
        </>
    );
};

export default QuizLayout;