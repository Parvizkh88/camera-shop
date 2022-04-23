
import MainRouter from './MainRouter';
import Provider from './../context/Provider';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider>
      <ToastContainer />
      <MainRouter />
    </Provider>
  );
}

export default App;
