import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    RefreshControl,
    Alert
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFemaleUsersAction, setMaleUsersAction } from '../../actions/usersAction';
import { MALE_TYPE } from '../../constance/constance';
import { getUsers } from '../../service/commonService';
import { Users } from '../../types';
import UserItem from './userItem';

const UsersScreen = ({ route }) => {

    const type = route.params.type;
    const users = useSelector(
        (state: any) => type === MALE_TYPE ? state.maleUsers : state.femaleUsers);
    const [isFetching, setFetching] = useState(false);

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={users}
                renderItem={({ item, index }) => <UserItem user={item} />}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews
                refreshControl={(
                    <RefreshControl
                        refreshing={isFetching}
                        onRefresh={async () => {
                            setFetching(true);
                            try {
                                const users: Users = await getUsers();
                                dispatch(setMaleUsersAction(users.maleArray));
                                dispatch(setFemaleUsersAction(users.femaleArray));

                            } catch (e) {
                                Alert.alert(e)
                            } finally {
                                setFetching(false);
                            }
                        }} />
                )} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});

export default UsersScreen;