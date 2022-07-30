import { State, ReducerAction } from '../../types';

const reducer = (state: State, action: ReducerAction): State => {
  switch (action.type) {
    case 'login':
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
