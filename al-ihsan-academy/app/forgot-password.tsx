import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPasswordScreen() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setResetSent(true);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
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
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>Enter your email to receive reset instructions</Text>
          </View>

          {!resetSent ? (
            <View style={styles.formContainer}>
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

              <Button
                mode="contained"
                onPress={handleResetPassword}
                style={styles.resetButton}
                loading={loading}
                disabled={loading || !email}
              >
                Send Reset Link
              </Button>
            </View>
          ) : (
            <View style={styles.successContainer}>
              <View style={styles.successIconContainer}>
                <Text style={styles.successIcon}>✓</Text>
              </View>
              <Text style={styles.successTitle}>Email Sent!</Text>
              <Text style={styles.successMessage}>
                We've sent password reset instructions to your email. Please check your inbox.
              </Text>
              <Button
                mode="contained"
                onPress={() => router.push('/')}
                style={styles.backToLoginButton}
              >
                Back to Login
              </Button>
            </View>
          )}

          <View style={styles.helpContainer}>
            <Text style={styles.helpText}>Need help? </Text>
            <TouchableOpacity>
              <Text style={[styles.helpLink, { color: theme.colors.primary }]}>
                Contact Support
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
    marginBottom: 40,
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
    textAlign: 'center',
    marginHorizontal: 20,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  resetButton: {
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  helpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  helpText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
  },
  helpLink: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  successContainer: {
    alignItems: 'center',
    padding: 20,
  },
  successIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successIcon: {
    fontSize: 40,
    color: 'white',
  },
  successTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  backToLoginButton: {
    width: '100%',
    padding: 5,
    borderRadius: 10,
  },
});
