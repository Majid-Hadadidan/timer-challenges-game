import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExprire, setTimerExpire] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpire(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExprire && <p>You Lost</p>} */}
        <p className="challenge-time">
          {targetTime} Second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
