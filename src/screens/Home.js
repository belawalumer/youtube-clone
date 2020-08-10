import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';

export default function HomeScreen() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const cardData = useSelector(state => {
    return state.cardData
  })

  const fetchData = () => {
    setLoading(true)
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PK&key=AIzaSyA1JiOVeqpojkDM9md71CzknqLI8gljk0w`)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        dispatch({ type: "all_videos", payload: data.items })
      })
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }} onLayout={fetchData}>
      {/* <ScrollView> */}
        <Header />
        {loading ? <ActivityIndicator style={styles.indicator} size="large" color="red" /> : null}
        <FlatList
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
          keyExtractor={item => item.id}
        />
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1
  }
})