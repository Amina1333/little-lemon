import React, { useState } from 'react';
import { TextInput, View, Text, Pressable, Image, StyleSheet, Alert } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { ProfileImage } from '../screens/ProfileImage';
import { useRouter } from 'expo-router';


export default function Home() {

  const router = useRouter();
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [profileImage, setProfileImage] = useState(null);


  return(
    <View style={styles.container}>
            <View style={styles.heading_container}>
                <Pressable 
                    onPress={() => router.back()} 
                    style={styles.backButton}
                    accessibilityLabel="Go back"
                >
                    <Ionicons name="arrow-back" size={24} color="white" />
                </Pressable>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/images/logo.jpg')}
                />
                <Text style={styles.heading}>Little Lemon</Text>
                <ProfileImage 
                    profileImage={profileImage}
                    firstName={firstName}
                    lastName={lastName}
                    onPress={() => router.push('/screens/Profile2')} 
                    customStyle={{ width: 50, height: 50, borderRadius: 30 }} 
                />
            </View>
          </View>
  );
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
    }
});