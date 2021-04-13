import { MALE_TYPE, FEMALE_TYPE } from '../constance/constance';
import { ReducerAction, User } from '../types'

interface UsersReducer {
    maleUsers: User[],
    femaleUsers: User[]
}

const INITIAL_STATE: UsersReducer = {
    maleUsers: [],
    femaleUsers: []
};

const usersReducer = (state: UsersReducer = INITIAL_STATE, action: ReducerAction) => {
    switch (action.type) {
        case MALE_TYPE: {
            return { ...state, maleUsers: action.payload };
        }

        case FEMALE_TYPE: {
            return { ...state, femaleUsers: action.payload };
        }

        default:
            return state;
    }
};

export default usersReducer;