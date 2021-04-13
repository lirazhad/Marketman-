import { Dimensions } from 'react-native';

export const MALE_TYPE = 'MALE_TYPE';
export const FEMALE_TYPE = 'FEMALE_TYPE';

export const FEMALE = 'female';
export const MALE = 'male';
export const SCREEN_WIDTH: number = Dimensions.get('window').width;

export const BASIC_SHADOW_STYLES = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2,
  backgroundColor: '#fff'
};