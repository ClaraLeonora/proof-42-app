import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from 'react';

// Basic button using React styling. 
const HomeButton = ({ 
    title, 
    handlePress,
    isLoading, 
}) => {

  return (
    <TouchableOpacity 
        onPress={handlePress} 
        activeOpacity={0.7}
        className={`bg-amber rounded-full min-h-[52px] flex-row justify-center items-center ${
            isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
    >
        <Text className={'text-2xl font-nbold text-background'}>
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

export default HomeButton;