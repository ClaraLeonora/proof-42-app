import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from 'react';

// Basic button using React styling.
// Allows for customization within the files. 
// Default styling is plum with amber text 
const MyButton = ({ 
    title, 
    handlePress,
    isLoading,
    height = 62,
    width = '100%',
    bgColor = 'bg-plum',
    textColor = 'text-amber',
    borderColor, // Optional border color
    borderWidth = 2 // Optional border width, defaults to 2
}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress} 
        activeOpacity={0.7}
        className={`${bgColor} rounded-full flex flex-row justify-center items-center ${
            isLoading ? "opacity-50" : ""
        } ${borderColor ? borderColor : ''}`} // Apply borderColor if it's provided
        style={{
            height, 
            width,
            borderWidth: borderWidth, // Add the border width if provided
        }}
        disabled={isLoading}
    >
        <Text className={`text-2xl font-nblack ${textColor}`}>
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
};

export default MyButton;
