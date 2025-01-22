import { View, Text, Pressable, StyleSheet } from "react-native";
import React from 'react';

// Basic button using React styling. 
const MyButton = ({ label ='' }) => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.button}>
            <Text style={styles.text}>
                {label}
            </Text>
        </Pressable>
    </View>
  );
};

// Style sheet for basic button. 
const styles = StyleSheet.create({
  container: {
    marginVertical: 10, // Adjust this value to reduce the space between buttons
  },
  button: {
    backgroundColor: '#5706F7',
    padding: 16,
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  text: {
    color: '#FEB800',
    fontFamily: 'Nunito-Black',
    textAlign: 'center',
    fontSize: 24
  },
});

export default MyButton;