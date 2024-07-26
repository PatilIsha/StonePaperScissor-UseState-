import  React,{useState } from "react";
import './StonePaperScissors.css';

const StonePaperScissors=()=>{
    const [userChoice,setUserChoice]=useState(' ')
    const [computerChoice,setComputerChoice]=useState(' ')
    const [result,setResult]=useState(' ')
    
    const choices = ['Stone', 'Paper', 'Scissors'];
    
    const handleClick=(choice)=>{
       const computerChoice=getComputerChoice();
       const result=determineResult(choice,computerChoice);
       
       setUserChoice(choice);
       setComputerChoice(choice);
       setResult(result);

    };

    const getComputerChoice=()=>{
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    const determineResult=(user,computer)=>{
        if(user===computer){
            return "Its a tie"
        }
        if(
            (user === 'Stone' && computer ==='Scissor') || (user ==='Paper' && computer ==='Stone') 
            || (user ==='Scissor' && computer==='Paper'))
        {
            return "User is Win"
        }
        return "Computer is win";
    };


return(

    <div>
      <h1>Stone Paper Scissors</h1>
      <div >
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div>
        <p>Your choice: {userChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <p>Result: {result}</p>
      </div>
    </div>
)
};
export default StonePaperScissors
