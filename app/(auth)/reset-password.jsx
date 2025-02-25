import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import FormField from '../../components/FormField';
import MyButton from '../../components/button';
import { supabase } from '../../lib/supabase';
import { useRoute } from '@react-navigation/native';

// Needs to be tested, just grabbed from online. 
export default function ResetPassword() {
    const route = useRoute();
    const { token } = route.params; // Get the reset token from the deep link
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleResetPassword = async () => {
        const { error } = await supabase.auth.updateUser({ password: newPassword });

        if (error) {
            setErrorMessage(error.message);
        } else {
            setSuccessMessage('Password reset successfully! You can now sign in.');
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-5xl text-ivory font-wsbold">Reset Password</Text>
            <FormField
                title="New Password"
                value={newPassword}
                placeholder="Enter new password"
                handleChangeText={setNewPassword}
                otherStyles="mt-4"
            />
            {errorMessage ? <Text className="text-red-500">{errorMessage}</Text> : null}
            {successMessage ? <Text className="text-green-500">{successMessage}</Text> : null}
            <MyButton title="Reset Password" handlePress={handleResetPassword} />
            <StatusBar style="auto" />
        </View>
    );
}
