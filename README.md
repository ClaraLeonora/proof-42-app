# Proof-42 App

## About the App

Proof-42 is a mobile application designed to help students master propositional logic through interactive, gamified exercises. The app breaks down complex logic concepts into manageable steps, allowing users to build a strong foundation in logic, starting with the axioms.

By familiarizing students with the symbols and interface used in the Deep Thought platform, the app helps ease the learning curve associated with exercises like Parsons problems and backward reasoning. Proof-42 provides a structured and accessible way for students to practice and gain confidence in their logic skills.

### Key Features:
- **Gamified learning**: Interactive exercises to master propositional logic in a fun, engaging way.
- **Step-by-step progression**: Scaffolded learning to help users build a solid understanding of logic.
- **Familiarization with Deep Thought symbols**: Learn the symbols and interface used in the Deep Thought platform.
- **Cross-platform support**: Learn on the go, whether using mobile devices or emulators.

---

## Folder Structure

### `.expo/`
Contains Expo-specific configuration files that are generated when you run the `expo start` command. This folder should not be committed to version control, as it is specific to your local development environment.

### `app/`
Contains the main application code. It is divided into subfolders that help organize different sections of the app.

- **`(auth)/`**: Handles authentication-related functionality, such as login, registration, and user session management.
- **`(quiz)/`**: Contains logic, components, and screens related to the quiz feature of the app, including quiz questions and answers.
- **`(tabs)/`**: Manages the tab navigation structure of the app, dividing the app into separate sections (e.g., Home, Profile, Settings).

### `assets/`
Contains static files such as fonts and images that are used throughout the app.

- **`fonts/`**: Stores font files used by the app to maintain a consistent style across all screens.
- **`images/`**:
    - **`quiz_questions/`**: Stores images related to quiz questions, including diagrams or illustrations that may be used in specific quizzes.

### `components/`
Contains reusable UI components that are used throughout the app. This folder allows for modular design, enabling the use of common elements like buttons, headers, and form inputs in multiple parts of the app.


## About the `.expo` Folder

> Why do I have a folder named ".expo" in my project?

The ".expo" folder is created when an Expo project is started using the "expo start" command.

> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "packager-info.json": contains port numbers and process PIDs that are used to serve the application to the mobile device/simulator.
- "settings.json": contains the server configuration that is used to serve the application manifest.

> Should I commit the ".expo" folder?

No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project; it is specific to your machine.

Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

"This project is licensed under the MIT License."

## Getting Started with Expo

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).


### Prerequisites

To get started, ensure you have the following installed:

- **Node.js** (version X.X.X or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g expo-cli`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ClaraLeonora/proof-42-app
   cd proof-42-app

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

4. Scan the QR code using the Expo Go app on your mobile device or run the app on an emulator/simulator.

### Development Options

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
