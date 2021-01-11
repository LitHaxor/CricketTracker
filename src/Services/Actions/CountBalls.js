import {incrementBalls,decrementBalls} from '../Types';


export const incrementBall = (a) =>{
    return{
        type: incrementBalls,
        payLoad: a
    }
}
export const decrementBall = (a) =>{
    return{
        type: decrementBalls,
        payLoad: a
    }
}