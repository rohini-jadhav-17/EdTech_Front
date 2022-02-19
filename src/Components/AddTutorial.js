import React, { useState } from 'react';
import TutorialDataService  from '../Services/TutorialService';

const AddTutorial = () => {
    const initialState = {
        id: null,
        title: '',
        description: '',
        published: false
    };
    //state to save tutorial info
    const [tutorial, setTutorial] = useState(initialState);
    // to check whether tutorial is submitted, if yes display add button to add new tutorial else show form
    const [submitted, setSubmitted] = useState(false);

    //to capture the input change in form
    const handleInputChange = e => {
        const { name, value } = e.target;
        setTutorial({...tutorial, [name]: value });
    };

    // save the tutorial in backend via tutorial service(axios)
    const saveTutorial = (e) => {
        e.preventDefault();
        // will need state data to pass in axios just like we pass the data in body in swagger
        var data = {
            title: tutorial.title,
            description: tutorial.description
        };
        
        // using axios post method
        TutorialDataService.create(data)
        .then( res => {
            console.log(res.data);
            setSubmitted(true);
        })
        .catch(err => {
            console.log(err);
        })
        // console.log(data);
    }
    // for adding new tutorial all data fields should be blank i.e initial state and submitted should be false
    const newTutorial = () => {
        setTutorial(initialState);
        setSubmitted(false);
    };

  return (    
    <div className='submit-form'>
        { submitted ? (
        <div>
            <h4>Tutorial submitted successfully!!!!</h4>
            <button 
                className='btn btn-success'
                onClick={newTutorial}>Add</button>
        </div>
        ) : (
        <>
        <h3 className='text-center'>Tutorial to add</h3>
        <form onSubmit={saveTutorial}>
            <div className="form-group mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input 
                    type="text" 
                    className="form-control form-control-sm" 
                    id="title" 
                    value={tutorial.title}
                    onChange={handleInputChange}
                    name="title"
                    required
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input 
                    type="text" 
                    className="form-control form-control-sm" 
                    id="description"
                    value={tutorial.description}
                    onChange={handleInputChange}
                    name="description"
                    required
                />
            </div>
            <button 
                type='submit'                
                className="btn btn-success"
            >Submit
            </button>
        </form>
        </>
        )}
    </div>
  );
}

export default AddTutorial;
