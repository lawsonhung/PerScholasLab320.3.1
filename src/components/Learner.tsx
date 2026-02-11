interface LearnerProps {
  learnerName: String,
  bio: String,
  scores?: [Score],
}

interface Score {
  date: String,
  score: Number,
}

export default function Learner({learnerName, bio, scores}: LearnerProps) {
  return (
    <>
      <h3>{learnerName}</h3>
      <p>{bio}</p>
      <ul>
        {scores?.map(score => {
          return (
            <li>
              <p>Date: {score.date}</p>
              <p>Score: {score.score.toString()}</p>
            </li>
          );
        })}
      </ul>
    </>
  )
};