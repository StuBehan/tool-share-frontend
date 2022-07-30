import { useReducer } from 'react';
import reducer from '../../hooks/Reducer/Reducer';
import { State } from '../../types';

const initialState: State = { user: '' };

const Page = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <></>;
};

export default Page;
