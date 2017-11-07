import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import TodoTask from './todoApp/entities/todoTask';

interface State {
  todos: TodoTask[];
}

export default class App extends React.Component<any, State> {

  constructor() {
    super();

    this.state = {
      todos:
        [
          new TodoTask('Learn React Native'),
        ],
      };
  }

  public render() {
    return (
      <Text style={styles.container}>
        {this.state.todos[0].taskName}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
