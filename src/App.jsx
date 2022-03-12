import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLoader from './components/helpers/MainLoader'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorUI from './components/layouts/globals/ErrorUI'

import VeichleState from './context/veichle/veichleState'

const Home = React.lazy(() => import('./components/pages/Home'))


const App = () => {

  const errorHandler = (err, info) => {

    console.log(err, 'logged error');
    console.log(info, 'logged error info');

  }

  return (

    <Router>

      <VeichleState>

        <Suspense fallback={MainLoader.MainLoader()}>

          <ErrorBoundary fallback={ErrorUI()} onError={errorHandler} >

              <Routes>

                  <Route path="/" element={<Home />} />

                  <Route path="*" element={<Home />} />

              </Routes>

            </ErrorBoundary>

        </Suspense>

      </VeichleState>

    </Router>

  );

}

export default App;
