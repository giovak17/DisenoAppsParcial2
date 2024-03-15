import { StyleSheet, Pressable, Text, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({label, theme, onPress}){
    if(theme === 'primary'){
        return(
            <View style={[styles.button_container, {borderWidth: 4, borderColor: "#ffd33d", border_radius: 18}]}>
                <Pressable
                    style = {[styles.button, {backgroundColor: "#FFFFFF"}]}
                    onPress={onPress}
                >
                    <FontAwesome 
                    name = 'picture-o'
                    size={18}
                    color={"#25292E"}
                    style={styles.button_icon}
                    />
                    <Text style={[styles.button_label, {color: "#25292E"}]}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
    }
    return(
        <View style={styles.button_container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.button_label}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button_container: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        border_radius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button_icon: {
        paddingRight: 8,
    },
    button_label: {
        color: '#FFFFFF',
        font_size: 16,
    },
});