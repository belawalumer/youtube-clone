import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Text>Notifications</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Notifications