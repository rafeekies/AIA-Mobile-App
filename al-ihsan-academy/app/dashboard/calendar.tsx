import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, useTheme, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay } from 'date-fns';

export default function CalendarScreen() {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 0 }));

  // Generate week days
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Quran Class',
      time: '09:00 AM - 10:30 AM',
      location: 'Room 101',
      teacher: 'Sheikh Abdullah',
      date: format(addDays(new Date(), 0), 'yyyy-MM-dd'),
      color: '#0D4C92'
    },
    {
      id: 2,
      title: 'Islamic History',
      time: '11:00 AM - 12:30 PM',
      location: 'Room 203',
      teacher: 'Dr. Fatima Khan',
      date: format(addDays(new Date(), 0), 'yyyy-MM-dd'),
      color: '#5DA3FA'
    },
    {
      id: 3,
      title: 'Arabic Language',
      time: '02:00 PM - 03:30 PM',
      location: 'Room 105',
      teacher: 'Ustadh Ahmad',
      date: format(addDays(new Date(), 0), 'yyyy-MM-dd'),
      color: '#F4B942'
    },
    {
      id: 4,
      title: 'Mathematics',
      time: '09:00 AM - 10:30 AM',
      location: 'Room 202',
      teacher: 'Mr. Syed Ali',
      date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      color: '#4CAF50'
    },
    {
      id: 5,
      title: 'Science Lab',
      time: '11:00 AM - 12:30 PM',
      location: 'Science Lab',
      teacher: 'Mrs. Zainab Hassan',
      date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      color: '#9C27B0'
    },
    {
      id: 6,
      title: 'Islamic Studies',
      time: '09:00 AM - 10:30 AM',
      location: 'Room 101',
      teacher: 'Mufti Ibrahim',
      date: format(addDays(new Date(), 2), 'yyyy-MM-dd'),
      color: '#0D4C92'
    },
    {
      id: 7,
      title: 'Physical Education',
      time: '02:00 PM - 03:30 PM',
      location: 'Gymnasium',
      teacher: 'Coach Hamza',
      date: format(addDays(new Date(), 3), 'yyyy-MM-dd'),
      color: '#FF5722'
    },
  ];

  // Filter events for selected date
  const selectedDateStr = format(selectedDate, 'yyyy-MM-dd');
  const filteredEvents = events.filter(event => event.date === selectedDateStr);

  // Navigate to previous week
  const goToPreviousWeek = () => {
    setCurrentWeekStart(subWeeks(currentWeekStart, 1));
  };

  // Navigate to next week
  const goToNextWeek = () => {
    setCurrentWeekStart(addWeeks(currentWeekStart, 1));
  };

  // Navigate to today
  const goToToday = () => {
    const today = new Date();
    setSelectedDate(today);
    setCurrentWeekStart(startOfWeek(today, { weekStartsOn: 0 }));
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Calendar</Text>
          <Text style={styles.headerSubtitle}>Your schedule at a glance</Text>
        </View>

        {/* Calendar Navigation */}
        <View style={styles.calendarNavigation}>
          <TouchableOpacity onPress={goToPreviousWeek}>
            <Text style={styles.navigationArrow}>←</Text>
          </TouchableOpacity>
          
          <Text style={styles.currentMonth}>
            {format(currentWeekStart, 'MMMM yyyy')}
          </Text>
          
          <TouchableOpacity onPress={goToNextWeek}>
            <Text style={styles.navigationArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Today Button */}
        <View style={styles.todayButtonContainer}>
          <Button 
            mode="outlined" 
            onPress={goToToday}
            style={styles.todayButton}
            labelStyle={styles.todayButtonLabel}
          >
            Today
          </Button>
        </View>

        {/* Week Days */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weekDaysContainer}
        >
          {weekDays.map((day) => {
            const isSelected = isSameDay(day, selectedDate);
            const isToday = isSameDay(day, new Date());
            
            return (
              <TouchableOpacity
                key={day.toString()}
                style={[
                  styles.dayButton,
                  isSelected && { backgroundColor: theme.colors.primary },
                  isToday && !isSelected && { borderColor: theme.colors.primary }
                ]}
                onPress={() => setSelectedDate(day)}
              >
                <Text 
                  style={[
                    styles.dayName,
                    isSelected && { color: 'white' }
                  ]}
                >
                  {format(day, 'EEE')}
                </Text>
                <Text 
                  style={[
                    styles.dayNumber,
                    isSelected && { color: 'white' },
                    isToday && !isSelected && { color: theme.colors.primary }
                  ]}
                >
                  {format(day, 'd')}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Selected Date */}
        <View style={styles.selectedDateContainer}>
          <Text style={styles.selectedDateText}>
            {format(selectedDate, 'EEEE, MMMM d, yyyy')}
          </Text>
        </View>

        {/* Events List */}
        <View style={styles.eventsContainer}>
          {filteredEvents.length === 0 ? (
            <View style={styles.noEventsContainer}>
              <Text style={styles.noEventsText}>No events scheduled for this day</Text>
            </View>
          ) : (
            filteredEvents.map((event) => (
              <Card key={event.id} style={styles.eventCard}>
                <View 
                  style={[
                    styles.eventColorIndicator,
                    { backgroundColor: event.color }
                  ]} 
                />
                <Card.Content style={styles.eventContent}>
                  <Text style={styles.eventTime}>{event.time}</Text>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <View style={styles.eventDetails}>
                    <Text style={styles.eventLocation}>{event.location}</Text>
                    <Text style={styles.eventTeacher}>{event.teacher}</Text>
                  </View>
                  <Button 
                    mode="text" 
                    style={styles.detailsButton}
                    labelStyle={[styles.detailsButtonLabel, { color: event.color }]}
                  >
                    View Details
                  </Button>
                </Card.Content>
              </Card>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#333',
  },
  headerSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
  },
  calendarNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  navigationArrow: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#333',
    padding: 8,
  },
  currentMonth: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
  },
  todayButtonContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  todayButton: {
    borderRadius: 20,
    borderColor: '#0D4C92',
  },
  todayButtonLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#0D4C92',
  },
  weekDaysContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  dayButton: {
    width: 60,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  dayName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  dayNumber: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  selectedDateContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  selectedDateText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#333',
  },
  eventsContainer: {
    padding: 16,
    paddingTop: 0,
  },
  noEventsContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
  },
  noEventsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
  },
  eventCard: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 2,
  },
  eventColorIndicator: {
    width: 6,
    height: '100%',
  },
  eventContent: {
    flex: 1,
    padding: 16,
  },
  eventTime: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  eventTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  eventDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  eventLocation: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
  },
  eventTeacher: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
  },
  detailsButton: {
    alignSelf: 'flex-start',
    padding: 0,
    margin: 0,
  },
  detailsButtonLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
});
