import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

export default class TaskList extends React.Component<any, any> {

    constructor() {
        super();
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text>TaskList Component</Text>
            </View>
        );
    }
}

