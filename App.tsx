import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './src/navigations';
import configureStore from './src/redux/store';
import initialStates from './src/redux/initial-states';
import { ThemeProvider } from './src/context/theme-context';
import './src/constants/IMLocalize';

function App(): React.JSX.Element {
  const { store } = configureStore(initialStates);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
