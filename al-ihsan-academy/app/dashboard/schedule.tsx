import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, useTheme, Divider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';

export default function ScheduleScreen() {
  const theme = useTheme();
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today.getDay());
  
  // Generate dates for the week
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - today.getDay() + i);
    weekDays.push(date);
  }
  
  // Schedule data
  const scheduleData = {
    0: [], // Sunday - empty
    1: [ // Monday
      { id: 1, subject: 'Quran Recitation', time: '09:00 AM - 10:30 AM', teacher: 'Sheikh Abdullah', room: 'Room 101' },
      { id: 2, subject: 'Islamic History', time: '11:00 AM - 12:30 PM', teacher: 'Dr. Fatima', room: 'Room 203' },
      { id: 3, subject: 'Arabic Language', time: '02:00 PM - 03:30 PM', teacher: 'Ustadh Ahmad', room: 'Room 105' },
    ],
    2: [ // Tuesday
      { id: 4, subject: 'Fiqh (Islamic Jurisprudence)', time: '09:00 AM - 10:30 AM', teacher: 'Sheikh Mohammed', room: 'Room 102' },
      { id: 5, subject: 'Hadith Studies', time: '11:00 AM - 12:30 PM', teacher: 'Dr. Aisha', room: 'Room 201' },
      { id: 6, subject: 'Islamic Ethics', time: '02:00 PM - 03:30 PM', teacher: 'Ustadha Khadija', room: 'Room 104' },
    ],
    3: [ // Wednesday
      { id: 7, subject: 'Tafsir (Quran Interpretation)', time: '09:00 AM - 10:30 AM', teacher: 'Sheikh Abdullah', room: 'Room 101' },
      { id: 8, subject: 'Islamic Art', time: '11:00 AM - 12:30 PM', teacher: 'Ustadha Fatima', room: 'Room 205' },
      { id: 9, subject: 'Arabic Grammar', time: '02:00 PM - 03:30 PM', teacher: 'Ustadh Ahmad', room: 'Room 105' },
    ],
    4: [ // Thursday
      { id: 10, subject: 'Seerah (Prophetic Biography)', time: '09:00 AM - 10:30 AM', teacher: 'Dr. Yusuf', room: 'Room 202' },
      { id: 11, subject: 'Islamic History', time: '11:00 AM - 12:30 PM', teacher: 'Dr. Fatima', room: 'Room 203' },
      { id: 12, subject: 'Quran Memorization', time: '02:00 PM - 03:30 PM', teacher: 'Sheikh Abdullah', room: 'Room 101' },
    ],
    5: [ // Friday
      { id: 13, subject: 'Jumu\'ah Prayer', time: '12:30 PM - 02:00 PM', teacher: 'Imam Hassan', room: 'Main Prayer Hall' },
      { id: 14, subject: 'Islamic Studies', time: '02:30 PM - 04:00 PM', teacher: 'Dr. Ali', room: 'Room 204' },
    ],
    6: [], // Saturday - empty
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.headerTitle}>Class Schedule</Text>
      </View>
      
      <View style={styles.weekSelector}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weekDaysContainer}
        >
          {weekDays.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayItem,
                selectedDay === index && { backgroundColor: theme.colors.primary }
              ]}
              onPress={() => setSelectedDay(index)}
            >
              <Text style={[
                styles.dayName,
                selectedDay === index && { color: '#FFFFFF' }
              ]}>
                {format(date, 'EEE')}
              </Text>
              <Text style={[
                styles.dayNumber,
                selectedDay === index && { color: '#FFFFFF' }
              ]}>
                {format(date, 'd')}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <ScrollView style={styles.content}>
        {scheduleData[selectedDay] && scheduleData[selectedDay].length > 0 ? (
          scheduleData[selectedDay].map((classItem, index) => (
            <Card key={classItem.id} style={styles.classCard}>
              <Card.Content>
                <View style={styles.classHeader}>
                  <View style={[styles.subjectIndicator, { backgroundColor: theme.colors.primary }]} />
                  <Text style={styles.subjectName}>{classItem.subject}</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.classDetails}>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Time:</Text>
                    <Text style={styles.detailValue}>{classItem.time}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Teacher:</Text>
                    <Text style={styles.detailValue}>{classItem.teacher}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Location:</Text>
                    <Text style={styles.detailValue}>{classItem.room}</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          ))
        ) : (
          <View style={styles.emptySchedule}>
            <Text style={styles.emptyText}>No classes scheduled for this day</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
  },
  weekSelector: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    elevation: 2,
  },
  weekDaysContainer: {
    paddingHorizontal: 10,
  },
  dayItem: {
    width: 60,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
  },
  dayName: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Medium',
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins-Bold',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  classCard: {
    marginBottom: 15,
    elevation: 2,
  },
  classHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  subjectIndicator: {
    width: 4,
    height: 20,
    borderRadius: 2,
    marginRight: 10,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
  divider: {
    marginBottom: 10,
  },
  classDetails: {
    marginTop: 5,
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabel: {
    width: 70,
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Medium',
  },
  detailValue: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  emptySchedule: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
