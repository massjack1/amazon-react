import { HydrationProvider } from 'react-hydration-provider';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
  <HydrationProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </HydrationProvider>
    
  )
}

export default MyApp