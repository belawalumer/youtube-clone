import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Header from '../components/Header';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import MiniCardSlider from './MiniCardSlider';
import { ScrollView } from 'react-native-gesture-handler';

const Library = () => {
    const cardData = useSelector(state => {
        return state.search;
    })
    const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS9CvXeh1PhtkSNrZ5DHOFzrAJ8gimj8uWcA&usqp=CAU" };

    return (
        <View style={{ backgroundColor: "white" }}>
            <Header />
            <Text style={styles.heading}>Recent</Text>
            {cardData.length > 0 ?
                <View style={{ height: 130, marginTop: 10, marginBottom: 8 }}>
                    <ScrollView horizontal={true}>
                        {cardData.map(function (item) {
                            return (
                                <MiniCardSlider
                                    videoId={item.id.videoId}
                                    title={item.snippet.title}
                                    channel={item.snippet.channelTitle}
                                    keyExtractor={item => item.id.videoId}
                                />
                            )
                        })}
                    </ScrollView>
                </View> : null}

            <View style={{
                borderBottomWidth: 1,
                borderColor: "lightgray",
            }} />
            <View style={styles.lists}>
                <TouchableOpacity>
                    <View style={styles.linkList}>
                        <MaterialIcons name="history" size={24} color="gray" />
                        <Text style={styles.listText}>History</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.linkList}>
                        <MaterialCommunityIcons name="download" size={24} color="gray" />
                        <Text style={styles.listText}>Downloads</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.linkList}>
                        <MaterialIcons name="video-library" size={24} color="gray" />
                        <Text style={styles.listText}>Your videos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.linkList}>
                        <MaterialIcons name="watch-later" size={24} color="gray" />
                        <Text style={styles.listText}>Watch later</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                borderBottomWidth: 1,
                borderColor: "lightgray",
                marginTop: 20
            }} />
            <Text style={styles.playlist}>Playlists</Text>
            <Text style={styles.playlist}>Playlists</Text>
            <Text style={styles.playlist}>Playlists</Text>
            <Text style={styles.playlist}>Playlists</Text>
            <Text style={styles.playlist}>Playlists</Text>
            <Text style={styles.playlist}>Playlists</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        margin: 10,
        fontSize: 17
    },
    lists: {
        marginLeft: 20
    },
    listText: {
        fontSize: 17,
        marginLeft: 25,
        fontFamily: "sans-serif",

    },
    linkList: {
        flexDirection: "row",
        marginTop: 25
    },
    playlist: {
        margin: 12,
        fontSize: 17
    }
})
export default Library