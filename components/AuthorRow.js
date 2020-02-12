import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';


import Avatar from './Avatar';


export default function AutoRow ({ fullname, linkText, onPressLinkText }) {
    return (
        <View style = {styles.container}>
            <Avatar
                size={35}
                initials={"AB"}
                backgroundColor =  {"#aaa"} 
                />
                <Text style = {styles.text} numberofLines={1}>
                    {fullname}
                </Text>
                {!!linkText && (
                    <TouchableOpacity onPress={onPressLinkText} >
                        <Text numberOfLines={1}>{linkText}</Text>
                    </TouchableOpacity>
)}
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        marginHorizontal: 6,
    },
});