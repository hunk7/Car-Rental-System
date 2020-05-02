import React, { lazy, Suspense , useReducer , useContext  } from 'react';
import { Route,Switch,Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Spinner } from 'reactstrap';

// Layout Blueprints
import { PresentationLayout } from './layout-blueprints';

const Dashboard = lazy(() => import('./pages/Dashboard'));

const Routes = () => {

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  const location = useLocation();
  
  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
            <div className="w-50 mx-auto">
              <Spinner type="grow" color="primary" />
            </div>
          </div>
        }>
        <Switch>
          <Redirect exact from="/" to="/Dashboard" />
          <Route path={['/Dashboard']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/Dashboard" component={Dashboard} />
                </motion.div>
              </Switch>
            </PresentationLayout>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
