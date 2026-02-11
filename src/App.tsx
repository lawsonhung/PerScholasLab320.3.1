
import { useState } from 'react';
import './App.css';
import learnersData from "./utilities/learnerData.js";
import Learner from './components/Learner';

function App() {
  const [learners, _setLearners] = useState(learnersData);

  function mapLearners() {
    return learners.map(learner => {
      const {name, bio, scores} = learner;
      return (
        <Learner learnerName={name} bio={bio} scores={scores} />
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
