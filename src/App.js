import React from 'react'
import { Switch, Route } from 'react-router-dom'


import QuestionPage from './pages/questions/questions-page'
import Home from './pages/home/home'
import Info from './pages/info-page/info'
import AnswersPage from './pages/answer-page/answer-page'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/questions" component={QuestionPage}/>
        <Route path="/info" component={Info}/>
        <Route path='/answers' component={AnswersPage}/>
      </Switch>
    </div>
  );
}

export default App;
