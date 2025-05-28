import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen() {
  const theme = useTheme();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState('parent'); // parent, student, teacher

  const handleRegister = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.replace('/dashboard');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
            
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>Join Al-Ihsan Academy</Text>
            </View>

            <View style={styles.userTypeContainer}>
              <TouchableOpacity
                style={[
                  styles.userTypeButton,
                  userType === 'parent' && { backgroundColor: theme.colors.primary }
                ]}
                onPress={() => setUserType('parent')}
              >
                <Text style={[
                  styles.userTypeText,
                  userType === 'parent' && { color: 'white' }
                ]}>Parent</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.userTypeButton,
                  userType === 'student' && { backgroundColor: theme.colors.primary }
                ]}
                onPress={() => setUserType('student')}
              >
                <Text style={[
                  styles.userTypeText,
                  userType === 'student' && { color: 'white' }
                ]}>Student</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.userTypeButton,
                  userType === 'teacher' && { backgroundColor: theme.colors.primary }
                ]}
                onPress={() => setUserType('teacher')}
              >
                <Text style={[
                  styles.userTypeText,
                  userType === 'teacher' && { color: 'white' }
                ]}>Teacher</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
              <TextInput
                label="Full Name"
                value={fullName}
                onChangeText={setFullName}
                style={styles.input}
                mode="outlined"
                left={<TextInput.Icon icon="account" />}
              />

              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                mode="outlined"
                keyboardType="email-address"
                autoCapitalize="none"
                left={<TextInput.Icon icon="email" />}
              />

              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry}
                style={styles.input}
                mode="outlined"
                right={
                  <TextInput.Icon
                    icon={secureTextEntry ? "eye" : "eye-off"}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  />
                }
                left={<TextInput.Icon icon="lock" />}
              />

              <TextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={confirmSecureTextEntry}
                style={styles.input}
                mode="outlined"
                right={
                  <TextInput.Icon
                    icon={confirmSecureTextEntry ? "eye" : "eye-off"}
                    onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}
                  />
                }
                left={<TextInput.Icon icon="lock-check" />}
              />

              <Button
                mode="contained"
                onPress={handleRegister}
                style={styles.registerButton}
                loading={loading}
                disabled={loading}
              >
                Register
              </Button>

              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/')}>
                  <Text style={[styles.loginLink, { color: theme.colors.primary }]}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#0D4C92',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#0D4C92',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userTypeButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: '#E0E0E0',
  },
  userTypeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#333',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  registerButton: {
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
