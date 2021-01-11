import {decrementWickets,incementWickets} from '../Types';

const initialState ={
    wicket: 0
}

export default function WicketReducer(state= initialState, action)
{
    switch (action.type) {
        case incementWickets:
            
          return{
              ...state,
              wicket: state.wicket+ action.payLoad
          }
        case decrementWickets:
            return{
                ...state,
                wicket: state.wicket - action.payLoad
            }
        default:
            return state;
    }
}