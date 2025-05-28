import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card, useTheme, Button, Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CoursesScreen() {
  const theme = useTheme();

  // Sample data
  const courses = [
    {
      id: 1,
      title: 'Quran Memorization',
      teacher: 'Sheikh Abdullah',
      progress: 65,
      image: 'https://images.pexels.com/photos/5880660/pexels-photo-5880660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      nextClass: 'Tomorrow, 9:00 AM',
      category: 'Religious',
    },
    {
      id: 2,
      title: 'Arabic Language',
      teacher: 'Ustadh Ahmad',
      progress: 78,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      nextClass: 'Today, 2:00 PM',
      category: 'Language',
    },
    {
      id: 3,
      title: 'Islamic History',
      teacher: 'Dr. Fatima Khan',
      progress: 42,
      image: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      nextClass: 'Wednesday, 11:00 AM',
      category: 'Religious',
    },
    {
      id: 4,
      title: 'Mathematics',
      teacher: 'Mr. Syed Ali',
      progress: 90,
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      nextClass: 'Thursday, 10:00 AM',
      category: 'Academic',
    },
    {
      id: 5,
      title: 'Science',
      teacher: 'Mrs. Zainab Hassan',
      progress: 85,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      nextClass: 'Friday, 1:00 PM',
      category: 'Academic',
    },
  ];

  const categories = ['All', 'Religious', 'Academic', 'Language'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Courses</Text>
          <Text style={styles.headerSubtitle}>Continue your learning journey</Text>
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={[
                styles.categoryButton,
                selectedCategory === category && { backgroundColor: theme.colors.primary }
              ]}
            >
              <Text 
                style={[
                  styles.categoryText,
                  selectedCategory === category && { color: 'white' }
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Courses List */}
        <View style={styles.coursesContainer}>
          {filteredCourses.map((course) => (
            <Card key={course.id} style={styles.courseCard}>
              <Image 
                source={{ uri: course.image }} 
                style={styles.courseImage}
              />
              <View style={styles.courseContent}>
                <View style={styles.courseHeader}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <Chip 
                    style={[styles.categoryChip, { 
                      backgroundColor: 
                        course.category === 'Religious' ? '#E1F5FE' : 
                        course.category === 'Academic' ? '#E8F5E9' : '#FFF3E0'
                    }]}
                    textStyle={{ 
                      color: 
                        course.category === 'Religious' ? '#0288D1' : 
                        course.category === 'Academic' ? '#388E3C' : '#EF6C00',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 10,
                    }}
                  >
                    {course.category}
                  </Chip>
                </View>
                <Text style={styles.courseTeacher}>{course.teacher}</Text>
                
                <View style={styles.progressContainer}>
                  <View style={styles.progressBarBackground}>
                    <View 
                      style={[
                        styles.progressBarFill, 
                        { 
                          width: `${course.progress}%`,
                          backgroundColor: theme.colors.primary
                        }
                      ]} 
                    />
                  </View>
                  <Text style={styles.progressText}>{course.progress}%</Text>
                </View>
                
                <View style={styles.courseFooter}>
                  <Text style={styles.nextClassText}>Next: {course.nextClass}</Text>
                  <Button 
                    mode="contained" 
                    compact 
                    style={styles.continueButton}
                    labelStyle={styles.continueButtonLabel}
                  >
                    Continue
                  </Button>
                </View>
              </View>
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
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
  },
  categoryText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#333',
  },
  coursesContainer: {
    padding: 16,
    paddingTop: 0,
  },
  courseCard: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  courseImage: {
    width: '100%',
    height: 150,
  },
  courseContent: {
    padding: 16,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  courseTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  categoryChip: {
    height: 24,
  },
  courseTeacher: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginRight: 8,
  },
  progressBarFill: {
    height: 8,
    borderRadius: 4,
  },
  progressText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#333',
    width: 40,
    textAlign: 'right',
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextClassText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
  },
  continueButton: {
    borderRadius: 8,
  },
  continueButtonLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
});
