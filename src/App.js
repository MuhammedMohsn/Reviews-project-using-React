// import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import data from './data'
import Reviews from './Reviews'

function App() {
  let [reviews, setreviews] = useState(data)
  return (
    <Fragment>
      <div className="container">
        <div className='title'>
          <h1>Our Reviews</h1>
          <div className='underline'></div>
        </div>
        <Reviews reviews={reviews} />
       
      </div>
    </Fragment>
  );

}

export default App;
