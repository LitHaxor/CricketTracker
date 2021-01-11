import {decrementOvers, incrementOvers} from '../Types';

const initalState ={
    over: 0
}

export default function OverReducer(state= initalState, action)
{
    switch (action.type) {
        case incrementOvers:
            
            return{
                ...state,
                over: state.over+ action.payLoad
            }
        case decrementOvers:
            return{
                ...state,
                over: state.over - action.payLoad
            }
        default:
           return state;
    }
}