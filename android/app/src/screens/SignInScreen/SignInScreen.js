import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import React from 'react';
import Logo from '../../../../../assets/images/Logo_1.png' ;
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

const SignInScreen = () => {

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();


    const onSignInPressed = (data) => {
        console.log(data);
        //validate user

        navigation.navigate('HomeScreen');
    };

    const onForgotPasswordPresed = () => {

        navigation.navigate('ForgotPassword');
    };

    const onSignInGoogle = () => {
        console.warn("onSignInGoogle");
    };

    const onSignUpPressed = () => {

        navigation.navigate('SignUp');
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Image 
                source ={Logo} 
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain" 
            />
            <CustomInput
                name="email" 
                placeholder="Email" 
                control={control}
                rules={{required: 'Email is required', pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
               
            />
            <CustomInput 
                name="password"
                placeholder="Password" 
                secureTextEntry
                control={control}
                rules={{required: 'Password is required'}}
            />

        
            
            <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)}/>

            <CustomButton 
                text="Forgot Password?" 
                onPress={onForgotPasswordPresed} 
                type="TERTIARY"
            />

            <CustomButton 
                text="Sign In with Google" 
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4DD4"
            />
            
            <CustomButton 
                text="Don't have an account? Create one" 
                onPress={onSignUpPressed} 
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

    logo: {
        width: '70%',
        maxHeight: 200,
        maxWidth: 300,
    },
});

export default SignInScreen;