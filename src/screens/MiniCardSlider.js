import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const miniCardSlider = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("videoplayer", { videoId: props.videoId, title: props.title })}>
            <View style={{ height: 130, width: 130, marginLeft: 10 }}>
                <View style={{ flex: 2 }}>
                    <Image source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }} style={{
                        flex: 1,
                        width: null, height: null, resizeMode: 'cover'
                    }} />
                </View>
                <View style={{ flex: 1, paddingBottom: 4 }}>
                    <Text style={{ fontSize: 13 }} ellipsizeMode="tail"
                        numberOfLines={2}>{props.title}</Text>
                    <Text style={{ color: "gray", fontSize: 12 }}>{props.channel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default miniCardSlider