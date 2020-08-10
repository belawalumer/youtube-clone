import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';

const Subscriptions = () => {
    const [name, setName] = useState("Belawal")
    const clickHandler = () => {
        setName("Belawal Umer")
    }
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Text>My name is {name}</Text>
                <Button title="click me" style={styles.btnContainer} onPress={clickHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnContainer: {
        margin: 10
    }
})
export default Subscriptions