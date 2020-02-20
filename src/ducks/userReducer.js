import axios from 'axios'

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

const initalState = {
    email: null,
    firstName: null,
    lastName: null
}


export function requestUserData(){
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}



const bleh = (state = initalState, action) => {
   switch(action.type){
       case REQUEST_USER_DATA + '_FULFILLED':
           const { email, firstName, lastName } = action.payload.user;
       return {email, firstName, lastName}
     default: return state
 }
}

export default bleh