import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ActionButton } from '../common/actionButton';
import { navigate } from '../../navigation/rootNavigation';
import { MALE_TYPE, FEMALE_TYPE } from '../../constance/constance';

const MainScreen = () => {

  const state = useSelector((state: any) => state)

  return (
    <View style={styles.container}>
      <ActionButton
        onPress={() => {
          navigate('User List', { type: MALE_TYPE })
        }}
        text={`Male (${state.maleUsers.length})`} />
      <ActionButton
        onPress={() => {
          navigate('User List', { type: FEMALE_TYPE })
        }}
        text={`Female (${state.femaleUsers.length})`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white'
  }
});

export default MainScreen;