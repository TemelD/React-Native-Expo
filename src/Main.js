import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text } from "react-native-paper";
import Task from './screens/Task';
import File from './screens/File';
import { BottomNavigation} from 'react-native-paper';


const Stack = createNativeStackNavigator();


const TaskRoute = () => <Text>Task</Text>;

const AlbumsRoute = () => <Text>File</Text>;


export default function Main() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Task', title: 'Task', focusedIcon: 'menu'},
    { key: 'File', title: 'File', focusedIcon: 'file'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Task: Task,
    File: File,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
  }

