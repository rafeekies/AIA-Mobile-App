# Al-Ihsan Academy Mobile App

The Al-Ihsan Academy Mobile App is a React Native application built with Expo. It aims to provide students, parents, and teachers with access to academic information, resources, and communication tools.

## Features (Current & Planned)

*   User Login (Student, Parent, Teacher roles) - Mock implementation
*   Dashboard with role-specific welcome messages
*   Courses: View available courses (mock data)
*   Assignments: View assignments and due dates (mock data)
*   Calendar: View a school calendar (basic implementation using `react-native-calendars`)
*   Profile Management (Planned)
*   Messaging/Notifications (Planned)

## Technologies Used

*   React Native
*   Expo
*   Expo Router for navigation
*   React Native Paper for UI components
*   React Native Calendars for calendar display
*   Jest for unit testing

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   npm, yarn, or pnpm (pnpm is used in this project, indicated by `pnpm-lock.yaml`)
*   Expo CLI: `npm install -g expo-cli`
*   Git

### Setup

1.  **Clone the repository:**
    If you have cloned the parent repository that contains the `al-ihsan-academy` folder, navigate into it:
    ```bash
    cd path/to/parent-repository/al-ihsan-academy
    ```
    If you are cloning a repository that *is* the `al-ihsan-academy` project itself:
    ```bash
    git clone <repository-url>
    cd al-ihsan-academy
    ```
    *(You are now in the directory where this README.md resides and where `package.json` is located.)*

2.  **Install dependencies:**
    (This project uses pnpm. If you don't have pnpm, install it first: `npm install -g pnpm`)
    ```bash
    pnpm install
    ```
    This command will install all project dependencies, including `react-native-calendars` and testing libraries.

### Running the Application

1.  **Start the Expo development server (from this `al-ihsan-academy` directory):**
    ```bash
    pnpm start
    # OR
    expo start
    ```

2.  **Run on a simulator/emulator or device:**
    *   **iOS Simulator:** Press `i` in the Metro Bundler terminal.
    *   **Android Emulator:** Press `a` in the Metro Bundler terminal. (Ensure an emulator is running)
    *   **Physical Device:** Scan the QR code displayed by Metro Bundler using the Expo Go app on your iOS or Android device.

### Running Tests

To run the unit tests (from this `al-ihsan-academy` directory):

```bash
pnpm test
```

This will execute Jest and run all test files in the project.

## Project Structure

*   `app/`: Contains all the screens and navigation setup using Expo Router.
    *   `_layout.tsx`: Root layout for the app.
    *   `index.tsx`: Login screen.
    *   `dashboard/`: Contains screens related to the user dashboard.
        *   `_layout.tsx`: Layout for the dashboard (Drawer Navigator).
        *   `index.tsx`: Main dashboard view.
        *   `courses.tsx`, `assignments.tsx`, `calendar.tsx`, etc.: Individual feature screens.
*   `assets/`: Static assets like fonts and images.
*   `components/`: (Optional - not currently used much but good for future) Shared UI components.
*   `app/**/*.test.tsx` or `app/**/*.spec.tsx`: Unit test files typically located alongside the files they test (e.g. inside `app/dashboard/index.test.tsx` for `app/dashboard/index.tsx`).
*   `package.json`: Lists project dependencies and scripts.
*   `pnpm-lock.yaml`: Pnpm lock file.
*   `README.md`: This file.

## Contributing

(Details to be added if contributions are open)
