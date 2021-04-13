
import { MALE_TYPE, FEMALE_TYPE } from '../constance/constance';
import { User } from '../types';

export const setMaleUsersAction = (maleArray: User[]) => {
  return {
    type: MALE_TYPE,
    payload: maleArray
  }
}

export const setFemaleUsersAction = (femaleArray: User[]) => {
  return {
    type: FEMALE_TYPE,
    payload: femaleArray
  }
}
