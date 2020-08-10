import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import moment from "moment";

const Card = (props) => {
    const navigation = useNavigation();
    const { colors } = useTheme()
    const textcolor = colors.iconColor
    return (
        <TouchableOpacity onPress={() => navigation.navigate("videoplayer", { videoId: props.videoId, channel: props.channel, title: props.title, description: props.description, publishedAt: props.publishedAt})}>
            <View style={{
                marginBottom: 10,
            }}>
                <Image source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                    style={{
                        width: "100%",
                        height: 200
                    }} />
                <View style={{
                    flexDirection: "row",
                    margin: 5
                }}>
                    <MaterialIcons name="account-circle" color="#212121" size={40} />
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text style={{
                            fontSize: 13,
                            color: textcolor,
                            width: 280
                        }}
                            ellipsizeMode="tail"
                            numberOfLines={2}
                        >{props.title}</Text>
                        <Text style={{
                            color: "gray",
                            fontSize: 13
                        }}>{props.channel} - {moment(props.publishedAt).fromNow()}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}
export default Card