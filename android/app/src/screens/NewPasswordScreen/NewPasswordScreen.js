import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSubmitPresed = (data) => {
        console.warn(data);
        navigation.navigate('HomeScreen');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }


    return (
        <ScrollView>
        <View style={styles.root}>
           <Text style={styles.title}> Reset your password</Text>
           
            <CustomInput 
                name="code"
                control={control}
                placeholder="Code" 
                rules={{
                    required: 'Code is required'
                }}
               
            />

            <CustomInput
                name="password" 
                control={control}
                placeholder="Enter your new password" 
                secureTextEntry
                rules={{required: 'Password is required'}}
            />
            
            <CustomButton text="Submit" onPress={handleSubmit(onSubmitPresed)}/>

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

export default NewPasswordScreen;