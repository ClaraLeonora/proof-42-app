import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    textColor = "text-ivory",
    backgroundColor = "bg-background",
    borderColor = "border-plum",
    placeholderTextColor = "#808080",
    isConfirmPassword = false,
    ...props
  }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className={`py-2 text-2xl ${textColor} font-nbold`}>{title}</Text>
  
        <View className={`h-12 px-2 ${backgroundColor} border-b-2 ${borderColor} flex-row items-center`}>
          <TextInput
            className={`flex-1 ${textColor} font-nbold text-lg`}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}  
            onChangeText={handleChangeText}
            secureTextEntry={(title === "Password" || isConfirmPassword) && !showPassword}
            {...props}
          />
  
          {(title === "Password" || isConfirmPassword) && (
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