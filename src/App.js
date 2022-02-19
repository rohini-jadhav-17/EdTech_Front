import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';
import AddTutorial from './Components/AddTutorial';
import TutorialsList from './Components/TutorialsList';
import Tutorial from './Components/Tutorial';

const App = () => {
  return (
  <BrowserRouter>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">EdTech</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tutorials">Tutorials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add">Add</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container mt-3'>
        <Routes>
          <Route path='/add' element={<AddTutorial/>} />
          <Route path='/tutorials' element={<TutorialsList/>} />
          <Route path='/tutorials/:id' element={<Tutorial/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
