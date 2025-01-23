import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from 'react';

// Basic button using React styling. 
const MyButton = ({ 
    title, 
    handlePress,
    isLoading, 
}) => {

  return (
    <TouchableOpacity 
        onPress={handlePress} 
        activeOpacity={0.7}
        className={`bg-plum rounded-full min-h-[62px] flex flex-row justify-center items-center ${
            isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
    >
        <Text className={'text-2xl font-nblack text-amber'}>
            {title}
        </Text>

        {isLoading && (
            <ActivityIndicator
                animating={isLoading}
                color="#fff"
                size="small"
                className="ml-2"
            />
        )}
    </TouchableOpacity>
  );
};;

export default MyButton;