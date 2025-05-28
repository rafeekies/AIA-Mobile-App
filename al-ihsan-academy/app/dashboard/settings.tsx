import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Switch } from 'react-native';
import { Card, useTheme, Button, Divider, RadioButton, List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const theme = useTheme();
  
  // Settings state
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');
  const [fontScale, setFontScale] = useState('medium');

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
          <Text style={styles.headerSubtitle}>Customize your app experience</Text>
        </View>

        {/* Notifications */}
        <Card style={styles.settingsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Notifications</Text>
            <Divider style={styles.divider} />
            
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Enable Notifications</Text>
                <Text style={styles.settingDescription}>Receive updates about your courses and assignments</Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                color={theme.colors.primary}
              />
            </View>
            
            {notificationsEnabled && (
              <>
                <View style={styles.settingRow}>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingTitle}>Email Notifications</Text>
                    <Text style={styles.settingDescription}>Receive notifications via email</Text>
                  </View>
                  <Switch
                    value={emailNotifications}
                    onValueChange={setEmailNotifications}
                    color={theme.colors.primary}
                  />
                </View>
                
                <View style={styles.settingRow}>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingTitle}>Push Notifications</Text>
                    <Text style={styles.settingDescription}>Receive notifications on your device</Text>
                  </View>
                  <Switch
                    value={pushNotifications}
                    onValueChange={setPushNotifications}
                    color={theme.colors.primary}
                  />
                </View>
              </>
            )}
          </Card.Content>
        </Card>

        {/* Appearance */}
        <Card style={styles.settingsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Appearance</Text>
            <Divider style={styles.divider} />
            
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Dark Mode</Text>
                <Text style={styles.settingDescription}>Use dark theme for the app</Text>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                color={theme.colors.primary}
              />
            </View>
            
            <Text style={styles.settingGroupTitle}>Text Size</Text>
            <RadioButton.Group onValueChange={value => setFontScale(value)} value={fontScale}>
              <View style={styles.radioRow}>
                <RadioButton.Item
                  label="Small"
                  value="small"
                  labelStyle={styles.radioLabel}
                  color={theme.colors.primary}
                />
              </View>
              <View style={styles.radioRow}>
                <RadioButton.Item
                  label="Medium"
                  value="medium"
                  labelStyle={styles.radioLabel}
                  color={theme.colors.primary}
                />
              </View>
              <View style={styles.radioRow}>
                <RadioButton.Item
                  label="Large"
                  value="large"
                  labelStyle={styles.radioLabel}
                  color={theme.colors.primary}
                />
              </View>
            </RadioButton.Group>
          </Card.Content>
        </Card>

        {/* Language */}
        <Card style={styles.settingsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Language</Text>
            <Divider style={styles.divider} />
            
            <RadioButton.Group onValueChange={value => setLanguage(value)} value={language}>
              <View style={styles.radioRow}>
                <RadioButton.Item
                  label="English"
                  value="english"
                  labelStyle={styles.radioLabel}
                  color={theme.colors.primary}
                />
              </View>
              <View style={styles.radioRow}>
                <RadioButton.Item
                  label="Arabic"
                  value="arabic"
                  labelStyle={styles.radioLabel}
                  color={theme.colors.primary}
                />
              </View>
              <View style={styles.radioRow}>
                <RadioButton.Item
                  label="Urdu"
                  value="urdu"
                  labelStyle={styles.radioLabel}
                  color={theme.colors.primary}
                />
              </View>
            </RadioButton.Group>
          </Card.Content>
        </Card>

        {/* Privacy & Security */}
        <Card style={styles.settingsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Privacy & Security</Text>
            <Divider style={styles.divider} />
            
            <List.Item
              title="Change Password"
              description="Update your account password"
              left={props => <List.Icon {...props} icon="lock-reset" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              titleStyle={styles.listItemTitle}
              descriptionStyle={styles.listItemDescription}
              style={styles.listItem}
            />
            
            <List.Item
              title="Privacy Policy"
              description="Read our privacy policy"
              left={props => <List.Icon {...props} icon="shield-account" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              titleStyle={styles.listItemTitle}
              descriptionStyle={styles.listItemDescription}
              style={styles.listItem}
            />
            
            <List.Item
              title="Terms of Service"
              description="Read our terms of service"
              left={props => <List.Icon {...props} icon="file-document" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              titleStyle={styles.listItemTitle}
              descriptionStyle={styles.listItemDescription}
              style={styles.listItem}
            />
          </Card.Content>
        </Card>

        {/* About */}
        <Card style={styles.settingsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>About</Text>
            <Divider style={styles.divider} />
            
            <List.Item
              title="About Al-Ihsan Academy"
              description="Learn more about our institution"
              left={props => <List.Icon {...props} icon="information" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              titleStyle={styles.listItemTitle}
              descriptionStyle={styles.listItemDescription}
              style={styles.listItem}
            />
            
            <List.Item
              title="Contact Support"
              description="Get help with any issues"
              left={props => <List.Icon {...props} icon="headset" color={theme.colors.primary} />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              titleStyle={styles.listItemTitle}
              descriptionStyle={styles.listItemDescription}
              style={styles.listItem}
            />
            
            <List.Item
              title="App Version"
              description="1.0.0"
              left={props => <List.Icon {...props} icon="cellphone" color={theme.colors.primary} />}
              titleStyle={styles.listItemTitle}
              descriptionStyle={styles.listItemDescription}
              style={styles.listItem}
            />
          </Card.Content>
        </Card>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <Button 
            mode="contained" 
            icon="logout" 
            style={styles.logoutButton}
            buttonColor="#D32F2F"
          >
            Logout
          </Button>
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
  settingsCard: {
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
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  settingDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
  },
  settingGroupTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    marginBottom: 8,
  },
  radioRow: {
    marginVertical: -8,
  },
  radioLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#333',
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  listItemTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#333',
  },
  listItemDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
  },
  logoutContainer: {
    padding: 16,
    marginBottom: 16,
  },
  logoutButton: {
    borderRadius: 8,
  },
});
