// logo and  text 
// TextInput for first name and email
// Next Button: disabled until form is valid

import React, { useState } from 'react';
import { TextInput, View, Text, Pressable, Image, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Onboarding() {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isFormValid = firstName.trim() != ''&& emailRegex.test(email.trim());

    const handleNext = async () => {
        try {
            await AsyncStorage.setItem('firstName', firstName);
            await AsyncStorage.setItem('email', email);
            router.push('/screens/Home');
        } catch (error) {
            console.error('Error saving data', error);
            Alert.alert('Error', 'There was an error saving your data');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.heading_container}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/images/logo.jpg')}
                />
                <Text style={styles.heading}>Little Lemon</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    value = { firstName} 
                    onChangeText={setFirstName}
                    placeholder = "First Name"
                    keyboardType='default'
                />
                <TextInput 
                    style={styles.input}
                    value = { email} 
                    onChangeText={setEmail}
                    placeholder = "Email"
                    keyboardType='email-address'
                />
            </View>
            <Pressable 
                style={[styles.button, 
                !isFormValid && styles.disabled]}
                onPress={handleNext}
                disabled={!isFormValid}
            >
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    heading_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    heading: {
        fontFamily: 'times', 
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 5,
        paddingHorizontal: 10,
        color: '#495E57',
    },
    logo: {
        height: 40, 
        width: 40, 
        resizeMode: 'contain',
    },
    inputContainer: {
        flex: 1, 
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 50,
        borderWidth: 0.25,
        borderRadius: 8,
        padding: 15,
        marginBottom: 40,
    },
    button: {
        height: 50,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#495E57',
        borderRadius: 10,
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    disabled: {
        backgroundColor: '#ccc',
    },
})