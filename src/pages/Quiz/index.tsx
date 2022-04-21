import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading, View, Error, Title, Paragraph } from 'components/Common';
import { QuizCard } from 'components/Pages/Quiz';
import { useGetQuestionsQuery } from 'redux/slices/api';

const Quiz = () => {
  const navigate = useNavigate();
  const [questionId, setQuestionId] = useState(0);
  const { data: questions, error, isLoading, isFetching } = useGetQuestionsQuery();

  const handleNext = useCallback(() => {
    if (!questions) return;

    if (questionId === questions.length - 1) navigate('/results');
    setQuestionId(questionId + 1);
  }, [questions, questionId, navigate]);

  if (isLoading || isFetching) return <Loading />;
  if (error) return <Error />;
  if (!questions || !questions.length) return <Error type="noData" />;

  return (
    <View className="flex flex-col justify-between flex-1 h-full px-4">
      <Title as="h2" className="text-2xl font-bold text-center text-black lg:text-3xl">
        {questions[questionId].category}
      </Title>

      <View className="max-w-3xl mx-auto text-center">
        <QuizCard quiz={questions[questionId]} handleNext={handleNext} />

        <Paragraph className="mt-4 text-xl text-black lg:text-2xl lg:mt-6">
          {`${questionId + 1} / ${questions.length}`}
        </Paragraph>
      </View>

      <View className="opacity-0">Text</View>
    </View>
  );
};

export default Quiz;
