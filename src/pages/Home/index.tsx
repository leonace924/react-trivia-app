import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, View } from 'components/Common';
import { Button } from 'components/Form';

const Home = () => {
  const navigate = useNavigate();

  const onPress = useCallback(() => {
    navigate('/quiz');
  }, [navigate]);

  return (
    <View className="flex flex-col items-center justify-between flex-1">
      <Title className="text-2xl font-bold text-center text-black lg:text-3xl max-w-[230px] mx-auto lg:max-w-none">
        Welcome to the Trivia Challenge!
      </Title>

      <Title
        as="h3"
        className="text-2xl text-center text-black lg:text-3xl max-w-[280px] mx-auto lg:max-w-none"
      >
        You will be presented with 10 True or False questions.
      </Title>

      <Title
        as="h3"
        className="text-2xl text-center text-black lg:text-3xl max-w-[280px] mx-auto lg:max-w-none"
      >
        Can you score 100%?
      </Title>

      <Button className="px-6 py-2 text-2xl text-center text-black uppercase" onClick={onPress}>
        Begin
      </Button>
    </View>
  );
};

export default Home;
