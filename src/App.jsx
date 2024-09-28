import { useState } from 'react';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const isInputValid = userInput.duration >= 1;

    function handleChange(inputIdentity, newValue){
        setUserInput((prevInput) => {
          return {
            ...prevInput,
            [inputIdentity]: +newValue,
          }
        });
    }

  return (
    <>
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      {!isInputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {isInputValid && <Results input={userInput}/>}
    </>
  )
}

export default App
