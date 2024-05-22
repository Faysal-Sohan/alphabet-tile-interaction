import { useState } from "react";

const App = () => {

  const [outputString, setOutputString] = useState("");
  const [count, setCount] = useState(0);

  const alphabets = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split('');

  const handleString = (letter) => {
    const len = outputString.length;
    if (len == 0) {
      setOutputString(outputString + letter)
      setCount(1);
      return;
    }
    if (outputString[len - 1] !== letter) {
      setOutputString(outputString + letter);
      setCount(1);
    }
    else {
      let tempCount = count + 1;
      setCount(count + 1);
      if (tempCount < 3) {
        setOutputString(outputString + letter);
      }
      else if (tempCount % 3 === 0) {
        let newStr = "" + outputString;
        while (newStr[newStr.length - 1] == letter) {
          newStr = newStr.slice(0,-1);
        }
        setOutputString(newStr + "_");
      }
    }
  }

return (
  <div className="container mx-auto">
    <h3 className="text-3xl m-4">Output String: {outputString}</h3>
    <div className="flex flex-wrap justify-center gap-4 h-32">
      {
        alphabets.map((letter, i) => <div key={i} className="bg-purple-200 text-center text-2xl p-4 rounded-md shadow-sm hover:bg-gray-300" onClick={() => handleString(letter)}>
          {letter}
        </div>)
      }
    </div>
  </div>
);
};

export default App;