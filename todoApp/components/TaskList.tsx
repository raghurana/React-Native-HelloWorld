import * as React from 'react';
import { StyleSheet, Text, View, ListView, ListViewDataSource } from 'react-native';

import { TodoDataSource, TodoTask } from 'todoApp/entities/TodoTask';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

export default class TaskList extends React.Component<TodoDataSource, any> {

    constructor(props: TodoDataSource, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {dataSource: ds.cloneWithRows(props.todos)};
    }

    public render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }

    private renderRow(task: TodoTask) {
        return(
            <Text>{task.taskName}</Text>
        );
    }
}

