
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, ImageBackground, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { TextInput, Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const mockUsers = [
  { email: 'student@example.com', password: 'password', userType: 'student' },
  { email: 'parent@example.com', password: 'password', userType: 'parent' },
  { email: 'teacher@example.com', password: 'password', userType: 'teacher' },
];

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'student' | 'parent' | 'teacher'>('student');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password && u.userType === userType
      );

      if (user) {
        // setUserType(user.userType as 'student' | 'parent' | 'teacher'); // userType is already set
        router.replace({ pathname: '/dashboard', params: { userType: user.userType } });
      } else {
        setError('Invalid email, password, or user type.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.logoContainer}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg' }}
                style={styles.logo}
              />
              <Text style={styles.title}>Al-Ihsan Academy</Text>
              <Text style={styles.subtitle}>Excellence in Islamic & Academic Education</Text>
            </View>

            <View style={styles.userTypeContainer}>
              <TouchableOpacity
                style={[