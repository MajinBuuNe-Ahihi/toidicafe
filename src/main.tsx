import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import Loading from './components/common/Loading';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.css';

const Main = React.lazy(()=>import('./App'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Suspense fallback={<Loading/>} >
      <Main/>
      </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
