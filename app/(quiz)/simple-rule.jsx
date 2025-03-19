import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import { supabase } from '../../lib/supabase';
import MyButton from '../../components/button';

export default function SimpleRule() {
    const [questionText, setQuestionText] = useState(''); // Store the question text

    useEffect(() => {
        const fetchQuestionText = async () => {
            try {
                // Fetch level 1 UUID from Levels table
                const { data: levelData, error: levelError } = await supabase
                    .from('Levels')
                    .select('id')
                    .eq('level_num', 1) // Assuming level_number identifies the level
                    .single();

                if (levelError) throw levelError;

                const levelId = levelData.id;

                // Fetch question_text from Questions table using level UUID
                const { data: questionData, error: questionError } = await supabase
                    .from('Questions')
                    .select('question_text')
                    .eq('level_id', levelId) // Use level_id as foreign key
                    .single();

                if (questionError) throw questionError;

                setQuestionText(questionData.question_text);
            } catch (error) {
                console.error('Error fetching question text:', error);
            }
        };

        fetchQuestionText();
    }, []);

    const handlePrevious = () => {
        console.log('Previous button pressed');
    };

    const handleNext = () => {
        console.log('Next button pressed');
    };

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-plum">
            <StatusBar style="auto" />
            <View style={{ width: '75%', marginTop: 20 }}>
                {/* Display the fetched question text */}
                <Text className="text-2xl font-bold bg-indigo p-4 rounded-2xl mb-5 text-center text-ivory">
                    {questionText}
                </Text>
            </View>

            {/* Navigation Buttons */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <MyButton 
                    title="Previous" 
                    handlePress={handlePrevious}
                    height={50}
                    width="45%"
                    bgColor="bg-plum"
                    textColor="text-ivory"
                    borderColor="border-ivory"
                    borderWidth={1}
                />  

                <MyButton 
                    title="Next" 
                    handlePress={handleNext}
                    height={50}
                    width="45%"
                    bgColor="bg-indigo"
                    textColor="text-amber"
                    borderColor="border-plum"
                    borderWidth={1}
                />                
            </View>
        </SafeAreaView>
    );
}
