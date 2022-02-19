import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import TutorialDataService from '../Services/TutorialService';
import { Link, useNavigate } from 'react-router-dom';

const TutorialsList = () => {

    let navigate = useNavigate();

    // to save tutorial
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState('');

    // to get all the tutorials (onload) from backend use useEffect 
    useEffect(() => {
        getAllTutorials();
    }, []);

    // retrieve all tutorials
    const getAllTutorials = () => {
        TutorialDataService.getAll()
        .then( res => {
            setTutorials(res.data);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    };

    // for setting current click tutorial
    const setActiveTutorial = (tutorial,index) => {
        setCurrentTutorial(tutorial);
        setCurrentIndex(index);
        // navigate(`/tutorials/${tutorial.id}`);
    };
    
    // for removing all tutorials
    const removeAllTutorials = () => {
        TutorialDataService.removeAll()
        .then( res => {
            setTutorials(null);
        })
        .catch(err => {
            console.log(err);
        })
    }
    // capture the change in input
    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };
    // find tutorial by title
    const findByTitle =() =>{
        TutorialDataService.findByTitle(searchTitle)
        .then(res => {
            setTutorials(res.data);
            console.log(res.data);
        })
        .catch(e=> {
            console.log(e);
        })
    };
  return (
    <div style={{display:"flex"}}>
    <aside className='col-md-4 mt-5'>
        <div className='col-md-8'>
            <div className='input-group mb-3'>
            <input
                type="text"
                className="form-control"
                placeholder="search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
            />
            <button 
                type='button'
                className='btn btn-outline-secondary'
                onClick={findByTitle}>
                Search
            </button>
        </div>
        </div>
        <div>
        <h4 className='mb-4'>Tutorial List</h4>
        <ul className='list'>
            {tutorials && 
            tutorials.map((tutorial,index) => (
                <li 
                    className='list-item'
                    key={index}
                    onClick={()=>setActiveTutorial(tutorial,index)}
                >
                   <span> {tutorial.title}</span>
                </li>
            ))}
        </ul>
        <button 
         className='btn btn-sm m-3 btn-danger'
         onClick={removeAllTutorials}
         >
             Remove All
        </button>
        </div>
    </aside>
    <main className='card col-md-8 p-5 mt-5'>
        { currentTutorial ? (
        <div>
            <h1>Tutorial Details:</h1>
            <div className='card-body'>
            <h2><label><strong>Title:</strong></label> {currentTutorial.title}</h2>
            <h4><label><strong>Description:</strong></label> {currentTutorial.description}</h4> 
            <div><label><strong>Status:</strong></label>{currentTutorial.published ? 'Published':'Pending'}</div>
            <Link
                className='badge bg-warning text-dark'
                to={`/tutorials/${currentTutorial.id}`}>
                    Edit
            </Link>
            </div> 
        </div>) : (
            <div>
                <p>Please click on a Tutorial.</p>
            </div>
        ) }
    </main>
    </div>
  );
}

export default TutorialsList;
