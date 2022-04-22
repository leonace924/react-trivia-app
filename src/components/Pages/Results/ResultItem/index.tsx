import React from 'react';
import { Redactor, View, Text } from 'components/Common';

import { ResultDto } from 'types';

type ResultItemProps = {
  result: ResultDto;
};

export const ResultItem = ({ result }: ResultItemProps) => {
  const { question, answer } = result;
  return (
    <View className="grid items-baseline gap-6 text-xl font-semibold text-zinc-500 grid-cols-result lg:text-2xl">
      <Text className="w-6 text-2xl font-bold text-center lg:text-3xl">{answer ? '+' : '-'}</Text>
      <Redactor>{question ?? ''}</Redactor>
    </View>
  );
};
