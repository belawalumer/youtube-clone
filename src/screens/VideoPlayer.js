import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import Constant from 'expo-constants';
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import { ScrollView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const VideoPlayer = ({ route }) => {
    const { videoId, title, description, publish, channel } = route.params
    return (
        <View style={{
            flex: 1,
            marginTop: Constant.statusBarHeight,
        }}>
            <View style={{
                width: "100%",
                height: 200
            }}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                />

            </View>
            <Text style={{
                fontSize: 15,
                width: Dimensions.get("screen").width - 50,
                margin: 9
            }}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {title}
            </Text>
            <View style={{ flexDirection: "row" }}>
                <AntDesign name="like1" size={24} color="gray" />
                <AntDesign name="dislike1" size={24} color="gray" />
                <Ionicons name="md-share-alt" size={24} color="gray" />
            </View>
            <View style={{
                borderBottomWidth: 1,
                margin: 3,
                borderColor: "gray"
            }} />
            <View style={{
                margin: 4,
                flexDirection: "row"
            }}>
                <MaterialIcons name="account-circle" color="#212121" size={40} />
                <Text style={{
                    margin: 8,
                }}>{channel}</Text>
                <View style={{
                    width: 100,
                    marginLeft: 100
                }} >
                    <Button title="Subscribe" color="red" />
                </View>

            </View>
            <View style={{
                borderBottomWidth: 1,
                borderColor: "lightgray",
                marginBottom: 10
            }} />
            <ScrollView>
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ color: "gray" }}>Published at {moment(publish).fromNow()}</Text>
                    <Text style={{ color: "gray" }}>{description}</Text>
                </View>
            </ScrollView>

        </View>
    )
}
export default VideoPlayer