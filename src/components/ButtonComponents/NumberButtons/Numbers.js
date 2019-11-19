import React, { useState } from "react";
import { numbers } from '../../../data';
import { NumberButton } from '../NumberButtons/NumberButton';



//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export function buttonPress (item) {
  console.log(item);
}

export const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [dataNum, setDataNum] = useState(0);
  console.log(numbers);
  return (
    <div>
        {numbers.map((item) => {
            return (
              <NumberButton number={item} onClick={buttonPress(item)} key={Math.random()} />
            )
          })
        }



      {/* <NumberButton number={numbers.map(item => {return item })} */}

      {/* // {numbers.map(item => { return {item}) } } */}
      
    
      
      { /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
    it any props needed by the child component*/ }
    </div>
  );
};
