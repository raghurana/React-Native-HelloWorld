import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import TodoTask from './todoApp/entities/TodoTask';
import TaskList from './todoApp/components/TaskList';

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
      <TaskList />
    );
  }
}
