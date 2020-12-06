import React from 'react'
import { Fade} from 'react-reveal'

import {useHistory} from 'react-router-dom'

import homeImage from '../../asset/homeImage.jpeg'

import './home.scss'

const Home = () => {

    const history = useHistory()

    const handleSubmit = (event) => {
        // event.preventDefault()
        history.push('/questions')
    }

    return(
        <div className="home-wrapper">
           <div className="content-wrapper">
               <Fade right>
              <img src={homeImage} alt="Forest"/>
               </Fade>
              <h3>
                  Please Enter Your Information
              </h3>
              <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Enter Full Name" required/>
                  <input type="email" placeholder="Enter E-mail Address" required/>
                  <div className="btn-wrapper">
                     <button type="submit">
                         Start
                    <i className="arrow right icon"></i>
                    </button>
                  </div>
              </form>
           </div>
        </div>
    )
}

export default Home;