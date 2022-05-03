import "../Styles/css/Main.css";
import React, { useState, useEffect } from "react";


export default function Main() {

  const [areaValue, setAreaValue] = useState("");
  const [sentence, setSentence] = useState();
  const APICALL = "http://api.quotable.io/random";

  const handleChange = (event) => setAreaValue(event.target.value);


  const displaySentence = async () => {
    const fetchDatas = await fetch(APICALL);
    const json = await fetchDatas.json();
    const resultats = json.content;


    setSentence('');

    // list = resultats.split('').map((caracter, index) => {
    //   return <span key={index}> {caracter} </span>
    // });

  

  };

  useEffect(() => {
    displaySentence();
  }, []);



  return (
    <>    
      <div className="container">
         <div className="sentencetoWrite">
            {sentence}    
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
