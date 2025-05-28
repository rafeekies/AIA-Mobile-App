
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { TextInput, Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'student' | 'parent' | 'teacher'>('student');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = () => {
    // In a real app, we would validate credentials here
    router.replace('/(tabs)');
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