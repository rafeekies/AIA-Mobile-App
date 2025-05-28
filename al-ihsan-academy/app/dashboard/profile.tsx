import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, useTheme, Button, Divider, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  
  // User data
  const [userData, setUserData] = useState({
    name: 'Ahmed Mohammed',
    email: 'ahmed.mohammed@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, Anytown, CA 12345',
    parentName: 'Mohammed Ali',
    parentEmail: 'mohammed.ali@example.com',
    parentPhone: '+1 (555) 987-6543',
    grade: '8th Grade',
    studentId: 'ST-2023-1234',
    enrollmentDate: 'September 2022',
  });

  // Temporary state for editing
  const [editData, setEditData] = useState({...userData});

  const handleSave = () => {
    setUserData({...editData});
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({...userData});
    setIsEditing(false);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
          <Text style={styles.headerSubtitle}>Manage your account information</Text>
        </View>

        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{userData.name}</Text>
            <Text style={styles.profileGrade}>{userData.grade}</Text>
            <Text style={styles.profileId}>ID: {userData.studentId}</Text>
          </View>
          {!isEditing && (
            <Button 
              mode="contained" 
              onPress={() => setIsEditing(true)}
              style={styles.editButton}
              labelStyle={styles.editButtonLabel}
            >
              Edit
            </Button>
          )}
        </View>

        {/* Profile Details */}
        <Card style={styles.detailsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <Divider style={styles.divider} />
            
            {isEditing ? (
              <View style={styles.editForm}>
                <TextInput
                  label="Full Name"
                  value={editData.name}
                  onChangeText={(text) => setEditData({...editData, name: text})}
                  style={styles.input}
                  mode="outlined"
                />
                <TextInput
                  label="Email"
                  value={editData.email}
                  onChangeText={(text) => setEditData({...editData, email: text})}
                  style={styles.input}
                  mode="outlined"
                  keyboardType="email-address"
                />
                <TextInput
                  label="Phone"
                  value={editData.phone}
                  onChangeText={(text) => setEditData({...editData, phone: text})}
                  style={styles.input}
                  mode="outlined"
                  keyboardType="phone-pad"
                />
                <TextInput
                  label="Address"
                  value={editData.address}
                  onChangeText={(text) => setEditData({...editData, address: text})}
                  style={styles.input}
                  mode="outlined"
                  multiline
                />
                
                <View style={styles.editActions}>
                  <Button 
                    mode="outlined" 
                    onPress={handleCancel}
                    style={[styles.actionButton, styles.cancelButton]}
                    labelStyle={styles.cancelButtonLabel}
                  >
                    Cancel
                  </Button>
                  <Button 
                    mode="contained" 
                    onPress={handleSave}
                    style={[styles.actionButton, styles.saveButton]}
                    labelStyle={styles.saveButtonLabel}
                  >
                    Save
                  </Button>
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Full Name:</Text>
                  <Text style={styles.infoValue}>{userData.name}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Email:</Text>
                  <Text style={styles.infoValue}>{userData.email}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Phone:</Text>
                  <Text style={styles.infoValue}>{userData.phone}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Address:</Text>
                  <Text style={styles.infoValue}>{userData.address}</Text>
                </View>
              </View>
            )}
          </Card.Content>
        </Card>

        {/* Parent Information */}
        <Card style={styles.detailsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Parent/Guardian Information</Text>
            <Divider style={styles.divider} />
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Name:</Text>
              <Text style={styles.infoValue}>{userData.parentName}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>{userData.parentEmail}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Phone:</Text>
              <Text style={styles.infoValue}>{userData.parentPhone}</Text>
            </View>
          </Card.Content>
        </Card>

        {/* Academic Information */}
        <Card style={styles.detailsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Academic Information</Text>
            <Divider style={styles.divider} />
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Grade:</Text>
              <Text style={styles.infoValue}>{userData.grade}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Student ID:</Text>
              <Text style={styles.infoValue}>{userData.studentId}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Enrollment Date:</Text>
              <Text style={styles.infoValue}>{userData.enrollmentDate}</Text>
            </View>
          </Card.Content>
        </Card>

        {/* Account Actions */}
        <Card style={styles.detailsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Account Actions</Text>
            <Divider style={styles.divider} />
            
            <View style={styles.accountActions}>
              <Button 
                mode="outlined" 
                icon="lock-reset" 
                style={styles.accountButton}
                labelStyle={{ color: theme.colors.primary }}
              >
                Change Password
              </Button>
              <Button 
                mode="outlined" 
                icon="bell-outline" 
                style={styles.accountButton}
                labelStyle={{ color: theme.colors.primary }}
              >
                Notification Settings
              </Button>
              <Button 
                mode="outlined" 
                icon="logout" 
                style={[styles.accountButton, styles.logoutButton]}
                labelStyle={{ color: '#D32F2F' }}
              >
                Logout
              </Button>
            </View>
          </Card.Content>
        </Card>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#0D4C92',
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  profileGrade: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#666',
  },
  profileId: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#888',
  },
  editButton: {
    borderRadius: 8,
  },
  editButtonLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  detailsCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  divider: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#666',
    width: 100,
  },
  infoValue: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  editForm: {
    marginBottom: 8,
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'white',
  },
  editActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    marginLeft: 12,
    borderRadius: 8,
  },
  cancelButton: {
    borderColor: '#666',
  },
  cancelButtonLabel: {
    color: '#666',
    fontFamily: 'Poppins-Medium',
  },
  saveButton: {
    backgroundColor: '#0D4C92',
  },
  saveButtonLabel: {
    fontFamily: 'Poppins-Medium',
  },
  accountActions: {
    marginBottom: 8,
  },
  accountButton: {
    marginBottom: 12,
    borderRadius: 8,
  },
  logoutButton: {
    borderColor: '#D32F2F',
  },
});
