import { useReduxSelector } from "./redux";

export const useAthleteList = () => {
  const athleteList = useReduxSelector(state => state.athletes.list);

  return {
    athleteList,
  }
};
