import axios from 'axios';
import { MALE, FEMALE } from '../constance/constance';
import { User, Users } from '../types';

const USERS_URL = 'https://randomuser.me/api/?results=100';

export const getUsers = () => new Promise<Users>(async (resolve, reject) => {
  try {
    const res: any = await axios.get(USERS_URL);

    let maleArray: any = [];
    let femaleArray: any = [];
    res.data.results.forEach((user: User) => {
      if (user.gender === MALE) {
        maleArray.push(user);
      } else if (user.gender === FEMALE) {
        femaleArray.push(user);
      }
    });

    resolve({ maleArray, femaleArray });
  } catch (e) {
    reject(e);
  }
});