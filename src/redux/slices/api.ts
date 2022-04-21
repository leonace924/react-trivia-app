import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QuizDto } from 'types';
import { BASE_URL } from 'lib/constant';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<QuizDto[], void>({
      query: () => `/api.php?amount=10&difficulty=hard&type=boolean`,
      transformResponse: (response: any) => response.results,
    }),
  }),
});
export const { useGetQuestionsQuery } = apiSlice;
