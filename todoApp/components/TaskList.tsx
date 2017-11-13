import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TodoDataSource, TodoTask } from 'todoApp/entities/TodoTask';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

export default class TaskList extends React.Component<TodoDataSource, TodoDataSource> {

    constructor(props: TodoDataSource, context) {
        super(props, context);
        this.state = { todos: props.todos };
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text>TaskList Component {this.state.todos[0].taskName}</Text>
            </View>
        );
    }
}

