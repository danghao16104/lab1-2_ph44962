import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/stores';
import ThuChiScreen from './screens/thuChiScreen/ThuChiScreen';

const App = () => {
  return (
    <Provider store={store}>
      <ThuChiScreen />
    </Provider>
  );
}

export default App;
