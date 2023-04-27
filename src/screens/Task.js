import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
});


export default function Home({navigation}) {

  // création nouvelle tâche et recuperation tâche
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // récupération tâche
  const handleAddTask = () => {
    if (newTask.trim()) {
      const task = { id: Math.random().toString(), description: newTask };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  // suppression tâche
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrez une nouvelle tâche"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>
      {tasks.map((task) => (
        <View key={task.id} style={styles.task}>
          <Text>{task.description}</Text>
          <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
            <Text style={styles.deleteButton}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

