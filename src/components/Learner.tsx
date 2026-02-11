import "./Learner.css";

interface LearnerProps {
  learnerName: String,
  bio: String,
  scores: Score[],
}

interface Score {
  date: String,
  score: Number,
}

export default function Learner({learnerName, bio, scores}: LearnerProps) {

  function mapScores() {
    return scores.map(score => {
      return (
        <li key={score.date + score.score.toString()}>
          <p>Date: {score.date}</p>
          <p>Score: {score.score.toString()}</p>
        </li>
      )
    });
  };

  return (
    <>
      <h3>{learnerName}</h3>
      <p className="bio">{bio}</p>
      <ul className="scoreList">
        {mapScores()}
      </ul>
    </>
  )
};