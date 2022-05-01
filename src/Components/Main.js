import "../Styles/css/Main.css"
import { useState } from "react"


export default function Main() {

   const [areaValue, setAreaValue] = useState('')

   const handleChange = (event) => setAreaValue(event.target.value);
   

  return (
    <>
      <h2 className="time">  Temps : </h2>
      <h2 className="score"> Score : </h2>

      <div className="container">

         <div className="sentencetoWrite"></div>

         <textarea value={areaValue}
                   onChange={handleChange}
                   autoFocus
                   className="test-sentence">
         </textarea>
      </div>
    </>
  )
}
