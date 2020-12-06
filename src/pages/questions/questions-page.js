import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'

import './questions-page.scss'

import Question from '../../components/question/question'

import {questions, LENGTH} from '../../questions'


const QuestionPage = () => {
   
    const history = useHistory()

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

    const [answers, setAnswers] = useState(new Array(LENGTH).fill(null));
    
    // console.log("ANSWERS", answers)
    const handleNext = () => {
        if( currentQuestionIdx < questions.length - 1){
           setCurrentQuestionIdx( currentQuestionIdx + 1)
        }
    }

    const handlePrev = () => {
        if(currentQuestionIdx > 0){
            setCurrentQuestionIdx( currentQuestionIdx - 1)
        }
    }

    const updateSelection = (index, answer) => {
        let new_answers = [...answers];
        new_answers[index] = answer;
        setAnswers(new_answers); 
    }

    const handleSubmit = () => {
        window.localStorage.setItem('answers' , answers)
        history.push('/answers')

    }


    const isEqualToZero = currentQuestionIdx === 0;
    const isEqualToArrayLength = currentQuestionIdx === LENGTH - 1

    return(
        <div className="questions-wrapper">
          <p>
              Question {currentQuestionIdx + 1} Of 20
          </p>
          <Question 
            question={questions[currentQuestionIdx]}
            // add={addSelection}
            update={updateSelection}
            answer={answers[currentQuestionIdx]}
            answered={!(answers[currentQuestionIdx] === null)}
            idx={currentQuestionIdx}
          />
          <div className="button-wrapper">
            {
                isEqualToZero === true ? (
                    <>
                    <button onClick={handleNext}> Next</button>
                    </>
                )
                : 
                isEqualToArrayLength === true ? 
                    ( <>
                        <button onClick={handlePrev}>Prev</button>
                        <button onClick={handleSubmit}> Submit</button>
                        </>
                    )
                    :
                    (
                        ( <>
                            <button onClick={handlePrev}>Prev</button>
                            <button onClick={handleNext}> Next</button>
                            </>
                            )
                    )
            }
          </div>
          
          {/* <div className="result">
             {
                 answers.map(( a, idx) => (
                   <span key={idx} >{a + ',' + '\n'}</span>
                 ))
             }
          </div> */}

        </div>
    )
}

export default QuestionPage