import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as SQLite from 'expo-sqlite';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';

export default function insertData() {
    const [name, setName] = useState('');

    const openDatabase = async () => {
        try {
          const db = await SQLite.openDatabaseAsync('moonleaf_db.db');
          console.log('Database opened successfully!');
          return db;
        } catch (error) {
          console.error(`Error opening the database: ${error.message}`);
        }
      };
    
      const insertData = async (item_name) => {
        try {
          const db = await openDatabase();
          if (!db) {
            console.error('Failed to open the database.');
            return;
          }
          // Run the insert query
          const result = await db.runAsync(
            `INSERT INTO items (item_name) VALUES (?)`,
            [item_name] // Parameterized query to prevent SQL injection
          );
          console.log('Data inserted successfully:', result);
        } catch (error) {
          console.error(`Error inserting data: ${error.message}`);
        }
      };

    const submitPressed = () => {
        if (name !== '') {
            setName('') // clear text input
            console.log(name)
            // open database
            insertData(name)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Insert Data here</Text>

            <TextInput style={styles.TextInput} placeholder='Type your name here...' value={name} onChangeText={setName} />

            <TouchableOpacity style={styles.TouchableOpacity} onPress={submitPressed}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    TextInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: 250,
        margin: 10
    },
    TouchableOpacity: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        margin: 10
      }
});