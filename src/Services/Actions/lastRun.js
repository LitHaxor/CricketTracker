import {lastRuns} from '../Types';

export const lastRun = (a) =>{
    return{
        type: lastRuns,
        payLoad: a
    }
}