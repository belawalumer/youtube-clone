import React from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS9CvXeh1PhtkSNrZ5DHOFzrAJ8gimj8uWcA&usqp=CAU" };

const LittleCard = ({ name }) => {
    return (
        <View style={{
            margin: 10
        }}>
            <ImageBackground source={image} style={{
                width: 160,
                height: 40,
                flexDirection: "row"
            }}>
                <MaterialIcons name="home" size={20} color="white" style={{ padding: 10 }} />
                <Text style={{ color: "white", padding: 10, fontWeight: "bold" }}>{name}</Text>
            </ImageBackground>
        </View>
    );
}

const Explore = () => {
    const cardData = useSelector(state => {
        return state.cardData;
    })
    return (
        <View>
            <ScrollView>
                <Header />
                <View style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    backgroundColor: "#ddd"
                }}>
                    <LittleCard name="Trending" image="./assets/trending.jpeg" />
                    <LittleCard name="Music" image="./assets/music.jpeg" />
                    <LittleCard name="News" image="./assets/news.jpeg" />
                    <LittleCard name="Movies" image="./assets/movies.jpeg" />
                </View>
                <View style={{backgroundColor:"#fff"}}>
                    <Text style={{
                        margin: 8,
                        marginTop:15,
                        fontSize: 17
                    }}>Trending videos</Text>
                    <FlatList
                        style={{ marginTop: 5 }}
                        data={cardData}
                        renderItem={({ item }) => {
                            return <Card
                                videoId={item.id}
                                title={item.snippet.title}
                                channel={item.snippet.channelTitle}
                                description={item.snippet.description}
                                publishedAt={item.snippet.publishedAt}
                            />
                        }}
                        keyExtractor={item => item.id.videoId}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
export default Explore