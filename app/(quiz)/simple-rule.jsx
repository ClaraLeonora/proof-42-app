import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { supabase } from '../../lib/supabase';
import MyButton from '../../components/button';
import OptionButton from '../../components/OptionButton';
import { router } from "expo-router";

export default function SimpleRule() {
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);

    // States to store options selected, correct option, and answered status
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);  // Track if the correct answer is selected
    const [clickedOptions, setClickedOptions] = useState([]); // Track clicked options (wrong ones)

    useEffect(() => {
        fetchQuestionData();
    }, []);

    const fetchQuestionData = async () => {
        try {
            const levelId = await fetchLevelId(1);
            const questionData = await fetchQuestion(levelId);
            setQuestionText(questionData.question_text);
            setImageUrl(questionData.image_url);
            const optionsData = await fetchOptions(questionData.id);
            setOptions(optionsData.length > 0 ? optionsData.map(option => option.option_text) : ['No options available']);
            // Fetch correct option
            const correct = optionsData.find(option => option.is_correct);
            setCorrectOption(correct);
        } catch (error) {
            console.error('Error fetching question data:', error);
        }
    };

    const fetchLevelId = async (levelNum) => {
        const { data, error } = await supabase
            .from('Levels')
            .select('id')
            .eq('level_num', levelNum)
            .single();
        if (error) throw error;
        return data.id;
    };

    const fetchQuestion = async (levelId) => {
        const { data, error } = await supabase
            .from('Questions')
            .select('id, question_text, image_url')
            .eq('level_id', levelId)
            .single();
        if (error) throw error;
        return data;
    };

    const fetchOptions = async (questionId) => {
        const { data, error } = await supabase
            .from('Question_Options')
            .select('option_text, is_correct')
            .eq('question_id', questionId);
        if (error) throw error;
        return data;
    };

    // Handles the option selection and checks if the selected option is correct
    const handleOptionSelect = (option) => {
        if (!isAnswered) {
            setSelectedOption(option);
            if (option === correctOption.option_text) {
                setIsAnswered(true); // Mark as answered correctly
            } else {
                setClickedOptions((prev) => [...prev, option]); // Track wrong options
            }
        }
    };

    return (
        <SafeAreaView className="flex-1 items-center justify-start bg-violet">
            <StatusBar style="auto" />
            <Header title="Level 1" />
            <QuestionSection 
                questionText={questionText} 
                imageUrl={imageUrl} 
                options={options} 
                selectedOption={selectedOption} 
                correctOption={correctOption}
                isAnswered={isAnswered}
                clickedOptions={clickedOptions}
                handleOptionSelect={handleOptionSelect}
            />
            <NavigationButtons />
        </SafeAreaView>
    );
}

const Header = ({ title }) => (
    <Text className="text-3xl font-bold bg-violet rounded-xl p-2 text-center text-ivory">
        {title}
    </Text>
);

const QuestionSection = ({ questionText, imageUrl, options, selectedOption, correctOption, isAnswered, clickedOptions, handleOptionSelect }) => (
    <View className="w-3/4">
        <Text className="text-2xl font-bold bg-plum rounded-xl p-2 mb-3 text-center text-ivory">
            {questionText}
        </Text>
        {imageUrl ? (
            <Image
                source={{ uri: imageUrl }}
                resizeMode="contain"
                className="w-full"
                style={{ height: 200 }}
            />
        ) : (
            <Text className="text-center text-sm text-gray-500">Error: No image available</Text>
        )}
        {options.map((option, index) => (
            <OptionButtonWrapper 
                key={index} 
                option={option}
                selectedOption={selectedOption}
                correctOption={correctOption}
                isAnswered={isAnswered}
                clickedOptions={clickedOptions}
                handleOptionSelect={handleOptionSelect}
            />
        ))}
    </View>
);

const OptionButtonWrapper = ({ option, selectedOption, correctOption, isAnswered, clickedOptions, handleOptionSelect }) => {
    // Determine button state based on selection status
    const isButtonDisabled = (isAnswered && option !== correctOption.option_text) || clickedOptions.includes(option);

    return (
        <View className="mb-4">
            <OptionButton
                title={option}
                handlePress={() => handleOptionSelect(option)}
                height={40}
                width="100%"
                // Change button color based on correctness
                bgColor={
                    option === selectedOption
                        ? (option === correctOption.option_text ? "bg-amber" : "bg-rose") 
                        : "bg-ivory"
                }
                textColor="text-background"
                borderColor="border-ivory"
                borderWidth={1}
                // Disable button based on conditions
                disabled={isButtonDisabled}
            />
        </View>
    );
};

const NavigationButtons = () => (
    <View className="flex-row justify-between w-3/4">
        <MyButton
            title="Previous"
            handlePress={() => router.push("/quiz-panel")}
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
);
