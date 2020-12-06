import React , {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Fade} from 'react-reveal'

import './question.scss'

const Question = ({ question , idx, answered = false, update, answer }) => {
    const history = useHistory()
    const [checked , setChecked] = useState(null)

    useEffect(() => {
        if(answered){
            setChecked(answer === 1 ? "Yes" : "No")
        }
        else {

            setChecked(null)
        }
    }, [idx, answer, answered])

    const handleChecked = (e)=> {
        const { value } = e.target;
        setChecked(value);
            if(value === "Yes"){
                update(idx, 1)
            }
            else {
                update(idx, 0) 
            }
    }


    return(
        <Fade right>

      <div className="q-wrapper">
          <p>
            <span>{idx + 1}.</span> {question}<i className="info icon" onClick={() => history.push('/info')}></i>
          </p>

          <form required>
              <input type="radio" name="question" value="Yes" checked={checked === "Yes"} onChange={handleChecked}/>
              <label htmlFor="Yes">Yes</label> <br/>
              <input type="radio" name="question" value="No" checked={checked === "No"} onChange={handleChecked}/>
              <label htmlFor="No">No</label>
          </form>
          
      </div>
        </Fade>
    )
}

export default Question;