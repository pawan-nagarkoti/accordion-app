import React, { useEffect, useState } from 'react';
import data from './data';

const Question = () => {
  const [question, setQuestion] = useState(data);
  const [indexs, setIndex] = useState(false)


  const handleDropdown = (id) => {
    if (indexs === id) {
      return setIndex(null)
    }
    setIndex(id);
  }
  return (
    <>
      {
        question.map(({ title, info, id }) =>
          <article className='question'>
            <header>
              <h4>{title}</h4>
              <button className='btn' onClick={() => handleDropdown(id)}>
                {indexs === id ? '+' : '-'}
              </button>
            </header>
            {indexs === id && <p>{info}</p>}
          </article>
        )
      }
    </>
  )
};

export default Question;