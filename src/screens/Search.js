import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import Constant from 'expo-constants';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const SearchScreen = () => {
    const navigation = useNavigation()
    const { colors } = useTheme()
    const mycolor = colors.iconColor
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const miniCardData = useSelector(state => {
        return state.search
    })
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyA1JiOVeqpojkDM9md71CzknqLI8gljk0w`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                dispatch({ type: "add", payload: data.items })
            })
    }
    return (
        <View style={{
            flex: 1,
            marginTop: Constant.statusBarHeight
        }}>


            <View style={{
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                // elevation: 5,
                backgroundColor: colors.headerColor
            }}>
                <Ionicons style={{ color: mycolor }} name="md-arrow-back" size={32} onPress={() => navigation.goBack()} />
        
                <TextInput style={{
                    width: "70%",
                    backgroundColor: "#e6e6e6"
                }}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />

                <Ionicons style={{ color: mycolor }} name="md-send" size={32} onPress={() => fetchData()} />
            </View>
            {loading ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" /> : null}
            <FlatList data={miniCardData} renderItem={({ item }) => {
                return <MiniCard
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                />
            }} />
        </View>
    )
}
export default SearchScreen