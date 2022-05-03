import "../Styles/css/Main.css";
import { useState, useEffect } from "react";


export default function Main() {

  const [areaValue, setAreaValue] = useState();
  const [sentence, setSentence] = useState("");
  const APICALL = "http://api.quotable.io/random";

  const handleChange = (event) => setAreaValue(event.target.value);

  const displaySentence = async () => {
    const fetchDatas = await fetch(APICALL);
    const json = await fetchDatas.json();
    const resultats = json.content;
    
    setSentence('');
    setSentence(resultats)
    setAreaValue('')
  };
    
  useEffect(() => {
    displaySentence();
  }, []);


  return (
    <>    
      <div className="container">
         <div className="sentenceToWrite">
            { sentence.split('').map((carac, index) => (
                <span key={index}>{carac}</span>
              ))
            }    
         </div>

         <textarea value={areaValue}
                   onChange={handleChange}
                   autoFocus
                   className="test-sentence">
         </textarea>
      </div>
    </>
  )
}
 