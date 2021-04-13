import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ActionButton } from '../common/actionButton';
import { goBack } from '../../navigation/rootNavigation';
import { setMaleUsersAction, setFemaleUsersAction } from '../../actions/usersAction';
import { FEMALE, MALE } from '../../constance/constance';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';

const EditScreen = ({ route }) => {

    const dispatch = useDispatch();
    const user = route.params.user;
    const state = useSelector((state: any) => state)

    const [isEditMode, setIsEditMode] = useState(false);
    const [imageUri, setImageUri] = useState(user.picture.large);

    const [firstName, setFirstName] = useState(user.name.first);
    const [lastName, setLastName] = useState(user.name.last);
    const [email, setEmail] = useState(user.email);

    const deleteUser = () => {
        if (user.gender === MALE) {
            const filteredUsers = state.maleUsers.filter(item => item !== user);
            dispatch(setMaleUsersAction(filteredUsers));
        } else if (user.gender === FEMALE) {
            const filteredUsers = state.femaleUsers.filter(item => item !== user);
            dispatch(setFemaleUsersAction(filteredUsers));
        }
        goBack();
    }

    const saveUserDetails = () => {
        if (user.gender === MALE) {
            const updatedUserList = state.maleUsers.map((currentUser) => {
                if (currentUser === user) {
                    currentUser.name.first = firstName;
                    currentUser.name.last = lastName;
                    currentUser.email = email;
                    currentUser.picture.large = imageUri;
                    currentUser.picture.thumbnail = imageUri;
                }
                return currentUser;
            });
            dispatch(setMaleUsersAction(updatedUserList));

        } else if (user.gender === FEMALE) {
            const updatedUserList = state.femaleUsers.map((currentUser) => {
                if (currentUser === user) {
                    currentUser.name.first = firstName;
                    currentUser.name.last = lastName;
                    currentUser.email = email;
                    currentUser.picture.large = imageUri;
                    currentUser.picture.thumbnail = imageUri;
                }
                return currentUser;
            });
            dispatch(setFemaleUsersAction(updatedUserList));
        }

    }

    const onPressEdit = () => {
        isEditMode && saveUserDetails()
        setIsEditMode(!isEditMode)
    }

    const uploadImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 1000,
                maxWidth: 1000,
            },
            (response) => {
                setImageUri(response.uri);
            },
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity disabled={!isEditMode} onPress={uploadImage}>
                    <Image
                        style={styles.image}
                        resizeMode={'contain'}
                        source={{ uri: imageUri }} />
                </TouchableOpacity>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.nameContainer}>
                    <TextInput
                        style={styles.nameStyle}
                        value={firstName}
                        editable={isEditMode}
                        onChangeText={val => setFirstName(val)} />
                    <TextInput
                        style={styles.nameStyle}
                        value={lastName}
                        editable={isEditMode}
                        onChangeText={val => setLastName(val)} />
                </View>
                <View>
                    <TextInput
                        style={styles.email}
                        value={email}
                        editable={isEditMode}
                        onChangeText={val => setEmail(val)} />
                </View>


            </View>
            <View style={styles.buttonsContainer}>
                <ActionButton onPress={onPressEdit} text={isEditMode ? 'Save' : 'Edit'} />
                {!isEditMode && <ActionButton onPress={deleteUser} text={'Delete'} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 16,
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 2
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonsContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    nameStyle: {
        fontSize: 18,
        marginRight: 4,
        paddingVertical: 2,
        textAlignVertical: 'bottom',
        color: 'black'
    },
    email: {
        textAlignVertical: 'top',
        paddingVertical: 2,
        color: 'black'
    },

});

export default EditScreen;