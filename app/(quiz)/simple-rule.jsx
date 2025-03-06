import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Button, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import MyButton from '../../components/button';
import { supabase } from '../../lib/supabase';

export default function SimpleRule() {
    const [currentQuestion, setCurrentQuestion] = useState(1); // Track the current question
    const [questionData, setQuestionData] = useState(null); // To store the current question data
    const [options, setOptions] = useState([]); // To store question options
    const [selectedAnswer, setSelectedAnswer] = useState(null); // To store selected answer

    // Fetch question and options from Supabase
    useEffect(() => {
        const fetchData = async () => {
            // Fetch the question data (image_url)
            const { data: question, error: questionError } = await supabase
                .from('Questions')
                .select('image_url')
                .eq('id', currentQuestion) // Use the current question ID
                .single();

            if (questionError) {
                console.error('Error fetching question:', questionError);
            } else {
                setQuestionData(question);
            }

            // Fetch the options for the question
            const { data: optionsData, error: optionsError } = await supabase
                .from('Question Options')
                .select('option_text')
                .eq('question_id', currentQuestion); // Link question options to the current question

            if (optionsError) {
                console.error('Error fetching options:', optionsError);
            } else {
                setOptions(optionsData);
            }
        };

        fetchData();
    }, [currentQuestion]);

    const handleNext = () => {
        if (selectedAnswer) {
            setCurrentQuestion((prev) => prev + 1); // Go to the next question
            setSelectedAnswer(null); // Reset the selected answer for the next question
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion((prev) => prev - 1); // Go to the previous question
            setSelectedAnswer(null); // Reset the selected answer for the previous question
        }
    };

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-violet">

            {/* Question image with logic rules */}
            <ImageBackground
                source={require('../../assets/images/quiz questions/mp-simplerule.png')}
                className="absolute w-3/4 h-1/2 top-10"
                resizeMode="contain"
                key="orion-connect"
            />

            <View className="w-3/4 top-10">
                {/* Title: "Which rule is applied?" */}
                <Text className="text-xl text-ivory font-wsbold bg-plum p-2 rounded-lg mb-4 text-center">
                    Which logic rule was applied?
                </Text>

                {/* Question Image */}
                {questionData && (
                    <Image
                        source={{ uri: questionData.image_url }}
                        style={{ width: '100%', height: 200, borderRadius: 10, marginBottom: 20 }}
                        resizeMode="contain"
                    />
                )}

                {/* Question Options */}
                <View style={{ marginBottom: 20 }}>
                    {options.map((option, index) => (
                        <Button
                            key={index}
                            title={option.option_text}
                            onPress={() => setSelectedAnswer(option.option_text)} // Track selected answer
                            color={selectedAnswer === option.option_text ? 'blue' : 'gray'} // Highlight selected option
                        />
                    ))}
                </View>

                {/* Navigation Buttons */}
                <View className="flex-row justify-between w-full">
                    <MyButton 
                        title="Previous" 
                        handlePress={handlePrevious}
                        height="50"
                        width="45%"
                        bgColor="bg-violet"
                        textColor="text-ivory"
                        borderColor="border-ivory"
                        borderWidth={1}
                    />  

                    <MyButton 
                        title="Next" 
                        handlePress={handleNext}
                        height="50"
                        width="45%"
                        bgColor="bg-plum"
                        textColor="text-amber"
                        borderColor="border-plum"
                        borderWidth={1}
                    />                
                </View>

            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
