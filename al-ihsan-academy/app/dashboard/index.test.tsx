import React from 'react';
import { render } from '@testing-library/react-native';
import DashboardScreen from './index'; // Assuming DashboardScreen is the default export

// Mock useLocalSearchParams from expo-router
const mockUseLocalSearchParams = jest.fn();
jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'), // Keep other exports
  useLocalSearchParams: () => mockUseLocalSearchParams(),
}));

// Mock react-native-safe-area-context as it's used in DashboardScreen
jest.mock('react-native-safe-area-context', () => {
    const inset = { top: 0, right: 0, bottom: 0, left: 0 }
    return {
      SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
      SafeAreaConsumer: jest.fn().mockImplementation(({ children }) => children(inset)),
      useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
      useSafeAreaFrame: jest.fn().mockImplementation(() => ({ x: 0, y: 0, width: 390, height: 844 })),
    }
  })

describe('DashboardScreen', () => {
  beforeEach(() => {
    // Reset mock before each test
    mockUseLocalSearchParams.mockReset();
  });

  it('should display "Welcome, Student!" for student userType', () => {
    mockUseLocalSearchParams.mockReturnValue({ userType: 'student' });
    const { getByText } = render(<DashboardScreen />);
    expect(getByText('Welcome, Student!')).toBeTruthy();
  });

  it('should display "Welcome, Parent!" for parent userType', () => {
    mockUseLocalSearchParams.mockReturnValue({ userType: 'parent' });
    const { getByText } = render(<DashboardScreen />);
    expect(getByText('Welcome, Parent!')).toBeTruthy();
  });

  it('should display "Welcome, Teacher!" for teacher userType', () => {
    mockUseLocalSearchParams.mockReturnValue({ userType: 'teacher' });
    const { getByText } = render(<DashboardScreen />);
    expect(getByText('Welcome, Teacher!')).toBeTruthy();
  });

  it('should display "Welcome!" if userType is not "student", "parent", or "teacher"', () => {
    mockUseLocalSearchParams.mockReturnValue({ userType: 'admin' }); // Some other type
    const { getByText } = render(<DashboardScreen />);
    expect(getByText('Welcome!')).toBeTruthy();
  });

  it('should display "Welcome!" if userType is not provided', () => {
    mockUseLocalSearchParams.mockReturnValue({}); // No userType
    const { getByText } = render(<DashboardScreen />);
    expect(getByText('Welcome!')).toBeTruthy();
  });

  it('should render other dashboard elements like "Today\'s Classes"', () => {
    mockUseLocalSearchParams.mockReturnValue({ userType: 'student' }); // Any valid userType
    const { getByText } = render(<DashboardScreen />);
    expect(getByText("Today's Classes")).toBeTruthy(); // Check for a static text element from the dashboard
  });
});
