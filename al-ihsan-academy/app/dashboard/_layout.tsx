import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardLayout() {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Poppins-Medium',
        },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: '#555',
        drawerLabelStyle: {
          fontFamily: 'Poppins-Regular',
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Dashboard',
          drawerLabel: 'Dashboard',
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="courses"
        options={{
          title: 'Courses',
          drawerLabel: 'Courses',
          drawerIcon: ({ color }) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="assignments"
        options={{
          title: 'Assignments',
          drawerLabel: 'Assignments',
          drawerIcon: ({ color }) => (
            <Ionicons name="document-text-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          drawerLabel: 'Calendar',
          drawerIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
          drawerLabel: 'Profile',
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
          drawerLabel: 'Settings',
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
