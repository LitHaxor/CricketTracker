import {decrementWickets, incementWickets} from '../Types';


export const decrementWicket = (a) =>{
    return{
        type: decrementWickets,
        payLoad: a
    }
}
export const incrementWicket =(a) =>{
    return{
        type: incementWickets,
        payLoad: a
    }
} 