import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [value, setValue] = React.useState('')
  const [todos, setTodos] = React.useState([])

  return (
    <View style={styles.container}>
      {todos.map((todo, index) => {
        return (
          <View key={index}>
            <Text>{todo}</Text>
          </View>
        )
      })}
      <TextInput
        style={{ width: '100%' }}
        placeholder='Adicione o TODO'
        value={value} onChangeText={setValue}
      />
      <Button
        onPress={() => {
          setTodos(todos.concat(value))
        }}
        title='ADD'
      />

      <StatusBar backgroundColor='#fff' style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
