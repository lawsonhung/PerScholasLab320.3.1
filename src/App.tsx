
import { useState } from 'react';
import './App.css';
import learnersData from "./utilities/learnerData.js";
import Learner from './components/Learner';

function App() {
  const [learners, setLearners] = useState(learnersData);

  return (
    <>
      {learners.map(learner => {
        console.log(learner)
        const {name, bio, scores} = learner;
        return (
          <Learner learnerName={name} bio={bio} scores={scores}/>
        );
      })}
    </>
  )
}

export default App
