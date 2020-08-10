import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'react-native-elements';

export default function Header() {
    const navigation = useNavigation()
    const { colors } = useTheme()
    const dispatch = useDispatch()
    const currentTheme = useSelector(state => {
        return state.myDarkMode
    })
    const mycolor = colors.iconColor
    return (
        <View style={{
            marginTop: Constant.statusBarHeight,
            height: 45,
            backgroundColor: colors.headerColor,
            flexDirection: "row",
            justifyContent: "space-between",
            elevation:3
        }}>
            <View style={{
                flexDirection: "row",
                margin: 5
            }}>
                <AntDesign style={{
                    marginLeft: 18
                }}
                    name="youtube" size={32} color="red" />
                <Text style={{
                    fontSize: 22,
                    marginLeft: 3,
                    fontWeight: "bold",
                    color: mycolor
                }}>YouTube</Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 110,
                margin: 8,
                marginRight: 15
            }}>
                <Ionicons name="md-videocam" color="gray" size={25} />
                <Ionicons name="md-search" color="gray" size={25} onPress={() => navigation.navigate("search")} />
                <Avatar
                    rounded
                    source={{
                        uri:
                            'data:image/jpeg;base64,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',
                    }}
                    onPress={() => dispatch({ type: "change_theme", payload: !currentTheme })}
                    size={30}
                />
                {/* <MaterialIcons name="account-circle" color="gray" size={25} onPress={() => dispatch({ type: "change_theme", payload: !currentTheme })} /> */}
            </View>
        </View>
    );
}