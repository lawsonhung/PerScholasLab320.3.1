
import { useState } from 'react';
import './App.css';
import learnersData from "./utilities/learnerData.js";
import Learner from './components/Learner';

function App() {
  const [learnersObj, _setLearners] = useState(learnersData);

  function mapLearners() {
    return learnersObj.learners.map(learner => {
      const {name, bio, scores} = learner;
      return (
        <Learner key={name} learnerName={name} bio={bio} scores={scores} />
      )
    })
  };

  return (
    <>
      {mapLearners()}
    </>
  )
}

export default App
