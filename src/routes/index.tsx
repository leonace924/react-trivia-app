import { Layout } from 'components/Common';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));
const Quiz = React.lazy(() => import('pages/Quiz'));
const Results = React.lazy(() => import('pages/Results'));
const Page404 = React.lazy(() => import('pages/404'));

export const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
};
