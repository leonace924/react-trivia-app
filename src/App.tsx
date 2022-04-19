import React from 'react';
import { Loading } from 'components/Common';
import { AppRoutes } from 'routes';
import 'styles/index.css';
import './App.css';

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <AppRoutes />
    </React.Suspense>
  );
}

export default App;
