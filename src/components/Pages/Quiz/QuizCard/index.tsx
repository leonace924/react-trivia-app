import React from 'react';
import { useForm } from 'react-hook-form';
import { Redactor, View } from 'components/Common';
import { Button, RadioButton } from 'components/Form';
import { QuizDto } from 'types';

type QuizCardProps = {
  quiz: QuizDto;
};

export const QuizCard = ({ quiz }: QuizCardProps) => {
  const { question, correct_answer } = quiz;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log(correct_answer);

  return (
    <View className="px-8 py-12 border border-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Redactor className="mb-6 text-2xl text-center text-black lg:text-3xl">
          {question ?? ''}
        </Redactor>

        <View className="flex items-center justify-around mb-6">
          <RadioButton
            id="answer-true"
            label="True"
            register={register}
            name="answer"
            errors={{ errors }}
            validation={{ required: true }}
          />
          <RadioButton
            id="answer-false"
            label="False"
            register={register}
            name="answer"
            errors={{ errors }}
            validation={{ required: true }}
          />
        </View>

        {errors.answer && <div className="form_error">We should select one of the questions</div>}

        <Button className="px-6 py-1 border border-black">Next</Button>
      </form>
    </View>
  );
};
