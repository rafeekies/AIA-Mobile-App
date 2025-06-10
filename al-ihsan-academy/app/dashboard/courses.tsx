import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';

// Mock Data
const mockCourses = [
  { id: '1', title: 'Islamic Studies 101', description: 'Introduction to core Islamic beliefs and practices.', teacher: 'Imam Ahmad' },
  { id: '2', title: 'Arabic Language Beginners', description: 'Learn the basics of Arabic alphabet and grammar.', teacher: 'Ustadha Fatima' },
  { id: '3', title: 'Quran Memorization (Hifz)', description: 'Group sessions for memorizing Juz Amma.', teacher: 'Sheikh Yusuf' },
  { id: '4', title: 'Mathematics Grade 5', description: 'Covering topics like algebra, geometry, and statistics for 5th graders.', teacher: 'Ms. Sarah' },
  { id: '5', title: 'Advanced Tajweed', description: 'Perfecting the rules of Quranic recitation.', teacher: 'Qari Ibrahim' },
  { id: '6', title: 'Fiqh of Worship', description: 'Detailed study of the jurisprudence of Islamic rituals.', teacher: 'Mufti Dawud' },
];

export default function CoursesScreen() {
  const renderCourseItem = ({ item }: { item: typeof mockCourses[0] }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.cardTitle}>{item.title}</Title>
        <Paragraph style={styles.cardDescription}>{item.description}</Paragraph>
        <Text style={styles.cardTeacher}>Taught by: {item.teacher}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockCourses}
        renderItem={renderCourseItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10, // Use paddingHorizontal for side padding
    paddingTop: 10, // Add paddingTop for spacing from the header
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingBottom: 10, // Ensures last item is not cut off
  },
  card: {
    marginVertical: 8,
    // marginHorizontal: 4, // Removed as container has paddingHorizontal
    elevation: 3, // Increased elevation for a bit more shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Slightly adjusted shadow
    shadowOpacity: 0.23, // Slightly adjusted shadow
    shadowRadius: 2.62, // Slightly adjusted shadow
    borderRadius: 8, // Added border radius to cards
  },
  cardTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginBottom: 6, // Increased margin
    color: '#333', // Darker color for title
  },
  cardDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 8, // Increased margin
    lineHeight: 20,
    color: '#555', // Slightly darker description
  },
  cardTeacher: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    fontStyle: 'italic',
    color: '#777', // Slightly adjusted teacher text color
  },
});
