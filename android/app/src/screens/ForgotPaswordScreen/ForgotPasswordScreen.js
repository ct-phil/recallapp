import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const onSendPressed = (data) => {
        console.warn(data);
       navigation.navigate('NewPassword');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }


    return (
        <ScrollView>
        <View style={styles.root}>
           <Text style={styles.title}> Reset your password</Text>
           
            <CustomInput 
                name="email"
                control={control}
                placeholder="Enter your email" 
                rules={{required: 'Email is required', pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
            
                
            />
            
            <CustomButton text="Send" onPress={handleSubmit(onSendPressed)}/>

            <CustomButton 
                text="Back to Sign in" 
                onPress={onSignInPressed} 
                type="TERTIARY"
            />

        </View>
        </ScrollView>
    );
    };

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 20,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    }
});

export default ForgotPasswordScreen;