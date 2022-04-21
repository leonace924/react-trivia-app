import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
// import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { addResult } from 'redux/slices/score';
import { Redactor, View, Paragraph } from 'components/Common';
import { Button, RadioButton } from 'components/Form';
import { QuizDto } from 'types';

type QuizCardProps = {
  quiz: QuizDto;
  handleAnswer: () => void;
};

export const QuizCard = ({ quiz, handleAnswer }: QuizCardProps) => {
  const { question, correct_answer } = quiz;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(
    (data: any) => {
      console.log(data);
      handleAnswer();
      reset();
      addResult('test');
    },
    [handleAnswer, reset],
  );
  console.log(correct_answer);

  return (
    <View className="px-8 py-12 border border-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Redactor className="mb-6 text-2xl text-center text-black break-words lg:text-3xl">
          {question ?? ''}
        </Redactor>

        <View className="flex items-center justify-around mb-4">
          <RadioButton
            id="answer-true"
            label="True"
            register={register}
            name="answer"
            value="True"
            errors={{ errors }}
            validation={{ required: true }}
          />
          <RadioButton
            id="answer-false"
            label="False"
            register={register}
            name="answer"
            value="False"
            errors={{ errors }}
            validation={{ required: true }}
          />
        </View>

        {errors.answer && (
          <Paragraph className="mb-6 text-sm text-rose-600">
            We should select one of the questions
          </Paragraph>
        )}

        <Button className="px-6 py-1 border border-black">Next</Button>
      </form>
    </View>
  );
};
