import { useState, useEffect } from "react";
import "../Styles/css/Timer.css";


export default function Timer({score}) {
  const [time, setTime] = useState(60);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [time]);

  return (
    <>
      <h2 className="time"> Temps :  {time} </h2>
      <h2 className="score"> Score : {score} </h2>
    </>
  );
}
