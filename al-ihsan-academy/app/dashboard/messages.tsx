import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card, Searchbar, Badge, Divider, FAB, useTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';

export default function MessagesScreen() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  
  const messages = [
    {
      id: 1,
      sender: 'Sheikh Abdullah',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      preview: 'Regarding your Quran recitation progress...',
      timestamp: '2023-06-15T09:30:00',
      unread: true,
      role: 'Teacher'
    },
    {
      id: 2,
      sender: 'Admin Office',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      preview: 'Important announcement about the upcoming Eid celebration',
      timestamp: '2023-06-14T14:45:00',
      unread: true,
      role: 'Admin'
    },
    {
      id: 3,
      sender: 'Dr. Fatima',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      preview: 'Your Islamic History assignment feedback is ready',
      timestamp: '2023-06-14T11:20:00',
      unread: false,
      role: 'Teacher'
    },
    {
      id: 4,
      sender: 'Ustadh Ahmad',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      preview: 'Please complete the Arabic vocabulary exercise by Friday',
      timestamp: '2023-06-13T16:05:00',
      unread: false,
      role: 'Teacher'
    },
    {
      id: 5,
      sender: 'Parent Committee',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      preview: 'Invitation to volunteer for the upcoming charity event',
      timestamp: '2023-06-12T10:15:00',
      unread: false,
      role: 'Parent'
    },
    {
      id: 6,
      sender: 'Sheikh Mohammed',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      preview: 'Reminder about tomorrow\'s Fiqh class special session',
      timestamp: '2023-06-11T13:40:00',
      unread: false,
      role: 'Teacher'
    },
  ];
  
  const filteredMessages = messages.filter(message =>
    message.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search messages"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
          iconColor={theme.colors.primary}
        />
      </View>
      
      <ScrollView style={styles.content}>
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message, index) => (
            <React.Fragment key={message.id}>
              <TouchableOpacity>
                <View style={[
                  styles.messageItem,
                  message.unread && { backgroundColor: '#F0F7FF' }
                ]}>
                  <View style={styles.avatarContainer}>
                    <Image 
                      source={{ uri: message.avatar }} 
                      style={styles.avatar} 
                    />
                    {message.unread && (
                      <Badge 
                        style={styles.unreadBadge}
                        size={10}
                      />
                    )}
                  </View>
                  
                  <View style={styles.messageContent}>
                    <View style={styles.messageHeader}>
                      <Text style={styles.senderName}>{message.sender}</Text>
                      <Text style={styles.timestamp}>
                        {format(new Date(message.timestamp), 'MMM d')}
                      </Text>
                    </View>
                    
                    <View style={styles.messagePreviewContainer}>
                      <Text 
                        style={[
                          styles.messagePreview,
                          message.unread && { fontFamily: 'Poppins-Medium', color: '#333' }
                        ]}
                        numberOfLines={1}
                      >
                        {message.preview}
                      </Text>
                      <Text style={styles.roleTag}>{message.role}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              
              {index < filteredMessages.length - 1 && (
                <Divider style={styles.divider} />
              )}
            </React.Fragment>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No messages found</Text>
          </View>
        )}
      </ScrollView>
      
      <FAB
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        icon="plus"
        onPress={() => {}}
      />
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
  searchContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  searchbar: {
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messageItem: {
    flexDirection: 'row',
    padding: 15,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  unreadBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#4CAF50',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  senderName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  messagePreviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messagePreview: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  roleTag: {
    fontSize: 10,
    color: '#0D4C92',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
    fontFamily: 'Poppins-Medium',
  },
  divider: {
    marginLeft: 80,
  },
  emptyContainer: {
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
