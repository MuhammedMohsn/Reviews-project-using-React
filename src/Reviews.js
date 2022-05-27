import React ,{Fragment,useState} from 'react'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

function Reviews({reviews}) {
 let [index,setindex]=useState(0)
 let {name, job, image, text}=reviews[index]
 const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if(number< 0){
        return number=reviews.length - 1
    }
    return number;
  };
  const nextPerson = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setindex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return ( <Fragment>
          <div className="img_container"><img src={image}  alt={name} /></div>
           <div className="content">
           <h1>{name}</h1>
          <h2>{job}</h2>
          <p>{text}</p>
          </div>
        <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson} style={{marginRight:"10px"}}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    
    </Fragment>
  
  )
}

export default Reviews