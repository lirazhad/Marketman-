import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

interface ButtonProps {
    onPress: () => void,
    text: string,
}

export const ActionButton = ({ onPress, text }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
            <View style={styles.container}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 12,
        marginVertical: 16
    },
    buttonWrapper: {
        width: '100%'
    }
});