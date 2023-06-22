import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

const SignUpScreen = () => {
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    }


    const onSignInGoogle = () => {
        console.warn("onSignInGoogle");
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    }

    const onPrivacyPolicyPressed = () => {
        console.warn("onPrivacyPolicyPressed");
    }

    return (
        <ScrollView>
        <View style={styles.root}>
           <Text style={styles.title}> Create an account</Text>
            <CustomInput 
                name="email"
                control={control}
                placeholder="Email" 
                rules={{required: 'Email is required', pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
                
            />
            <CustomInput 
                name="password"
                control={control}
                placeholder="Password" 
                secureTextEntry
                rules={{required: 'Password is required'}}
            />

            <CustomInput 
                name="password-repeat"
                control={control}
                placeholder="Repeat Password" 
                secureTextEntry
                rules={{
                    validate: value => value === pwd || 'Passwords do not match'
                }}
            />
            
            <CustomButton text="Sign Up" onPress={handleSubmit(onRegisterPressed)}/>

            <Text style = {styles.text}>
                By registering, you confirm that you accept our{' '} 
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text> 
            </Text>

            <CustomButton 
                text="Sign In with Google" 
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4DD4"
            />
            
            <CustomButton 
                text="Have an account? Sign in" 
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

export default SignUpScreen;