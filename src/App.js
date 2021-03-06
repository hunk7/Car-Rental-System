import React, { Fragement,Component,createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import Routes from './Routes';
import ScrollToTop from './utils/ScrollToTop';
import './assets/base.scss';
import './react-date-range/dist/styles.css'; // main css file
import './react-date-range/dist/theme/default.css'; // theme css file

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/CarRental/">
          <ScrollToTop>
                 <Routes />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
