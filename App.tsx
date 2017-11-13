import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import { TodoDataSource, TodoTask } from './todoApp/entities/TodoTask';
import TaskList from './todoApp/components/TaskList';

export default class App extends React.Component<any, TodoDataSource> {

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
      <TaskList todos={this.state.todos} />
    );
  }
}
