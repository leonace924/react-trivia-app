import React from 'react';
import { Button, Layout, Title, View } from 'components/Common';

const Home = () => {
  return (
    <Layout>
      <View className="flex flex-col items-center justify-between flex-1">
        <Title className="text-2xl font-bold text-center text-black lg:text-3xl max-w-[230px] mx-auto">
          Welcome to the Trivia Challenge!
        </Title>

        <Title
          as="h3"
          className="text-2xl text-center text-black lg:text-3xl max-w-[280px] mx-auto"
        >
          You will be presented with 10 True or False questions.
        </Title>

        <Title
          as="h3"
          className="text-2xl text-center text-black lg:text-3xl max-w-[280px] mx-auto"
        >
          Can you score 100%?
        </Title>

        <Button className="px-6 py-2 text-2xl text-center text-black uppercase">Begin</Button>
      </View>
    </Layout>
  );
};

export default Home;
