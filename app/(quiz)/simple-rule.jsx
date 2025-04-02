import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { supabase } from '../../lib/supabase';
import MyButton from '../../components/button';
import OptionButton from '../../components/OptionButton';

export default function SimpleRule() {
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState([]);
    const [imageUrl, setImageUrl] = useState(null); // Store the image URL

    useEffect(() => {
        const fetchQuestionData = async () => {
            try {
                console.log('Fetching Level ID...');
                
                const { data: levelData, error: levelError } = await supabase
                    .from('Levels')
                    .select('id')
                    .eq('level_num', 1)
                    .single();

                if (levelError) throw levelError;
                const levelId = levelData.id;
                console.log('Level ID:', levelId);

                console.log('Fetching Question...');
                const { data: questionData, error: questionError } = await supabase
                    .from('Questions')
                    .select('id, question_text, image_url') // Fetch image_url
                    .eq('level_id', levelId)
                    .single();

                if (questionError) throw questionError;

                console.log('Question Data:', questionData);
                setQuestionText(questionData.question_text);
                setImageUrl(questionData.image_url); // Set image URL

                console.log('Fetching Options for Question ID:', questionData.id);
                const { data: optionsData, error: optionsError } = await supabase
                    .from('Question_Options') 
                    .select('option_text') 
                    .eq('question_id', questionData.id);

                if (optionsError) throw optionsError;

                console.log('Fetched options data:', JSON.stringify(optionsData, null, 2)); 

                setOptions(optionsData.length > 0 ? optionsData.map(option => option.option_text) : ['No options available']);

            } catch (error) {
                console.error('Error fetching question data:', error);
            }
        };

        fetchQuestionData();
    }, []);

    // Log the image URL when it is set
    useEffect(() => {
        console.log('Updated Image URL:', imageUrl);
    }, [imageUrl]);

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-violet">
            <StatusBar style="auto" />

            <Text className="text-3xl font-bold bg-violet rounded-xl p-2 text-center text-ivory">
                Level 1
            </Text>

            <Text className="text-2xl font-bold bg-plum rounded-xl p-2 mb-3 text-center text-ivory">
                {questionText}
            </Text>

            <View className="w-3/4 mt-56">
            {imageUrl ? (
            <Image
                source={{ uri: imageUrl }} 
                className="w-full h-3/4"
                resizeMode="contain"
                />
            ) : (
                <Text className="text-center text-sm text-gray-500">No image available</Text>
            )}

                {options.map((option, index) => (
                    <View key={index} className="mb-4">
                        <OptionButton
                            title={option}
                            handlePress={() => console.log(`Selected: ${option}`)}
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

            <View className="flex-row justify-between w-3/4">
                <MyButton 
                    title="Previous" 
                    handlePress={() => console.log('Previous button pressed')}
                    height={50}
                    width="45%"
                    bgColor="bg-violet"
                    textColor="text-ivory"
                    borderColor="border-ivory"
                    borderWidth={1}
                />  

                <MyButton 
                    title="Next" 
                    handlePress={() => console.log('Next button pressed')}
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
