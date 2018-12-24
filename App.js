import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Text>Salut ça va ?</Text>
            <Text>Open Up App.js to start working</Text>
            <Text>Open Up App.js to start working</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d2c40',
        alignItems: 'center',
        justifyContent: 'center',
    }
});