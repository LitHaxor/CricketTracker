import {incrementRuns, decrementRuns} from '../Types';

export const incrementRun = (a) =>{
    return{
        type: incrementRuns,
        payLoad: a
    }
}

export const DecrementRun = (a) =>{
    return{
        type: decrementRuns,
        payLoad : a
    }
}