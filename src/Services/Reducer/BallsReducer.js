import { incrementBalls, decrementBalls} from '../Types';

const initialState = {
    balls: 0,
    over: 0
}

export default function BallsReducer (state= initialState , action)
{
    switch (action.type) {
        case incrementBalls:
        return{
            ...state,
            balls: state.balls + action.payLoad,
            
        }
        case decrementBalls:
            return{
                ...state,
                balls: state.balls - action.payLoad,
            }
        default:
            return  state;
    }
}