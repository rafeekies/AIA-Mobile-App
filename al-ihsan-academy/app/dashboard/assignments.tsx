import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Caption, Chip, useTheme, Text } from 'react-native-paper'; // Added Text for safety, though Chip might handle its own text.

// Mock Data
const mockAssignments = [
  { id: '1', title: 'Essay on Islamic History', courseTitle: 'Islamic Studies 101', dueDate: '2024-09-15', description: 'A 1000-word essay on the Golden Age of Islam.' },
  { id: '2', title: 'Arabic Grammar Worksheet', courseTitle: 'Arabic Language Beginners', dueDate: '2024-09-10', description: 'Complete exercises 1-5 from chapter 2.' },
  { id: '3', title: 'Surah Al-Mulk Recitation', courseTitle: 'Quran Memorization (Hifz)', dueDate: '2024-09-20', description: 'Recite Surah Al-Mulk from memory to the teacher.' },
  { id: '4', title: 'Algebra Problems Set 1', courseTitle: 'Mathematics Grade 5', dueDate: '2024-09-12', description: 'Solve problems 1 through 10 on page 55.' },
  { id: '5', title: 'Presentation on Prophet Muhammad (PBUH)', courseTitle: 'Islamic Studies 101', dueDate: '2024-10-01', description: 'Prepare a 10-minute presentation about the life of the Prophet.' },
];

export default function AssignmentsScreen() {
  const theme = useTheme(); // For using theme colors

  const renderAssignmentItem = ({ item }: { item: typeof mockAssignments[0] }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.cardTitle}>{item.title}</Title>
        <Chip
          icon="book-open-variant"
          style={[styles.chip, { backgroundColor: theme.colors.secondaryContainer }]}
          textStyle={[styles.chipText, { color: theme.colors.onSecondaryContainer }]}
        >
          {item.courseTitle}
        </Chip>
        <Caption style={styles.caption}>
          Due Date: {new Date(item.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Caption>
        <Paragraph style={styles.cardDescription}>{item.description}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockAssignments}
        renderItem={renderAssignmentItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingBottom: 10,
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 4,
    elevation: 2,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  cardTitle: {
    fontFamily: 'Poppins-Medium', // Assuming Poppins-Medium is loaded
    fontSize: 17,
    marginBottom: 6,
    color: '#333',
  },
  chip: {
    marginBottom: 8,
    alignSelf: 'flex-start',
    // backgroundColor will be set dynamically using theme
  },
  chipText: {
    fontFamily: 'Poppins-Regular', // Assuming Poppins-Regular is loaded
    fontSize: 13,
    // color will be set dynamically using theme
  },
  caption: {
    fontFamily: 'Poppins-Regular', // Assuming Poppins-Regular is loaded
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },
  cardDescription: {
    fontFamily: 'Poppins-Regular', // Assuming Poppins-Regular is loaded
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
});
