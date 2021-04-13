import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SCREEN_WIDTH, BASIC_SHADOW_STYLES } from '../../constance/constance';
import { User } from '../../types';
import { navigate } from '../../navigation/rootNavigation';

export interface UserItemProps {
    user: User
}

const UsersItem = ({ user }: UserItemProps) => {

    return (
        <TouchableOpacity
            onPress={() => {
                navigate('User details', { user })
            }
            }>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        resizeMode={'contain'}
                        source={{ uri: user.picture.thumbnail }} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.nameStyle}>{`${user.name.first} ${user.name.last}`}</Text>
                    <Text>{user.email}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        ...BASIC_SHADOW_STYLES,
        width: SCREEN_WIDTH,
        height: 80,
        flexDirection: 'row',
        marginVertical: 4,

    },
    image: {
        width: 70,
        height: 70
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContainer: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    nameStyle: {
        fontSize: 18,
        marginBottom: 3
    }
});

export default UsersItem;