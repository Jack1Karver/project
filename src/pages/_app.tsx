import { ToastContainer } from 'react-toastify';
import '../resources/styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
    {' '}
    <Component {...pageProps} />{' '}
    <ToastContainer 
     position='bottom-center'
     autoClose = {5000}/>
  </>

  )
}

export default MyApp;
