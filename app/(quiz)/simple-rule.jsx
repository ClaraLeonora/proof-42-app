import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { supabase } from '../../lib/supabase';
import MyButton from '../../components/button';
import OptionButton from '../../components/OptionButton';

export default function SimpleRule() {
    const [questionText, setQuestionText] = useState(''); // Store the question text
    const [options, setOptions] = useState([]); // Store the question options

    useEffect(() => {
        const fetchQuestionData = async () => {
            try {
                console.log('Fetching Level ID...');
                
                // Fetch level 1 UUID from Levels table
                const { data: levelData, error: levelError } = await supabase
                    .from('Levels')
                    .select('id')
                    .eq('level_num', 1)
                    .single();

                if (levelError) throw levelError;
                const levelId = levelData.id;
                console.log('Level ID:', levelId);

                console.log('Fetching Question...');
                // Fetch Question from Questions table
                const { data: questionData, error: questionError } = await supabase
                    .from('Questions')
                    .select('id, question_text') 
                    .eq('level_id', levelId)
                    .single();

                if (questionError) throw questionError;

                console.log('Question Data:', questionData);
                setQuestionText(questionData.question_text);

                // Debug: Log all rows in Question_Options
                const { data: allRows, error: allRowsError } = await supabase
                    .from('Question_Options')
                    .select('*');

                if (allRowsError) {
                    console.error('Error fetching all rows from Question_Options:', allRowsError);
                } else {
                    console.log('All rows in Question_Options table:', allRows);
                }

                console.log('Fetching Options for Question ID:', questionData.id);
                // Fetch the Answer Choices from Question_Options table
                const { data: optionsData, error: optionsError } = await supabase
                    .from('Question_Options') 
                    .select('option_text') 
                    .eq('question_id', questionData.id);

                if (optionsError) throw optionsError;

                console.log('Fetched options data:', JSON.stringify(optionsData, null, 2)); 

                if (optionsData && optionsData.length > 0) {
                    setOptions(optionsData.map(option => option.option_text)); // Extract option_text values
                } else {
                    console.warn('No options found for the question.');
                    setOptions(['No options available']); 
                }

            } catch (error) {
                console.error('Error fetching question data:', error);
            }
        };

        fetchQuestionData();
    }, []);

    useEffect(() => {
        console.log('Updated Options:', options);
    }, [options]);

    const handlePrevious = () => {
        console.log('Previous button pressed');
    };

    const handleNext = () => {
        console.log('Next button pressed');
    };

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-violet">
            <StatusBar style="auto" />

            {/* Display the fetched question text */}
            <Text className="text-3xl font-bold bg-violet rounded-xl p-2 text-center text-ivory">
                Level 1
            </Text>

            <View className="flex-row">
                <Text className="text-sm font-bold bg-amber rounded-full mb-3 text-center text-amber">
                    This is a placeholder fix this
                </Text>
                <Text className="text-sm font-bold bg-plum rounded-full mb-3 text-center text-plum">
                    This is a placeholder fix this
                </Text>
            </View>

            {/* Display the fetched question text */}
            <Text className="text-2xl font-bold bg-plum rounded-xl p-2 mb-3 text-center text-ivory">
                {questionText}
            </Text>


            <View className="w-3/4 mt-56">
                <Image
                    source={require('../../assets/images/quiz_questions/mp-simplerule.png')}
                    className="absolute w-full bottom-1/2 mb-16"
                    resizeMode="contain"
                    key="mp-simplerule"
                ></Image>

                {/* Display question options */}
                {options.map((option, index) => (
                    <View className = "mb-4">
                        <OptionButton
                            key={index}
                            title={option}
                            handlePress={handlePrevious}
                            height={40}
                            width="100%"
                            bgColor="bg-ivory"
                            textColor="text-background"
                            borderColor="border-ivory"
                            borderWidth={1}
                        /> 
                    </View> 
                ))}
            </View>

            {/* Navigation Buttons */}
            <View className="flex-row justify-between w-3/4">
                <MyButton 
                    title="Previous" 
                    handlePress={handlePrevious}
                    height={50}
                    width="45%"
                    bgColor="bg-violet"
                    textColor="text-ivory"
                    borderColor="border-ivory"
                    borderWidth={1}
                />  

                <MyButton 
                    title="Next" 
                    handlePress={handleNext}
                    height={50}
                    width="45%"
                    bgColor="bg-plum"
                    textColor="text-amber"
                    borderColor="border-plum"
                    borderWidth={1}
                />                
            </View>
        </SafeAreaView>
    );
}
