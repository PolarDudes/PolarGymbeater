import React from 'react';
import { PolarContextProvider } from './context/context';
import Loading from './pages/loading';
import Home from './pages/home';

export default function App() {
  return (
    <>
      <PolarContextProvider>
        <Loading>
          <Home />
        </Loading>
      </PolarContextProvider>
    </>
  );
}
