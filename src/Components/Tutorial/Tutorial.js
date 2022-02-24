import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import TutorialDataService from '../../Services/TutorialService'

const Tutorial = () => {
    let navigate = useNavigate();
    // to get id from url using useParams
    let { id } = useParams();

    const initialState = {
        id: null,
        title: '',
        description: '',
        published: false
    }
  //store the current tutorial
    const [currentTutorial, setCurrentTutorial] = useState(initialState);
  //to show the message
    const [message, setMessage] = useState("");

     //get the tutorial by id
    const getTutorial = id => {
        TutorialDataService.getOne(id)
        .then(res => {
            console.log(res.data);
            setCurrentTutorial(res.data);
        })
        .catch(e =>{
            console.log(e);
        })
    };
  useEffect(() => {
      getTutorial(id);
  }, [id]);

//   handle the change in the input
  const handleInputChange = (e) => {
      const {name,value} = e.target;
      setCurrentTutorial({...currentTutorial, [name]: value})
  };

// handle the published
  const updatePublished = status =>{
    
    TutorialDataService.update(currentTutorial.id, currentTutorial)
    .then( res => {
        setCurrentTutorial({...currentTutorial, published: status});
        console.log(res.data)
    })
    .catch( err => {
        console.log(err);
    })
  };

//   delete tutorial
  const deleteTutorial = () => {
      TutorialDataService.removeOne(currentTutorial.id)
      .then(res => {
          console.log(res.data);
          navigate('/tutorials');
      })
      .catch(e => {
          console.log(e);
      })
  };

//   update tutorial
  const updateTutorial = () => {
      TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then( res => {
          console.log(res.data);
          setMessage("Tutorial updated successfully!!");
      })
      .catch(e =>{
          console.log(e);
      })
  };
  return (
  <div>
      {
          currentTutorial ? 
          (
            <div className='edit-form'>
                <h4>Tutorial</h4>
                <form>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input
                            type="text"
                            className='form-control'
                            id='title'
                            name='title'
                            value={currentTutorial.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input
                            type="text"
                            className='form-control'
                            id='description'
                            name='description'
                            value={currentTutorial.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>
                            <strong>Status:</strong>
                        </label>
                        {currentTutorial.published ? 'Published' : 'Pending'}
                    </div>
                </form>
                {currentTutorial.published ? (
                    <button 
                        className='btn btn-sm btn-primary m-2'
                        onClick={() => updatePublished(false)}
                    >
                        Unpublished
                    </button>
                ):(
                    <button 
                        className='btn btn-sm btn-primary m-2'
                        onClick={() => updatePublished(true)}
                    >
                        Published
                    </button>
                )}
                <button 
                    type='submit'
                    className='btn btn-sm btn-danger m-2'
                    onClick={deleteTutorial}
                >
                    Delete
                </button>
                <button 
                    type='submit'
                    className='btn btn-sm btn-success m-2'
                    onClick={updateTutorial}
                >
                    Update
                </button>
                <p>{message}</p>
            </div>
          ) : 
          (
            <div>
                <p>Please click on tutorial</p>
            </div>
          )
      }
  </div>
  );
};

export default Tutorial;
