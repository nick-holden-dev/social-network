import {usersAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: 
            return {
                ...state,
               ...action.data,
               isAuth: true
            }
        default:
            return state;

    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: (userId, email, login)})

export const  auth = () => (dispatch) => {
        usersAPI.auth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login))
                }
            });
}

export default authReducer;
