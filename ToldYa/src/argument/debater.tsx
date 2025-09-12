import { useState } from "react";

export default function Debater() {

//   const [pov, setPov] = useState("");
//   const { currentDebater, setCurrentDebater } = useContext(DebateContext);\

const  [currentDebater, setCurrentDebater] = useState(1);

  const nextDebater = () => {
    setCurrentDebater(2);
  };
  return (
    <div className="debater">
      <h2>Debater Page</h2>
      <p>
        This is where one of the you will enter their point of view, and the
        other will counter it in the next step.
      </p>
      {currentDebater === 1 && <FirstDebate />}
      <button onClick={nextDebater}>Submit Argument</button>
    </div>
  );
}

export function FirstDebate() {
    return <div>First Debate Component</div>;
}
