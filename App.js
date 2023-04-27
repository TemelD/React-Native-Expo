import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { expo as expoConfig } from './app.json';
import Main from './src/Main';

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expoConfig.name, () => App)