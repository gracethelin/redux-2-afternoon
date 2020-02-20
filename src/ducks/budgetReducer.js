import axios from 'axios'

const REQUEST_ACTION_TYPE = 'REQUEST_ACTION_TYPE'
const ADD_PURCHASE = 'ADD_PURCHASE'
const REMOVE_PURCHASE = 'REMOVE_PURCHASE'

const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

export function deletePurchases(id){
    const data = axios.delete(`/api/budget-data/purchase/${id}`).then(res => res.data)
    return {
        type: REMOVE_PURCHASE,
        payload: data
    }
}

export function addPurchase(price, description, category){
    const data = axios.post('/api/budget-data/purchase', {price, description, category}).then(res => res.data)
    return {
        type: ADD_PURCHASE,
        payload: data
    }
  
}


export function requestBudgetData(){
    const data = axios.get('/api/budget-data').then((res) => res.data)
    return {
        type:REQUEST_ACTION_TYPE,
        payload: data
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case REQUEST_ACTION_TYPE + '_PENDING':
            return Object.assign({}, state, {loading:true})
        case REQUEST_ACTION_TYPE + '_FULFILLED':
            return Object.assign({}, state, { budget: action.payload, loading:false})
        case ADD_PURCHASE + '_PENDING':
            return Object.assign({}, state, {loading:true})
        case ADD_PURCHASE + '_FULFILLED':
            return Object.assign({}, state, { purchases: action.payload, loading:false})
            case REMOVE_PURCHASE + '_PENDING':
            return Object.assign({}, state, {loading:true})
        case REMOVE_PURCHASE + '_FULFILLED':
            return Object.assign({}, state, { purchases: action.payload, loading:false})


            default:
             return state
    }
}
