import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'

// https://github.com/adrianhajdin/aora/blob/main/components/FormField.jsx

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
  }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className="py-2 text-2xl text-ivory font-nbold">{title}</Text>
  
        <View className="h-12 px-2 bg-background border-b-hairline border-plum flex flex-row items-center">
          <TextInput
            className="flex-1 text-ivory font-nbold text-lg"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#958F80"  
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
            {...props}
          />
  
          {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? icons.eyeOpen : icons.eyeClosed}
                className="w-20 h-20"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

export default FormField;