import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card, useTheme, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';

export default function DashboardScreen() {
  const theme = useTheme();
  const today = new Date();

  // Sample data
  const upcomingClasses = [
    { id: 1, title: 'Quran Recitation', time: '09:00 AM', teacher: 'Sheikh Abdullah', room: 'Room 101' },
    { id: 2, title: 'Islamic History', time: '11:00 AM', teacher: 'Dr. Fatima Khan', room: 'Room 203' },
    { id: 3, title: 'Arabic Language', time: '02:00 PM', teacher: 'Ustadh Ahmad', room: 'Room 105' },
  ];

  const assignments = [
    { id: 1, title: 'Surah Al-Baqarah Memorization', dueDate: '2023-06-15', subject: 'Quran', status: 'pending' },
    { id: 2, title: 'Islamic History Essay', dueDate: '2023-06-18', subject: 'History', status: 'pending' },
    { id: 3, title: 'Arabic Vocabulary Quiz', dueDate: '2023-06-10', subject: 'Arabic', status: 'completed' },
  ];

  const announcements = [
    { 
      id: 1, 
      title: 'End of Year Ceremony', 
      date: '2023-06-30', 
      content: 'Join us for the annual end of year ceremony celebrating student achievements.' 
    },
    { 
      id: 2, 
      title: 'Ramadan Schedule', 
      date: '2023-06-05', 
      content: 'Updated schedule for classes during the blessed month of Ramadan.' 
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.dateText}>{format(today, 'EEEE, MMMM d, yyyy')}</Text>
            <Text style={styles.welcomeText}>Assalamu Alaikum,</Text>
            <Text style={styles.nameText}>Ahmed</Text>
          </View>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.profileImage}
          />
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: theme.colors.primary }]}>
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Attendance</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: theme.colors.secondary }]}>
            <Text style={styles.statNumber}>92%</Text>
            <Text style={styles.statLabel}>Grades</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: theme.colors.tertiary }]}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Assignments</Text>
          </View>
        </View>

        {/* Today's Classes */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Classes</Text>
            <TouchableOpacity>
              <Text style={[styles.viewAllText, { color: theme.colors.primary }]}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {upcomingClasses.map((classItem) => (
            <Card key={classItem.id} style={styles.classCard}>
              <Card.Content>
                <View style={styles.classCardContent}>
                  <View style={styles.classTimeContainer}>
                    <Text style={styles.classTime}>{classItem.time}</Text>
                  </View>
                  <View style={styles.classInfoContainer}>
                    <Text style={styles.classTitle}>{classItem.title}</Text>
                    <Text style={styles.classTeacher}>{classItem.teacher}</Text>
                    <Text style={styles.classRoom}>{classItem.room}</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>

        {/* Upcoming Assignments */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Assignments</Text>
            <TouchableOpacity>
              <Text style={[styles.viewAllText, { color: theme.colors.primary }]}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {assignments.map((assignment) => (
            <Card key={assignment.id} style={styles.assignmentCard}>
              <Card.Content>
                <View style={styles.assignmentCardHeader}>
                  <Text style={styles.assignmentTitle}>{assignment.title}</Text>
                  <View style={[
                    styles.assignmentStatus, 
                    { backgroundColor: assignment.status === 'completed' ? '#4CAF50' : theme.colors.tertiary }
                  ]}>
                    <Text style={styles.assignmentStatusText}>
                      {assignment.status === 'completed' ? 'Completed' : 'Pending'}
                    </Text>
                  </View>
                </View>
                <View style={styles.assignmentDetails}>
                  <Text style={styles.assignmentSubject}>{assignment.subject}</Text>
                  <Text style={styles.assignmentDueDate}>Due: {format(new Date(assignment.dueDate), 'MMM d, yyyy')}</Text>
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>

        {/* Announcements */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Announcements</Text>
            <TouchableOpacity>
              <Text style={[styles.viewAllText, { color: theme.colors.primary }]}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {announcements.map((announcement) => (
            <Card key={announcement.id} style={styles.announcementCard}>
              <Card.Content>
                <Text style={styles.announcementTitle}>{announcement.title}</Text>
                <Text style={styles.announcementDate}>
                  {format(new Date(announcement.date), 'MMM d, yyyy')}
                </Text>
                <Text style={styles.announcementContent}>{announcement.content}</Text>
                <Button 
                  mode="text" 
                  style={styles.readMoreButton}
                  labelStyle={{ color: theme.colors.primary, fontFamily: 'Poppins-Medium' }}
                >
                  Read More
                </Button>
              </Card.Content>
            </Card>
          ))}
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
    padding: 16,
  },
  welcomeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeTextContainer: {
    flex: 1,
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  welcomeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
  },
  nameText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#0D4C92',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#0D4C92',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statNumber: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'white',
  },
  statLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'white',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  viewAllText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  classCard: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  classCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  classTimeContainer: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
    marginRight: 16,
  },
  classTime: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#333',
  },
  classInfoContainer: {
    flex: 1,
  },
  classTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  classTeacher: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  classRoom: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#888',
  },
  assignmentCard: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  assignmentCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  assignmentTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  assignmentStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  assignmentStatusText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: 'white',
  },
  assignmentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  assignmentSubject: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
  },
  assignmentDueDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
  },
  announcementCard: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  announcementTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  announcementDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  announcementContent: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
    marginTop: 4,
    padding: 0,
  },
});
