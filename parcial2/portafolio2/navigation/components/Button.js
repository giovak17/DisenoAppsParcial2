import React from "react";
import { View, Text, Pressable } from "react-native";

export default function Button({onPress}){
    return (
        <View>
            <Pressable onPress={onPress}>
                <Text></Text>
            </Pressable>
        </View>
    );
}


