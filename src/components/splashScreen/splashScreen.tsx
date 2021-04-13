

import React, { ElementType, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Alert
} from 'react-native';
import { navigate } from '../../navigation/rootNavigation';
import { getUsers } from '../../service/commonService';
import { Users } from '../../types';
import { setMaleUsersAction, setFemaleUsersAction } from '../../actions/usersAction';
import { useDispatch } from 'react-redux'

const SplashScreen: ElementType = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getUsersFromServer();
  }, [])

  const getUsersFromServer = async () => {
    try{
      const users: Users = await getUsers();

      dispatch(setMaleUsersAction(users.maleArray));
      dispatch(setFemaleUsersAction(users.femaleArray));

      navigate('MainStackScreen');
    }catch(e){
      Alert.alert(e)
    }  
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default SplashScreen;