import React from 'react'

const AnswersPage = () => {

    const answers = window.localStorage.getItem('answers') || ''

    return(
        <div style={{ padding : '50px' , fontSize : '40px'}}>
            {answers}
        </div>
    )
}

export default AnswersPage;