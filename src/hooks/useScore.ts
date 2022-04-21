import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { addResult, resetResult } from 'redux/slices/score';
import { ResultDto } from 'types';

export const useScore = (): [ResultDto[], (value: ResultDto) => void, () => void] => {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.score.results);

  const addScore = useCallback(
    (value: ResultDto) => {
      dispatch(addResult(value));
    },
    [dispatch],
  );

  const resetScore = useCallback(() => {
    dispatch(resetResult());
  }, [dispatch]);

  return [score, addScore, resetScore];
};
