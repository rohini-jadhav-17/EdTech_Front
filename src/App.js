import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';
import AddTutorial from './Components/Tutorial/AddTutorial';
import TutorialsList from './Components/Tutorial/TutorialsList';
import Tutorial from './Components/Tutorial/Tutorial';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import store  from './store/store';
import Profile from './Components/Profile';
import PrivateRoutes from './Config/PrivateRoutes';
import Header from './Header';

const App = () => {
  
  return (
  <Provider store={store}>
  <BrowserRouter>    
      <Header/>
      <div className='container mt-3'>
        <Routes>
          <Route path='/add' element={<AddTutorial/>} />
          <Route path='/tutorials' element={<TutorialsList/>} />
          <Route path='/tutorials/:id' element={<Tutorial/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />                    
          <Route path='/profile' element={<PrivateRoutes><Profile/></PrivateRoutes>} />
          
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
