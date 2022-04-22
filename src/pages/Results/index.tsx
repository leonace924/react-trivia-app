import React, { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, View } from 'components/Common';
import { useScore } from 'hooks/useScore';
import { Button } from 'components/Form';
import { ResultItem } from 'components/Pages/Results';

const Results = () => {
  const [score, , resetScore] = useScore();
  const navigate = useNavigate();

  console.log(score);

  const returnToHome = useCallback(() => {
    resetScore();
    navigate('/');
  }, [navigate, resetScore]);

  useEffect(() => {
    if (!score.length) returnToHome();
  }, [navigate, returnToHome, score]);

  const correctScoreCount = useMemo(() => score.filter((value) => value.answer).length, [score]);

  return (
    <View className="flex flex-col items-center justify-between flex-1">
      <Title as="h2" className="text-2xl font-bold text-center text-black lg:text-3xl">
        You scored <br /> {`${correctScoreCount} / ${score.length}`}
      </Title>

      <View className="grid justify-start gap-3 my-12 lg:gap-4 lg:my-20">
        {score.map((result, id) => (
          <ResultItem result={result} key={id} />
        ))}
      </View>

      <Button
        className="px-6 py-2 text-2xl text-center text-black uppercase"
        onClick={returnToHome}
      >
        Play Again?
      </Button>
    </View>
  );
};

export default Results;
