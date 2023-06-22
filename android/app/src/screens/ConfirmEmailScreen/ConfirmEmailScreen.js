import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
    const {control, handleSubmit} = useForm();


    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('HomeScreen');
    }


    const onResendPressed = (data) => {
        console.warn(data);
        console.warn("onResendPressed");
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }


    return (
        <ScrollView>
        <View style={styles.root}>
           <Text style={styles.title}> Confirm your email</Text>
           
        

            <CustomInput 
                name="code"
                control={control}
                placeholder="Enter your confirmation code" 
                rules={{
                    required: 'Confirmation code is required'
                }}
            />
            
            <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)}/>

            <CustomButton 
                text="Resend code" 
                onPress={onResendPressed} 
                type="SECONDARY"
            />

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

export default ConfirmEmailScreen;