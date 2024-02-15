import { useReduxSelector, useReduxDispatch } from "./redux";
// import { create } from '../state/redux/slices/athleteSlice';

export const useAthleteList = () => {
  const dispatch = useReduxDispatch();
  const athleteList = useReduxSelector(state => state.athletes.list);

  const create = (): void => dispatch(create);

  return {
    athleteList,
  };
};
