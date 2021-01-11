import {lastRuns} from '../Types';

const initalState = {
    last: []
}

const LastRunReducer = (state = initalState, action) =>{
    switch (action.type) {
        case lastRuns:
           return{
               ...state,
               last: action.payLoad
           }
    
        default:
            return state;
    }
}

export default LastRunReducer;