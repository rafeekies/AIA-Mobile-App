import React from 'react';
import { View, StyleSheet, Text } from 'react-native'; // Added Text for completeness, though not used in final example
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Configure locale for English (globally for the app)
LocaleConfig.locales['en'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
  today: "Today"
};
LocaleConfig.defaultLocale = 'en';

export default function CalendarScreen() {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  return (
    <View style={styles.container}>
      {/* The screen title is usually handled by the navigator's header options in _layout.tsx */}
      {/* <Text style={styles.screenTitle}>School Calendar</Text> */}
      <Calendar
        style={styles.calendarStyle}
        current={today}
        monthFormat={'MMMM yyyy'}
        onDayPress={day => {
          console.log('selected day', day);
          // Future: handle day press, e.g., show events or assignments for this day
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff', // Background for the calendar itself
          textSectionTitleColor: '#b6c1cd', // Color for day names (Mon, Tue, etc.)
          selectedDayBackgroundColor: '#0D4C92', // Primary color for selected day
          selectedDayTextColor: '#ffffff', // Text color for selected day
          todayTextColor: '#5DA3FA', // Accent color for today's date
          dayTextColor: '#2d4150', // Default text color for days
          textDisabledColor: '#d9e1e8', // Color for disabled days (e.g., outside current month)
          arrowColor: '#0D4C92', // Color for month navigation arrows
          monthTextColor: '#0D4C92', // Color for month name text
          indicatorColor: '#0D4C92', // Color for loading indicator (if any)
          textDayFontFamily: 'Poppins-Regular', // Assuming Poppins-Regular is loaded
          textMonthFontFamily: 'Poppins-Medium', // Assuming Poppins-Medium is loaded
          textDayHeaderFontFamily: 'Poppins-Regular', // Font for day names
          textDayFontSize: 15,
          textMonthFontSize: 17,
          textDayHeaderFontSize: 13,
          // Example for deeper customization if needed:
          // 'stylesheet.calendar.header': {
          //   week: {
          //     marginTop: 7,
          //     flexDirection: 'row',
          //     justifyContent: 'space-around'
          //   }
          // }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10, // Provides a little space from the top, good if no header or for aesthetics
  },
  // screenTitle: { // Style for a manual screen title, if ever needed
  //   fontSize: 22,
  //   fontFamily: 'Poppins-SemiBold', // Assuming Poppins-SemiBold is loaded
  //   textAlign: 'center',
  //   marginVertical: 15, // Spacing around the title
  //   color: '#0D4C92', // Primary theme color
  // },
  calendarStyle: {
    // The calendar component itself can be styled.
    // For a card-like appearance, you might add:
    // marginHorizontal: 10, // If container didn't have padding
    // borderRadius: 8,
    // elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
  },
});
