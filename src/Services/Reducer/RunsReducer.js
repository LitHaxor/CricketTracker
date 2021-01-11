import {incrementRuns, decrementRuns} from '../Types';

const initalState ={
    runs: 0
}

export default function RunsReducer (state= initalState, action){
    switch (action.type) {
        case incrementRuns:
            return{
                ...state,
                runs: state.runs + action.payLoad
            }
        case decrementRuns:
            return{
                ...state,
                runs: state.runs - action.payLoad
            }  
            default:
                return state;
    }
}