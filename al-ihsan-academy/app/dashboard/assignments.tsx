import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, useTheme, Button, Divider, Checkbox } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';

export default function AssignmentsScreen() {
  const theme = useTheme();
  const [filter, setFilter] = useState('all'); // all, pending, completed

  // Sample data
  const allAssignments = [
    { 
      id: 1, 
      title: 'Surah Al-Baqarah Memorization (Verses 1-5)', 
      dueDate: '2023-06-15', 
      subject: 'Quran', 
      status: 'pending',
      description: 'Memorize verses 1-5 of Surah Al-Baqarah with proper tajweed rules.',
      teacher: 'Sheikh Abdullah',
      points: 20
    },
    { 
      id: 2, 
      title: 'Islamic History Essay', 
      dueDate: '2023-06-18', 
      subject: 'History', 
      status: 'pending',
      description: 'Write a 500-word essay on the contributions of Muslim scholars to science during the Golden Age of Islam.',
      teacher: 'Dr. Fatima Khan',
      points: 30
    },
    { 
      id: 3, 
      title: 'Arabic Vocabulary Quiz', 
      dueDate: '2023-06-10', 
      subject: 'Arabic', 
      status: 'completed',
      description: 'Complete the online vocabulary quiz covering chapters 3-5 from the textbook.',
      teacher: 'Ustadh Ahmad',
      points: 15
    },
    { 
      id: 4, 
      title: 'Mathematics Problem Set', 
      dueDate: '2023-06-20', 
      subject: 'Mathematics', 
      status: 'pending',
      description: 'Complete problems 1-15 from Chapter 7 in the textbook.',
      teacher: 'Mr. Syed Ali',
      points: 25
    },
    { 
      id: 5, 
      title: 'Science Lab Report', 
      dueDate: '2023-06-12', 
      subject: 'Science', 
      status: 'completed',
      description: 'Write a lab report on the photosynthesis experiment conducted in class.',
      teacher: 'Mrs. Zainab Hassan',
      points: 20
    },
  ];

  const filteredAssignments = filter === 'all' 
    ? allAssignments 
    : allAssignments.filter(assignment => assignment.status === filter);

  const toggleAssignmentStatus = (id) => {
    // In a real app, this would update the assignment status in the database
    console.log(`Toggle status for assignment ${id}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Assignments</Text>
          <Text style={styles.headerSubtitle}>Track your learning progress</Text>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterTab,
              filter === 'all' && { borderBottomColor: theme.colors.primary }
            ]}
            onPress={() => setFilter('all')}
          >
            <Text 
              style={[
                styles.filterText,
                filter === 'all' && { color: theme.colors.primary }
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterTab,
              filter === 'pending' && { borderBottomColor: theme.colors.primary }
            ]}
            onPress={() => setFilter('pending')}
          >
            <Text 
              style={[
                styles.filterText,
                filter === 'pending' && { color: theme.colors.primary }
              ]}
            >
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterTab,
              filter === 'completed' && { borderBottomColor: theme.colors.primary }
            ]}
            onPress={() => setFilter('completed')}
          >
            <Text 
              style={[
                styles.filterText,
                filter === 'completed' && { color: theme.colors.primary }
              ]}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </View>

        {/* Assignments List */}
        <View style={styles.assignmentsContainer}>
          {filteredAssignments.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No assignments found</Text>
            </View>
          ) : (
            filteredAssignments.map((assignment) => (
              <Card key={assignment.id} style={styles.assignmentCard}>
                <Card.Content>
                  <View style={styles.assignmentHeader}>
                    <Checkbox
                      status={assignment.status === 'completed' ? 'checked' : 'unchecked'}
                      onPress={() => toggleAssignmentStatus(assignment.id)}
                      color={theme.colors.primary}
                    />
                    <View style={styles.assignmentTitleContainer}>
                      <Text style={[
                        styles.assignmentTitle,
                        assignment.status === 'completed' && styles.completedText
                      ]}>
                        {assignment.title}
                      </Text>
                      <Text style={styles.assignmentSubject}>{assignment.subject}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.assignmentDetails}>
                    <Text style={styles.assignmentDescription}>{assignment.description}</Text>
                    
                    <Divider style={styles.divider} />
                    
                    <View style={styles.assignmentFooter}>
                      <View style={styles.assignmentInfo}>
                        <Text style={styles.assignmentTeacher}>Teacher: {assignment.teacher}</Text>
                        <Text style={styles.assignmentPoints}>Points: {assignment.points}</Text>
                      </View>
                      
                      <View style={styles.assignmentDueContainer}>
                        <Text style={styles.assignmentDueLabel}>Due:</Text>
                        <Text style={[
                          styles.assignmentDueDate,
                          new Date(assignment.dueDate) < new Date() && 
                          assignment.status !== 'completed' && 
                          styles.overdue
                        ]}>
                          {format(new Date(assignment.dueDate), 'MMM d, yyyy')}
                        </Text>
                      </View>
                    </View>
                    
                    <Button 
                      mode="contained" 
                      style={styles.viewButton}
                      labelStyle={styles.viewButtonLabel}
                    >
                      View Details
                    </Button>
                  </View>
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
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  filterTab: {
    paddingVertical: 12,
    marginRight: 24,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  filterText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#666',
  },
  assignmentsContainer: {
    padding: 16,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666',
  },
  assignmentCard: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
  },
  assignmentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  assignmentTitleContainer: {
    flex: 1,
    marginLeft: 8,
  },
  assignmentTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  assignmentSubject: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#666',
  },
  assignmentDetails: {
    marginLeft: 36,
  },
  assignmentDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  divider: {
    marginBottom: 12,
  },
  assignmentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  assignmentInfo: {
    flex: 1,
  },
  assignmentTeacher: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  assignmentPoints: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
  },
  assignmentDueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assignmentDueLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#666',
    marginRight: 4,
  },
  assignmentDueDate: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#666',
  },
  overdue: {
    color: '#D32F2F',
  },
  viewButton: {
    borderRadius: 8,
  },
  viewButtonLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
});
