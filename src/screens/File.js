import React, {useState} from 'react';
import { StyleSheet, View, Alert, TextInput, TouchableOpacity, Text } from "react-native";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

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
  }
});

export default function Contact() {
  const [content, setContent] = useState('');

  const handlePress = async () => {
    try {
      // Écrire le contenu dans un fichier
      const fileInfo = await FileSystem.writeAsStringAsync(
        FileSystem.documentDirectory + 'monfichier.txt',
        content
      );

      // Envoyer le fichier par mail via Expo Sharing
      const shareOptions = {
        mimeType: 'text/plain',
        UTI: 'public.plain-text',
        filename: 'monfichier.txt',
        dialogTitle: 'Envoyer mon fichier par mail',
        subject: 'Mon fichier',
        recipients: ['votre_email@example.com'],
        body: 'Veuillez trouver ci-joint mon fichier',
      };
      await Sharing.shareAsync(FileSystem.documentDirectory + 'monfichier.txt', shareOptions);
    } catch (error) {
      Alert.alert('Une erreur est survenue', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          placeholder="Entrez le contenu du fichier"
          onChangeText={setContent}
        />
      <TouchableOpacity style={styles.addButton} onPress={handlePress}>
          <Text style={styles.addButtonText}>Partagez le fichier</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
