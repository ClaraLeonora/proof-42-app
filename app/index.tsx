import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App(){
    return(
        // Our flex box to contain the following contents. 
        <View className="flex-1 items-center justify-center bg-black">
            <Text className="text-3xl text-ivory">Hello World</Text>
            {/* Let's blend our status bar. */}
            <StatusBar style="auto" />
        </View>
    );
}