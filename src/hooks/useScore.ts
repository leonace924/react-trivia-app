import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { addResult } from 'redux/slices/score';
import { ResultDto } from 'types';

export const useScore = (): [ResultDto[], (value: ResultDto) => void] => {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.score.results);

  const addScore = useCallback(
    (value: ResultDto) => {
      dispatch(addResult(value));
    },
    [dispatch],
  );

  return [score, addScore];
};
