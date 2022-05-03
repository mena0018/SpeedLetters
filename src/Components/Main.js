import "../Styles/css/Main.css";
import { useState, useEffect } from "react";
import Timer from "./Timer";


export default function Main() {

  const [areaValue, setAreaValue] = useState('');
  const [sentenceToWrite, setSentenceToWrite] = useState("");
  const [sentenceComplete, setSetenceComplete] = useState(false);
  
  const [sentenceLenght, setSentenceLength] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const APICALL = "http://api.quotable.io/random";
  
  const handleChange = (event) => setAreaValue(event.target.value);

  const displaySentence = async () => {
    const fetchDatas = await fetch(APICALL);
    const json = await fetchDatas.json();
    const resultats = json.content;
    
    setSentenceToWrite('');
    setSentenceToWrite(resultats.split(''))
    setAreaValue(' ')

    setSentenceLength(resultats.length)
  };
    
  useEffect(() => {
    displaySentence();
  }, [sentenceComplete]);

  
  
  const testSentence = () => {
    let textAreaArray = areaValue.split('');
    setSetenceComplete(true)
    
    sentenceToWrite.forEach((carac, index) => {
      const wordToCheck = textAreaArray[index];

      if(wordToCheck === undefined){
        setSetenceComplete(false) 
        return;
      } 

      else if (wordToCheck === carac) {
        setIsCorrect(true)
      }

      else {
        setIsCorrect(false)
        setSetenceComplete(false) 
      }
    })

    if (sentenceComplete) {
      displaySentence()
      setScore((score) => score += sentenceLenght)
    }
  }

  return (
    <>   
    <Timer score={score}/>

    {sentenceToWrite.length > 0 &&
      <div className="container">
         <div className={`sentence-to-write ${isCorrect ? 'correct' : 'incorrect'}`}>
            { sentenceToWrite.map((carac, index) => (
                <span key={index}>{carac}</span>
              ))
            }    
         </div>

         <textarea value={areaValue}
                   onChange={handleChange}
                   autoFocus
                   onInput={testSentence}
                   className="test-sentence">
         </textarea>
      </div>
    }
    </>
  )
}
 