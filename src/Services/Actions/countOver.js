import {incrementOvers, decrementOvers} from '../Types';

export const incrementOver = (a) =>{
    return{
        type: incrementOvers,
        payLoad: a
    }
}
export const decrementOver = (a) =>{
    return{
        type: decrementOvers,
        payLoad : a
    }
}